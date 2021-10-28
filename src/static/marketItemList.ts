
import {
    broomBlack1, broomBlack2, broomBlack3, broomGray1, broomGray2, broomGray3, incenseWinter1, incenseWinter2, incenseWinter3, incenseWinter4, incenseSummer1, incenseSummer2, incenseSummer3, incenseSummer4, incenseHolder1, incenseHolder2, incenseHolder3, incenseHolder4, moonjar1, moonjar2, moonjar3, moonjar4, heukjavase1, heukjavase2, heukjavase3, heukjavase4, horivaseBlue1, horivaseBlue2, horivaseBlue3, horivaseBlue4, horivaseBrown1, horivaseBrown2, horivaseBrown3, horivaseBrown4, bojagibag1, bojagibag2, bojagibag3, bojagibag4, baeraevase1, baeraevase2, baeraevase3, baeraevase4, norigae1, norigae2, norigae3, norigae4, scrollPoster1, scrollPoster2, scrollPoster3, scrollPoster4, woodenBoard1, woodenBoard2, woodenBoard3, woodenBoard4, subiMamich1, subiMamich2, subiMamich3, subiMamich4, bangjja1, bangjja2, bangjja3, bangjja4,
} from "./image";

export interface ItemContent {
    master: string;
    subEnTitle: string;
    subTitle: string;
    productInfo: string;
    productImages: Array<Array<string>>;
    caption?: string;
};

export interface ItemType {
    id: number;
    image: string;
    title: string;
    enTitle: string;
    // desc: string;
    price: number;
    content?: ItemContent;
    // funding: ItemFunding;
};


