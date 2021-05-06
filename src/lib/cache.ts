
/**
*Arquivo de configuração do cache do Redis
*
 */

import * as dotenv from "dotenv";

dotenv.config();


const Redis  = require('ioredis');

class cache{
    redis;
    constructor(){
        this.redis = new Redis(
           {
            host:process.env.REDIS_HOST || "localhost",
            port:process.env.REDIS_PORT || 6379,
            keyPrefix:"cache:"
           }
        )
    }

    async get(key:any){
        const value = await this.redis.get(key);

        return value ? JSON.parse(value):null;
    }

    set(key:any,value:any,timeExp:any){
        return this.redis.set(key,JSON.stringify(value),"EX",timeExp);
    }

    del(key: any){
        return this.redis.del(key);
    }

    async delPrefix(prefix: any){
        const keys = (await this.redis.keys(`cache:${prefix}`)).map((key: string)=>
        key.replace("cache","")
        )

        return this.redis.del(keys);
    }
}

module.exports = new cache()