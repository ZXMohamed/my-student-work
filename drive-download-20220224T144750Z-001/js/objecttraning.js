var states = {
        Afghanistan: {
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
                Badakhshan: {
                    id: 3901,
                    name: "Badakhshan",
                    state_code: "BDS"
                },
                Bamyan: {
                    id: 3872,
                    name: "Bamyan",
                    state_code: "BAM"
                },
                "Daykundi": {
                    "id": 3892,
                    "name": "Daykundi",
                    "state_code": "DAY"
                },
                "Farah": {
                    "id": 3899,
                    "name": "Farah",
                    "state_code": "FRA"
                }
            }
        },
        AlandIslands: {
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
        Albania: {
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
                BeratCounty: {
                    id: 603,
                    name: "Berat County",
                    state_code: "01"
                },
                HasDistrict: {
                    id: 600,
                    name: "Has District",
                    state_code: "HA"
                },
                TropojëDistrict: {
                    id: 636,
                    name: "Tropojë District",
                    state_code: "TP"
                },
                VlorëCounty: {
                    id: 634,
                    name: "Vlorë County",
                    state_code: "12"
                },
                VlorëDistrict: {
                    id: 613,
                    name: "Vlorë District",
                    state_code: "VL"
                }
            }
        },
        Algeria: {
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
                Adrar: {
                    id: 1118,
                    name: "Adrar",
                    state_code: 01
                },
                AïnDefla: {
                    id: 1119,
                    name: "Aïn Defla",
                    state_code: "44"
                },
                Tlemcen: {
                    id: 1107,
                    name: "Tlemcen",
                    state_code: "13"
                },
                Touggourt: {
                    id: 4911,
                    name: "Touggourt",
                    state_code: "55"
                }
            }
        },
        AmericanSamoa: {
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
        Andorra: {
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
                AndorralaVella: {
                    id: 488,
                    name: "Andorra la Vella",
                    state_code: "07"
                },
                Canillo: {
                    id: 489,
                    name: "Canillo",
                    state_code: "02"
                },
                Encamp: {
                    id: 487,
                    name: "Encamp",
                    state_code: "03"
                },
                SantJuliàdeLòria: {
                    id: 490,
                    name: "SantJuliàdeLòria",
                    state_code: "06"
                }
            }
        }
    }
    //////////////////////////
function afg() {
    document.getElementById("sp1").innerHTML = "NAME : " + " " + states.Afghanistan.name;
    document.getElementById("sp2").innerHTML = "phone code : " + " " + states.Afghanistan.phone_code;
    document.getElementById("sp3").innerHTML = "capital : " + " " + states.Afghanistan.capital;
    document.getElementById("sp4").innerHTML = "currency : " + " " + states.Afghanistan.currency;
    document.getElementById("sp5").innerHTML = "region : " + " " + states.Afghanistan.region;

}


function aln() {
    document.getElementById("sp6").innerHTML = "NAME : " + " " + states.AlandIslands.name;
    document.getElementById("sp7").innerHTML = "phone code : " + " " + states.AlandIslands.phone_code;
    document.getElementById("sp8").innerHTML = "capital : " + " " + states.AlandIslands.capital;
    document.getElementById("sp9").innerHTML = "currency : " + " " + states.AlandIslands.currency;
    document.getElementById("sp10").innerHTML = "region : " + " " + states.AlandIslands.region;

}

function alb() {
    document.getElementById("sp11").innerHTML = "NAME : " + " " + states.Albania.name;
    document.getElementById("sp12").innerHTML = "phone code : " + " " + states.Albania.phone_code;
    document.getElementById("sp13").innerHTML = "capital : " + " " + states.Albania.capital;
    document.getElementById("sp14").innerHTML = "currency : " + " " + states.Albania.currency;
    document.getElementById("sp15").innerHTML = "region : " + " " + states.Albania.region;

}

function alg() {
    document.getElementById("sp16").innerHTML = "NAME : " + " " + states.Algeria.name;
    document.getElementById("sp17").innerHTML = "phone code : " + " " + states.Algeria.phone_code;
    document.getElementById("sp18").innerHTML = "capital : " + " " + states.Algeria.capital;
    document.getElementById("sp19").innerHTML = "currency : " + " " + states.Algeria.currency;
    document.getElementById("sp20").innerHTML = "region : " + " " + states.Algeria.region;

}

function amr() {
    document.getElementById("sp21").innerHTML = "NAME : " + " " + states.AmericanSamoa.name;
    document.getElementById("sp22").innerHTML = "phone code : " + " " + states.AmericanSamoa.phone_code;
    document.getElementById("sp23").innerHTML = "capital : " + " " + states.AmericanSamoa.capital;
    document.getElementById("sp24").innerHTML = "currency : " + " " + states.AmericanSamoa.currency;
    document.getElementById("sp25").innerHTML = "region : " + " " + states.AmericanSamoa.region;

}

function and() {
    document.getElementById("sp26").innerHTML = "NAME : " + " " + states.Andorra.name;
    document.getElementById("sp27").innerHTML = "phone code : " + " " + states.Andorra.phone_code;
    document.getElementById("sp28").innerHTML = "capital : " + " " + states.Andorra.capital;
    document.getElementById("sp29").innerHTML = "currency : " + " " + states.Andorra.currency;
    document.getElementById("sp30").innerHTML = "region : " + " " + states.Andorra.region;

}

//////////////////

function fun() {
    var First = document.getElementById("materialRegisterFormFirstName").value;
    var Last = document.getElementById("materialRegisterFormLastName").value;
    var Email = document.getElementById("materialRegisterFormEmail").value;
    var age = parseInt(document.getElementById("materialRegisterFormAge").value);
    var address = document.getElementById("materialRegisterFormAddress").value;
    confirm("Name :" + " " + First + "  " + Last);
    confirm("Email :" + " " + Email);
    confirm("age :" + " " + age);
    confirm("address :" + " " + address);
}

function onk() {
    var y = 2022;
    var age = parseInt(document.getElementById("materialRegisterFormAge").value);

    document.getElementById("sp").innerHTML = y - age;


}