const Items: Array<Array<ItemType>> = [
    [
        {
        id: 1,
        image: "broom_bitjaru_1",
        title: "광덕 미니 빗자루",
        enTitle: "Mini Broom Bitjaru",
        price: 45.00,
        content: {
            master: "광덕 빗자루 공예사 이동균",
            subEnTitle: "Korea Broom - Bitjaru",
            subTitle: "이동균 공예사의  미니 빗자루",
            productInfo: `Hand crafted by Dong Kyun Lee in Jaecheon, South Korea\nDimensions(approx.) ~9.5 inch\nColors and length can be slightly different from the pictures.`,
            productImages: [
                [broomBlack1, broomBlack3],
                [broomBlack2]
            ]},
        }, {
            id: 2,
            image: "broom_bitjaru_2",
            title: "광덕 미니 빗자루",
            enTitle: "Mini Broom Bitjaru",
            price: 45.00,
            content: {
                master: "광덕 빗자루 공예사 이동균",
                subEnTitle: "Korea Broom - Bitjaru",
                subTitle: "이동균 공예사의  미니 빗자루",
                productInfo: `Hand crafted by Dong Kyun Lee in Jaecheon, South Korea\nDimensions(approx.) ~9.5 inch\nColors and length can be slightly different from the pictures.`,
                productImages: [
                    [broomGray1, broomGray3],
                    [broomGray2]
                ]}
    }],
    [{
        id: 3,
        image: "oimu_incense_stick_winter",
        title: "오이뮤 인센스 스틱 - winter",
        enTitle: "OIMU INCENSE STICK - winter",
        price: 40.00,
        content: {
            master: "master: “OIMU (오이뮤)",
            subEnTitle: "OIMU Incense stick ",
            subTitle: "전통의 향을 현대적으로 재해석 ",
            productInfo: `오이뮤 선향은 국내에서 오랫동안 향을 만들어 국산 천연 향의 명맥을 유지해 오던 전통 향방과 협업해서 제작되었습니다. 의례적인 용도로만 여겨지고 있는 전통 선향의 단절되었던 생활문화를 다시 알리고 좋은 향을 호흡하는 즐거움을 선사합니다. 오이뮤 선향은 국내에서 오랫동안 향을 만들어 국산 천연 향의 명맥을 유지해 오던 전통 향방과 협업해서 제작되었습니다. 의례적인 용도로만 여겨지고 있는 전통 선향의 단절되었던 생활문화를 다시 알리고 좋은 향을 호흡하는 즐거움을 선사합니다.`,
            productImages: [
                [incenseWinter1],
                [incenseWinter2, incenseWinter3, incenseWinter4]
            ]
        }
    }, {
            id: 4,
        image: "oimu_incense_stick_summer",
            title: "오이뮤 인센스 스틱 - summer",
        enTitle: "OIMU INCENSE STICK - summer",
            price: 40.00,
            content: {
                master: "OIMU (오이뮤) ",
                subEnTitle: "OIMU Incense stick",
                subTitle: "전통의 향을 현대적으로 재해석 ",
                productInfo: `오이뮤 선향은 국내에서 오랫동안 향을 만들어 국산 천연 향의 명맥을 유지해 오던 전통 향방과 협업해서 제작되었습니다. 의례적인 용도로만 여겨지고 있는 전통 선향의 단절되었던 생활문화를 다시 알리고 좋은 향을 호흡하는 즐거움을 선사합니다. 오이뮤 선향은 국내에서 오랫동안 향을 만들어 국산 천연 향의 명맥을 유지해 오던 전통 향방과 협업해서 제작되었습니다. 의례적인 용도로만 여겨지고 있는 전통 선향의 단절되었던 생활문화를 다시 알리고 좋은 향을 호흡하는 즐거움을 선사합니다.`,
                productImages: [
                    [incenseSummer1],
                    [incenseSummer2, incenseSummer3, incenseSummer4]
                ]
            }
        }],
    [{
        id: 5,
        image: "oimu_incense_holder",
        title: "오이뮤 인센스 홀더",
        enTitle: "OIMU Incense Holder",
        price: 45.00,
        content: {
            master: "OIMU (오이뮤) ",
            subEnTitle: "OIMU Incense holder ",
            subTitle: "전통의 향을 현대적으로 재해석  ",
            productInfo: `오이뮤 미니향로는 선향을 꽂아 놓고 즐길 수 있는 홀더입니다.
과거에 쓰이던 향로의 형태를 분석해서 하단의 삼발이를 유지하고 상단에는 다양한 컬러와 패턴을 적용해서 생활 속 조화로운 오브제가 될 수 있게 디자인 되었습니다.`,
            productImages: [
                [incenseHolder1],
                [incenseHolder2, incenseHolder3, incenseHolder4]
            ]
        }
    }],
    [{
        id: 6,
        image: "moon_jar",
        title: "무이 항아리",
        enTitle: "Moon Jar Brown/White",
        price: 150.00,
        content: {
            master: "SEOYEN CHOI ",
            subEnTitle: "MOON JAR ",
            subTitle: "Moon jar",
            productInfo: `Be advice that this is a pre-order item\nAll moon jars are available for pre-order and it takes about 8weeks to ship.\n\n*PLEASE NOTE*\n\nEach handmade ceramic piece is artfully unique in detail, and sold with natural irregularities in color, texture, and glaze. Respectfully, all sales of these ceramics are final.\n\nDimensions(approx.)\n\n(D)11 x (H)10 inch \n\nHandmade by Seoyen Choi, LA based Korean-American ceramicist `,
            productImages: [
                [moonjar1],
                [moonjar2, moonjar3, moonjar4]
        ]}
    },
    {
        id: 7,
        image: "heukja_vase",
        title: "무이화병",
        enTitle: "MU-YI(무이) HEUKJA VASE NO. 1",
        price: 350.00,
        content: {
            master: "MU-YI(무이) ",
            subEnTitle: "MU-YI(무이) HEUKJA VASE NO. 1 ",
            subTitle: "Heukja vase no.1 ",
            productInfo: `무이(茂怡), 2020\n\nMu-yi is translated as “full of joy and happiness”\nYoun Sil Kim’s ‘Mu-yi series’ was born from 2020, and all of the challenges last year presented. She created these forms to comfort you, and wish you happiness.\n\nThe Artist sends abundant joy and generous fruits of happiness with these pieces.\nUnglazed ceramics can be a little rough on the surface. When cleaning off dust or stain, clean with running water and air dry. Do not rub fabrics or paper towels.\n\n*Each handmade ceramic piece is artfully unique in detail, and sold with natural irregularities in color, texture, and glaze. Respectfully, all sales of these ceramics are final.\n\nDimensions(approx.)\n(W)5 x (H)5 1/2 inch `,
            productImages: [
                [heukjavase1],
                [heukjavase2, heukjavase3, heukjavase4]
        ]}
    }],
    [{
        id: 8,
        image: "hori_flower_vase_blue",
        title: "호리 화병 - Blue",
        enTitle: "HORI FLOWER VASE - BLUE",
        price: 120.00,
        content: {
            master: "OKHI (옥히) ",
            subEnTitle: "HORI FLOWER VASE - BLUE",
            subTitle: "HORI FLOWER VASE",
            productInfo: `Inspired by traditional Korean clothes, Hanbok, and made with “Nobang” aka Silk Organza.\n\nIncludes: 1 silk vase sleeve, 1 glass vase\n\nDimensions(approx.) \n\nSleeve: (W)3 3/4 x (H)11 3/8 inch (vase opening: 1”)\n\nGlass Vase: (D)2 1/2 x (H)5 1/4 inch\n\nMade by team Okhi (Sooyoung Yoon, Younju Sohn, Junyeong Do) in Korea.`,
            productImages: [
                [horivaseBlue1],
                [horivaseBlue2, horivaseBlue3, horivaseBlue4]
            ]
        }
    },
    {
        id: 9,
        image: "hori_flower_vase_grey",
        title: "호리화병 - brown ",
        enTitle: "HORI FLOWER VASE - BROWN",
        price: 120.00,
        content: {
            master: "OKHI (옥히)",
            subEnTitle: "HORI FLOWER VASE - BROWN ",
            subTitle: "HORI FLOWER VASE ",
            productInfo: `Inspired by traditional Korean clothes, Hanbok, and made with “Nobang” aka Silk Organza.\n\nIncludes: 1 silk vase sleeve, 1 glass vase\n\nDimensions(approx.) \n\nSleeve: (W)3 3/4 x (H)11 3/8 inch (vase opening: 1”)\n\nGlass Vase: (D)2 1/2 x (H)5 1/4 inch\n\nMade by team Okhi (Sooyoung Yoon, Younju Sohn, Junyeong Do) in Korea.`,
            productImages: [
                [horivaseBrown1],
                [horivaseBrown2, horivaseBrown3, horivaseBrown4]
            ]
        }
        }],
    [{
        id: 10,
        image: "bojagi",
        title: "호호당_ 보자기 가방",
        enTitle: "Hohodang_ bojagi ecobag",
        price: 30.00,
        content: {
            master: "HOHODANG (호호당)",
            subEnTitle: "호호당의 에코 양단  ",
            subTitle: "BOJAGI ECO BAG",
            productInfo: `고래, 바다거북 그리고 나 ‘Whale, Green Turtle and me’\n고래, 바다거북 그리고 사람이 함께 어울려 살아가는 모습이 담긴\n환경 친화적인 재생 섬유를 통해 자연을 벗 삼아 살며 쉽사리 해하지 않았던\n옛 선조들의 태도에 한 발짝 다가서고자 합니다.\nSymbols : Whale, Green Turtle, human being from\n\n *Bangudae petroglyphs (반구대 암각화)\n반구대 암각화는 한국의 국보 제285호로 울산에 있는 대곡천 중부류 절벽에 위치한 \n세계에서 가장 오래된 바위 그림입니다.\n\n보자기 BOJAGI\n예로부터 한국에서는 좋은 날, 귀한 분을 위해 준비한 선물은 보자기로 감싸 선물했습니다. \n그때의 보자기는 새겨진 문양, 글귀, 색상 하나에도 의미가 담겨 있었습니다.\n\n오래 전부터 우리의 삶에 기록되어 온 ‘버려지지 않는 포장재‘ 보자기는 우리의 자랑스러운 문화유산 입니다.`,
            productImages: [
                [bojagibag1],
                [bojagibag2, bojagibag3, bojagibag4]
            ]
        }
    }],
    [{
        id: 11,
        image: "baerae_flower",
        title: "배례 화병 - Brown",
        enTitle: "Baerae Flower Vase - Brown",
        price: 120.00,
        content: {
            master: "OKHI (옥히) ",
            subEnTitle: "BAERAE FLOWER VASE - Brown",
            subTitle: "BAERAE FLOWER VASE - Brown",
            productInfo: `Be advised that this item is a pre-order item\nInspired by traditional Korean clothes, Hanbok, and made with “Nobang” aka Silk Organza.\n\nIncludes: 1 silk vase sleeve, 1 acrylic vase\n\nDimensions(approx.) \n\nSleeve: (W)7 1/2 x (H)11 1/4\n\nAcrylic Vase: (D)2 x (H)5 3/4 inch\n\nMade by team Okhi (Sooyoung Yoon, Younju Sohn, Junyeong Do) in Korea.`,
            productImages: [
                [baeraevase1],
                [baeraevase2, baeraevase3, baeraevase4]
            ]
        }
    },
    {
        id: 12,
        image: "malcong_norigae",
        title: "MALCHONG(HORSEHAIR) NORIGAE ",
        enTitle: "Malchong(horsehair) Norigae",
        price: 80.00,
        content: {
            master: "DAHYE JEONG",
            subEnTitle: "MALCHONG(HORSEHAIR) NORIGAE ",
            subTitle: "MALCHONG(HORSEHAIR) NORIGAE ",
            productInfo: `Norigae is a traditional Korean accessory that is hung from a woman's hanbok and other garments. This Nogigae by Dahye Jeong is made with Malchong(horsehair) which was used to make hats and headbands in the Joseon dynasty.\n\nDimensions(approx.)\nSmall: (W)2 x (H)15 cm (one horsehair ball)\nMedium: (W)3 x (H)20 cm (one horsehair ball)\nLarge (W)4 x (H)30 cm (two horsehair balls)\n\nMalchong means horsehair in Korean.\n\nMaterial: Horsehair, silk thread, and acrylic beads.\n*Keep product away from heat and moisture.`,
            productImages: [
                [norigae1],
                [norigae2, norigae3, norigae4]
            ]
        }
    }],
    [{
        id: 13,
        image: "poster",
        title: "OIMU SCROLL POSTER _ 십장생도 十長生圖  ",
        enTitle: "OIMU SCROLL POSTER _ 십장생도 十長生圖 ",
        price: 96.00,
        content: {
            master: "OIMU (오이뮤) ",
            subEnTitle: "OIMU Scroll poster",
            subTitle: "the ten symbols of longevity [십장생도十長生圖] ",
            productInfo: `우리는 복을 염원하는 민족적 문화 속에서 살아왔습니다.\n특히 복을 불러다 준다고 믿는 주술적 염원이 구체적 형상화를 통해 소품으로 만들어진 경우를 볼 수 있습니다.\n복을 의미했던 소품들을 현대적으로 재해석하는 프로젝트인 Fortune project의 일환으로 오이뮤 민화 족자를 선보입니다.\n문화적 정서를 반영한 오이뮤 민화 족자로 실내를 장식하고 그것으로 우리 삶에 풍요와 평화, 사랑과 건강이 깃들길 바랍니다.`,
            productImages: [
                [scrollPoster1],
                [scrollPoster2, scrollPoster3, scrollPoster4]
            ]
        }
    },
    {
        id: 14,
        image: "hand_carved_wooden_board",
        title: "HAND CARVED WOODEN BOARD",
        enTitle: "HAND CARVED WOODEN BOARD",
        price: 150.00,
        content: {
            master: "SANGMIN LEE ",
            subEnTitle: "Hand carved wooden board ",
            subTitle: "Hand carved wooden board ",
            productInfo: `Hand-carved walnut wood tray / cheese board\n\nDimensions(approx.) (D)25 x (H)2 cm\n\nWalnut wood\nNatural mineral oil\n\nMade by Sangmin Lee in Seoul, Korea.`,
            productImages: [
                [woodenBoard1],
                [woodenBoard2, woodenBoard3, woodenBoard4]
            ]
        }
    }],
    [{
        id: 15,
        image: "mamich",
        title: "SUBI mamich",
        enTitle: "SUBI mamich",
        price: 130.00,
        content: {
            master: "SUBI ",
            subEnTitle: "MAMICH ",
            subTitle: "SUBI mamich",
            productInfo: `엄선된 말의 꼬리털과 자연 그대로의 대나무, \n그리고 수십 번의 옻칠로 만들어진 SUBI <水飛>의 전통 마미체 커피필터스틱형입니다.\n튼튼한 말총 800가닥을 이틀 동안 꼬아 만드는 마미체의 망은 유난히 고와 밀가루나 쌀가루를 체에 내릴 때,\n국물에 장을 풀 때 등 전통적으로 사용하던 망입니다.\n마미체 장인 백경현 선생님과 취프로젝트가 함께 한국의 전통 마미체를 재해석하여,\nSUBI <水飛>의 전통 마미체 커피필터를 제작였습니다.\n\n백경현 선생님의 마미체는 3가지 색 말총을 엮어 만들어내는 다양한 패턴은 오브제로 활용해도 좋으며,\n튼튼한 말총과 대나무로 만들어 생칠한 곰팡이나 녹이 슬지 않고 견고한 것이 특징입니다.\n스테인리스 필터나 종이필터로 내렸을 때와 같은 특유의 쇠 맛, 종이 맛이 나지 않아,\n차의 본연의 향과 맛을 그대로 느낄 수 있습니다.\n화학 제품이 일체 들어가지 않은 촘촘한 마미체는\n다양한 패턴에 아름다움 뿐 만 아니라 커피 본연의 맛을 지켜줍니다. `,
            productImages: [
                [subiMamich1],
                [subiMamich2, subiMamich3, subiMamich4]
            ]
        }
    },
    {
        id: 16,
        image: "tukbaegi",
        title: "Mim Multi Purpose pot - Mim Tukbaegi (밈 뚝배기)",
        enTitle: "Mim Multi Purpose pot - Mim Tukbaegi (밈 뚝배기)",
        price: 110.00,
        content: {
            master: "Mim Tukbaegi ",
            subEnTitle: "Mim Multi Purpose pot - Mim Tukbaegi (밈 뚝배기)",
            subTitle: "Tukbaegi",
            productInfo: `자연을 품은 소재\n밈뚝배기는 우리나라 산청지역에서 채굴한 흙과 세계의 광물을 조합하여 완성한 온기에요. 온기의 유약은 원적외선이 많이 방출되는 철(fe)을 포함한 금속산화물의 영향으로 음식의 풍미를 더해준답니다. 온 가족이 테이블에 둘러앉아 따뜻한 밥을 함께하고 싶으시다면 밈뚝배기를 추천해드려요\n\n정성스러운 손작업\nMIM(밈)은 'MADE IN MIND'의 약자로 '마음에서 만든'이라는 이념 아래 정성스러운 손작업으로 만들어져요. 작가의 손으로 하나하나 만들어졌기 때문에 크기, 무게 등의 차이가 조금 있을 수 있습니다. 사용하시다 보면 비슷하지만 서로 다른 모양들의 뚝배기들이 정겨워질 거에요.`,
            productImages: [
                [subiMamich1],
                [subiMamich2, subiMamich3, subiMamich4]
            ]
        }
    }],
    [{
        id: 17,
        image: "bangjja",
        title: "bangjja",
        enTitle: "bangjja",
        price: 300.00,
        content: {
            master: "아름지기",
            subEnTitle: "Bangjja",
            subTitle: "아름지기 방짜 그릇",
            productInfo: `주물을 망치고 두둘기고 펴서 형태를 만드는 방짜(方字)기법을 응용하여 백동으로 \n만든 볼입니다.\n정갈한 디자인과 자연스러운 라인이 돋보이는 방짜 볼은 소재가 주는 묵직함과 반대로\n가벼워서 실생활에 편리하게 사용하실 수 있습니다 `,
            productImages: [
                [bangjja1],
                [bangjja2, bangjja3, bangjja4]
    ]}
    }, {
        id: 100,
        image: "bangjja",
        title: "ester",
        enTitle: "ester",
        price: 1.00,
    }],
];


export default Items;