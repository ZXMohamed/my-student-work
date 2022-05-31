var states={
    Afghanistan:{
        name: "Afghanistan",
        phone_code: "93",
        capital: "Kabul",
        currency: "AFN",
        region: "Asia",
        translations: {
            kr: "아프가니스탄",
            br: "Afeganistão",
            pt: "Afeganistão",
            nl: "Afghanistan",
            hr: "Afganistan",
            fa: "افغانستان",
            de: "Afghanistan",
            es: "Afganistán",
            fr: "Afghanistan",
            ja: "アフガニスタン",
            it: "Afghanistan",
            cn: "阿富汗"
           

        },
        states: {
            Badakhshan:{
                id: 3901,
                name: "Badakhshan",
                state_code: "BDS"
            },
            Bamyan:{
                id: 3872,
                name: "Bamyan",
                state_code: "BAM"
            },
            "Daykundi":{
                "id": 3892,
                "name": "Daykundi",
                "state_code": "DAY"
            },
             "Farah":{
                "id": 3899,
                "name": "Farah",
                "state_code": "FRA"
            }
        }
    },
    AlandIslands:{
        name: "Aland Islands",
        phone_code: "+358-18",
        capital: "Mariehamn",
        currency: "EUR",
        region: "Europe",
        translations: {
            kr: "올란드 제도",
            br: "Ilhas de Aland",
            pt: "Ilhas de Aland",
            nl: "Ålandeilanden",
            hr: "Ålandski otoci",
            fa: "جزایر الند",
            de: "Åland",
            es: "Alandia",
            fr: "Åland",
            ja: "オーランド諸島",
            it: "Isole Aland",
            cn: "奥兰群岛"
        },
        states: {}
    },
    Albania:{
        name: "Albania",
        phone_code: "355",
        capital: "Tirana",
        currency: "ALL",
        region: "Europe",
        translations: {
            kr: "알바니아",
            br: "Albânia",
            pt: "Albânia",
            nl: "Albanië",
            hr: "Albanija",
            fa: "آلبانی",
            de: "Albanien",
            es: "Albania",
            fr: "Albanie",
            ja: "アルバニア",
            it: "Albania",
            cn: "阿尔巴尼亚"
        },
        states: {
            BeratCounty:{
                id: 603,
                name: "Berat County",
                state_code: "01"
            },
            HasDistrict:{
                id: 600,
                name: "Has District",
                state_code: "HA"
            },
            TropojëDistrict:{
                id: 636,
                name: "Tropojë District",
                state_code: "TP"
            },
            VlorëCounty:{
                id: 634,
                name: "Vlorë County",
                state_code: "12"
            },
            VlorëDistrict:{
                id: 613,
                name: "Vlorë District",
                state_code: "VL"
            }
        }
    },
    Algeria:{
        name: "Algeria",
        phone_code: "213",
        capital: "Algiers",
        currency: "DZD",
        region: "Africa",
        translations: {
            kr: "알제리",
            br: "Argélia",
            pt: "Argélia",
            nl: "Algerije",
            hr: "Alžir",
            fa: "الجزایر",
            de: "Algerien",
            es: "Argelia",
            fr: "Algérie",
            ja: "アルジェリア",
            it: "Algeria",
            cn: "阿尔及利亚"
        },
        states: {
            Adrar:{
                id: 1118,
                name: "Adrar",
                state_code: 01
            },
            AïnDefla:{
                id: 1119,
                name: "Aïn Defla",
                state_code: "44"
            },
            Tlemcen:{
                id: 1107,
                name: "Tlemcen",
                state_code: "13"
            },
           Touggourt:{
                id: 4911,
                name: "Touggourt",
                state_code: "55"
            }
        }
    },
    AmericanSamoa:{
        name: "AmericanSamoa",
        phone_code: "+1-684",
        capital: "Pago Pago",
        currency: "USD",
        region: "Oceania",
        translations: {
            kr: "아메리칸사모아",
            br: "Samoa Americana",
            pt: "Samoa Americana",
            nl: "Amerikaans Samoa",
            hr: "Američka Samoa",
            fa: "ساموآی آمریکا",
            de: "Amerikanisch-Samoa",
            es: "Samoa Americana",
            fr: "Samoa américaines",
            ja: "アメリカ領サモア",
            it: "Samoa Americane",
            cn: "美属萨摩亚"
        },
        states: {}
    },
    Andorra:{
        name: "Andorra",
        phone_code: "376",
        capital: "Andorra la Vella",
        currency: "EUR",
        region: "Europe",
        translations: {
            kr: "안도라",
            br: "Andorra",
            pt: "Andorra",
            nl: "Andorra",
            hr: "Andora",
            fa: "آندورا",
            de: "Andorra",
            es: "Andorra",
            fr: "Andorre",
            ja: "アンドラ",
            it: "Andorra",
            cn: "安道尔"
        },
        states: {
            AndorralaVella:{
                id: 488,
                name: "Andorra la Vella",
                state_code: "07"
            },
            Canillo:{
                id: 489,
                name: "Canillo",
                state_code: "02"
            },
            Encamp:{
                id: 487,
                name: "Encamp",
                state_code: "03"
            },
            SantJuliàdeLòria:{
                id: 490,
                name: "SantJuliàdeLòria",
                state_code: "06"
            }
        }
    }
}
function country1(){
    document.getElementById("demo").innerHTML= states.Afghanistan.name + "-" +states.Afghanistan.capital + "-" +states.Afghanistan.currency+"- " +states.Afghanistan.region;
}
function country2(){
    document.getElementById("demo").innerHTML= states.AlandIslands.name + " -" + states.AlandIslands.capital + "-" + states.AlandIslands.currency+" -" +states.AlandIslands.region;
} 
function country3(){
    document.getElementById("demo").innerHTML= states.Albania.name +"- "+states.Albania.capital + "- "+ states.Albania.currency + "- "+ states.Albania.region;
} 
function country4(){
    document.getElementById("demo").innerHTML= states.Algeria.name + "- " +states.Algeria.capital + "- " +states.Algeria.currency+"- " +states.Algeria.region;
} 
function country5(){
    document.getElementById("demo").innerHTML= states.AmericanSamoa.name + "- " +states.AmericanSamoa.currency+" -" +states.AmericanSamoa.region;
} 
function country6(){
    document.getElementById("demo").innerHTML= states.Andorra.name+ " -" +states.Andorra.capital + " -" +states.Andorra.capital+"- " +states.Andorra.region ;
}  


function apply(){
    var a=document.getElementById("firsttname").value;
    var b=document.getElementById("lasttname").value;
    var c=document.getElementById("emaill").value;
    var d=document.getElementById("age").value;
    z= "Hello"+" " +" "+ a+b +"- "+ "your email is " + c +"-"+ " your age " + d ;
    confirm(z);

}
function agee(){
    var q=parseint(document.getElementById("birth").value); 
    var w=2022-q; 
    document.getElementById("age").innerHTML= w;
}