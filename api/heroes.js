export default function handler(req, res) {
    const referer = req.headers.referer || '';
    if (!referer.includes('project-15kz8.vercel.app')) {
        return res.status(403).json({ error: 'forbidden' });
    }
    res.status(200).json([
        { id:1, name:"布倫希爾德", img:"heroes/gold/布倫希爾德.png", rarity:"gold", canEvo:false,
          base:{ type:["star"], desc:"依據 勝利之星 x <h>1700</h> 提升ATK<br>依 ATK 再給予 魔法傷害<br>被攻擊的英雄，每回合給予破損效果" } },
        { id:2, name:"凱伊", img:"heroes/gold/凱伊.png", rarity:"gold", canEvo:false,
          base:{ type:["star"], desc:"ATK 提升 <h>1</h> +(勝利之星 x <h>0.7</h> 倍)<br>被攻擊的英雄，受到重擊效果" } },
        { id:3, name:"伊瑟", img:"heroes/gold/伊瑟.png", rarity:"gold", canEvo:true,
          base:{ type:["addcard","magicbuff"], desc:"我方三個陣地 魔法傷害增強 <h>1.8</h> 倍<br>增加 <h>3</h> 張 換牌" },
          evo: { type:["magicbuff","addcard"], desc:"我方一個陣地 魔法傷害增強 <h>3.2</h> 倍<br>持續兩回合<br>增加 <h>4</h> 張 換牌"} },
        { id:4, name:"赫拉薇絲", img:"heroes/gold/赫拉薇絲.png", rarity:"gold", canEvo:false,
          base:{ type:["charm","lifesteal","magic"], 
            desc:"敵方ATK最高的 <h>2</h> 位英雄進入魅惑狀態<br>\
                單回合：<br>封鎖 換牌 <h>2</h> 回合，給予 <h>8000</h> 魔法傷害<br>\
                雙回合：<br>封鎖祕法 <h>2</h> 回合，依回合數 x <h>1800</h> 吸取傷害" } },
        { id:5, name:"邱比特", img:"heroes/gold/邱比特.png", rarity:"gold", canEvo:false,
          base:{ type:["addcard","cover","blind","delpower","star"],
            desc:"光環效果 我方手牌ATK提升 <h>1.2</h> 倍\
                <br>單回合：<br>遮蓋 <h>10</h> 張撲克牌，依勝利之星 x <h>1</h> 增加 換牌\
                <br>雙回合：<br><h>5</h> 張手牌盲目，依勝利之星 x <h>10</h> 降低祕法能量" } },
        { id:6, name:"闇影喵師", img:"heroes/purple/闇影喵師.png", rarity:"purple", canEvo:true,
          base:{ type:["curse","heal"], desc:"敵方手牌陷入 <h>10</h> 個 詛咒<br>每回合恢復 <h>4000</h> HP，持續3回合" },
          evo: { type:["curse","cursedmg","lifesteal","pointdmg"],
          desc:"給予敵方手牌詛咒 x <h>1800</h> 的咒印傷害<br>依牌型點數 x <h>100</h> 吸取傷害<br>被攻擊的英雄，每回合手牌陷入 <h>3</h> 個 詛咒" } },
        { id:7, name:"烏爾德", img:"heroes/gold/烏爾德.png", rarity:"gold", canEvo:false,
          base:{ type:["point","magic","addcard","pointdmg"],
          desc:"依牌型點數 x <h>500</h> 給予 魔法傷害<br>我方三個陣地點數增加 <h>200</h> 點，<br>持續兩回合<br>增加 <h>10</h> 張 換牌" } },
        { id:8, name:"驅魔師", img:"heroes/blue/驅魔師.png", rarity:"blue", canEvo:true,
          base:{ type:["addcard","magic"], desc:"依敵方當前HP的 <h>23%</h> 給予 魔法傷害<br>增加 <h>2</h> 張 換牌" },
          evo: { type:["star","magic","addcard"], desc:"依 勝利之星 x <h>1800</h> 給予 魔法傷害<br>增加 <h>3</h> 張 換牌" } },
        { id:9, name:"神使", img:"heroes/white/神使.png", rarity:"white", canEvo:true,
          base:{ type:["addcard"], desc:"增加 <h>6</h> 張 換牌" },
          evo: { type:["cardsteal"], desc:"偷取敵方最多 <h>6</h> 張 換牌" } },
        { id:10, name:"勾魂判官", img:"heroes/purple/勾魂判官.png", rarity:"purple", canEvo:true,
          base:{ type:["magic","blockcard","pointdmg"], desc:"依牌型點數 x <h>180</h> 給予 魔法傷害<br>封鎖敵方ATK最低的英雄 <h>3</h> 回合" },
          evo: { type:["star","magic","curse"], desc:"敵方手牌陷入 勝利之星 x <h>1</h> 個 詛咒<br>以隊伍總ATK的 <h>25%</h> 給予 魔法傷害" } },
        { id:11, name:"梅林", img:"heroes/gold/梅林.png", rarity:"gold", canEvo:false,
          base:{ type:["copyskill"], desc:"隨機複製我方上陣英雄技能" } },
        { id:12, name:"關羽", img:"heroes/gold/關羽.png", rarity:"gold", canEvo:false,
          base:{ type:["pointdmg","magic","lifesteal"],
          desc:"依牌型點數 x <h>300</h> 提升 ATK<br>\
                依牌型點數 x <h>300</h> 給予 魔法傷害<br>\
                依牌型點數 x <h>300</h> 吸取傷害" } },
        { id:13, name:"海姆達爾", img:"heroes/gold/海姆達爾.png", rarity:"gold", canEvo:false,
          base:{ type:["point","guard"], desc:"光之守護 <h>3</h> 回合，免疫負面狀態<br>隨機兩個陣地牌型點數增加 <h>35</h> 點" } },
        { id:14, name:"御魔劍士", img:"heroes/purple/御魔劍士.png", rarity:"purple", canEvo:true,
          base:{ type:["pointdmg","magic"], desc:"依牌型點數 x <h>100</h> 提升 ATK<br>再給予 <h>6000</h> 魔法傷害" },
          evo: { type:["pointdmg","magic","lifesteal"],
          desc:"依牌型點數 x <h>100</h> 提升 ATK<br>\
                依牌型點數 x <h>100</h> 給予 魔法傷害<br>\
                依牌型點數 x <h>100</h> 吸取傷害" } },
        { id:15, name:"維納斯", img:"heroes/gold/維納斯.png", rarity:"gold", canEvo:true,
          base:{ type:["charm","atkup"], desc:"敵方下回合 <h>2</h> 張手牌魅惑<br>讓下一道英雄ATK提升 <h>1.8</h> 倍<br>我方手牌ATK提升 <h>1.2</h> 倍" },
          evo: { type:["atkup","purify"], desc:"我方手牌ATK提升 <h>1.6</h> 倍<br>淨化手牌負面效果<br>封鎖祕法 <h>2</h> 回合" }  },
        { id:16, name:"古爾維格", img:"heroes/gold/古爾維格.png", rarity:"gold", canEvo:true,
          base:{ type:["magicbuff","lifesteal","guarddmg"], desc:"下一道英雄 魔法傷害 提升 <h>1.7</h> 倍<br>依敵方護盾上限 <h>70%</h> 破盾傷害<br>依敵方祕法 x <h>70</h> 吸取傷害" },
          evo: { type:["curse","cursedmg"], desc:"戰吼 給敵方ATK最高、最低英雄 <h>5</h> 個 詛咒<br>給予敵方手牌詛咒 x <h>10000</h> 的咒印傷害" }  },
        { id:17, name:"伏羲", img:"heroes/gold/伏羲.png", rarity:"gold", canEvo:true,
          base:{ type:["magicbuff","lifestealbuff","counterbuff"], desc:"下回合隨機兩個陣地<br>反擊傷害 增強 <h>1.7</h> 倍<br>魔法傷害 增強 <h>1.7</h> 倍<br>吸取傷害 增強 <h>1.7</h> 倍" },
          evo: { type:["magicbuff","counterbuff","purify"], 
          desc:"清除我方負面的陣地效果<br>清除敵方增益的陣地效果<br>單回合：<br>隨機兩個陣地 魔法傷害 增強 <h>2</h> 倍<br>雙回合：<br>隨機兩個陣地 反擊傷害 增強 <h>2</h> 倍" }  },
    ]) ;
}
