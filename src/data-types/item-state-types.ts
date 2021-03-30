import { includes, keys, map, values } from 'lodash'

export const ItemCategoryData = Object.freeze({
    PANTS: 'pants',
    SKIRTS: 'skirts',
    DRESSES: 'dresses',
    TOPS: 'tops',
    WARM_TOPS: 'warm-tops',
    OVERALLS: 'overalls',
    JACKETS: 'jackets',
    FOOT_WEARS: 'foot-wears',
    BAGS: 'bags',
    ACCESSORIES: 'accessories',
    JEWELLERIES: 'jewelleries',
    UNDER_WEARS: 'under-wears',
})

export const PantsItemCategoryData = Object.freeze({
    BEACH_PANTS: 'beach-pants',
    CARGO_PANT: 'cargo-pant',
    CASUAL_LEGGINGS: 'casual-leggings',
    CASUAL_SHORTS: 'casual-shorts',
    CASUAL_TROUSERS: 'casual-trousers',
    CULOTTES: 'culottes',
    DENIM_SHORTS: 'denim-shorts',
    FORMAL_TROUSERS: 'formal-trousers',
    HOTPANTS: 'hotpants',
    JEANS: 'jeans',
    LEATHER_LEGGINGS: 'leather-leggings',
    LEATHER_SHORTS: 'leather-shorts',
    LEATHER_TROUSERS: 'leather-trousers',
    LEGGINGS: 'leggings',
    SPORTSWEAR_LEGGINGS: 'sportswear-leggings',
    SPORTSWEAR_SHORTS: 'sportswear-shorts',
    SUIT_TROUSERS: 'suit-trousers',
    SWEAT_PANTS: 'sweat-pants',
    SWIM_SHORTS: 'swim-shorts',
})

export const SkirtItemCategoryData = Object.freeze({
    A_LINE_SKIRTS: 'a-line-skirts',
    BALLOON_SKIRTS: 'balloon-skirts',
    BEACH_SKIRTS: 'beach-skirts',
    CASUAL_SKIRTS: 'casual-skirts',
    DENIM_SKIRTS: 'denim-skirts',
    FORMAL_SKIRTS: 'formal-skirts',
    LEATHER_SKIRTS: 'leather-skirts',
    PENCIL_AND_CRASH_SKIRTS: 'pencil-and-crash-skirts',
    SPORTSWEAR_SKIRTS: 'sportswear-skirts',
})

export const DressesItemCategoryData = Object.freeze({
    BLAZER_DRESS: 'blazer-dress',
    BODYCON_DRESS: 'bodycon-dress',
    CASUAL_DRESS: 'casual-dress',
    FIT_FLARE_DRESS: 'fit-flare-dress',
    KNITTED_DRESS: 'knitted-dress',
    SHEATH_DRESS: 'sheath-dress',
    SLIP_DRESS: 'slip-dress',
    WRAP_DRESS: 'wrap-dress',
    JUMPSUIT: 'jumpsuit',
})

export const TopsItemCategoryData = Object.freeze({
    BARDOT_TOPS: 'bardot-tops',
    BLOUSES: 'blouses',
    CROP_TOPS: 'crop-tops',
    CROPPED_BLOUSE: 'cropped-blouse',
    DENIM_SHIRT: 'denim-shirt',
    KNITTED_TOPS: 'knitted-tops',
    KNITTED_VESTS: 'knitted-vests',
    POLO_SHIRTS: 'polo-shirts',
    SHELL_TOPS: 'shell-tops',
    SHIRTS: 'shirts',
    SWEATSHIRTS: 'sweatshirts',
    T_SHIRTS: 't-shirts',
    TANK_TOPS: 'tank-tops',
    TOPS: 'tops',
    TRANSPARENT_TOPS: 'transparent-tops',
    TUNICS: 'tunics',
    VESTS: 'vests',
    WRAP_TOPS: 'wrap-tops',
    ZIP_TOPS: 'zip-tops',
})

export const WarmTopsItemCategoryData = Object.freeze({
    CARDIGANS: 'cardigans',
    HOODIES: 'hoodies',
    KNITTED_VESTS: 'knitted-vests',
    SWEATERS: 'sweaters',
    VESTS: 'vests',
})

export const OverrallsItemCategoryData = Object.freeze({
    CASUAL_OVERALLS: 'casual-overalls',
    ELEGANT_OVERALLS: 'elegant-overalls',
    WINTER_OVERALLS: 'winter-overalls',
    WORK_OVERALLS: 'work-overalls',
})

export const JacketsItemCategoryData = Object.freeze({
    BASEBALL_JACKET: 'baseball-jacket',
    BIKER_JACKET: 'biker-jacket',
    BOMBER_JACKET: 'bomber-jacket',
    CASUAL_JACKETS: 'casual-jackets',
    DUFFLE_COAT: 'duffle-coat',
    HARRINGTON_JACKET: 'harrington-jacket',
    KIMONO_COAT: 'kimono-coat',
    KNITTED_PONCHOS: 'knitted-ponchos',
    PARKA_COAT: 'parka-coat',
    PEACOAT: 'peacoat',
    PILOT_JACKET: 'pilot-jacket',
    PUFFER_JACKETS: 'puffer-jackets',
    RACER_JACKET: 'racer-jacket',
    RAINCOATS_AND_PONCHOS: 'raincoats-and-ponchos',
    SUIT_JACKETS_AND_TUXEDOS: 'suit-jackets-and-tuxedos',
    TRENCH_COATS: 'trench coats',
    WINDSTOPPERS_SOFTSHELLS: 'windstoppers-softshells',
    WINTER_COATS: 'winter-coats',
    WINTER_JACKETS: 'winter-jackets',
    WOOL_COATS: 'wool-coats',
})

export const FootwearItemCategoryData = Object.freeze({
    BALLERINAS: 'ballerinas',
    CHELSEA_AND_ANKLE_BOOTS: 'chelsea-and-ankle-boots',
    CROCS: 'crocs',
    DESERT_BOOTS: 'desert-boots',
    ESPADRILLES: 'espadrilles',
    FLIP_FLOPS: 'flip-flops',
    FORMAL_SHOES: 'formal-shoes',
    FREE_TIME_SHOES: 'free-time-shoes',
    HIKING: 'hiking',
    LADIES_HIGH_BOOTS: 'ladies-high-boots',
    MARY_JANE_SHOES: 'mary-jane-shoes',
    MULES: 'mules',
    PUMPS: 'pumps',
    RUBBER_BOOTS: 'rubber-boots',
    SANDALS: 'sandals',
    SKI_BOOTS: 'ski-boots',
    SLIPPERS: 'slippers',
    SNEAKERS: 'sneakers',
    SNOW_BOOTS: 'snow-boots',
    TRAINERS: 'trainers',
})

export const BagsItemCategoryData = Object.freeze({
    BACKPACK_PURSE: 'backpack-purse',
    CAMERA_BACKPACK: 'camera-backpack',
    CITY_BACKPACKS: 'city-backpacks',
    OUTDOOR_BACKPACKS: 'outdoor-backpacks',
    SCHOOL_BACKPACKS: 'school-backpacks',
    BAGUETTE_BAGS: 'baguette-bags',
    BUCKET_BAGS: 'bucket-bags',
    CLUTCHES_WRISTLETS: 'clutches-wristlets',
    HOBO_BAGS: 'hobo-bags',
    LONG_STRAP_BAGS: 'long-strap-bags',
    TOP_HANDLE_BAGS: 'top-handle-bags',
    TOTES_AND_SHOPPER_BAGS: 'totes-and-shopper-bags',
    DUFFLE_BAGS: 'duffle-bags',
    SUITCASES: 'suitcases',
    TRAVEL_BAGS: 'travel-bags',
    BUM_BAGS: 'bum-bags',
})

export const AccessoriesItemCategoryData = Object.freeze({
    GLOVES: 'gloves',
    HATS_AND_CAPS: 'hats-and-caps',
    TIES: 'ties',
    EYEWEAR: 'eyewear',
    SCARVES: 'scarves',
    BELTS: 'belts',
    SUSPENDERS: 'suspenders',
    WATCH: 'watch',
})

export const JewelleryItemCategoryData = Object.freeze({
    BRACELETS: 'bracelets',
    BROOCHES_BADGES_AND_PINS: 'brooches-badges-and-pins',
    CUFFLINKS: 'cufflinks',
    EARRINGS_AND_EARCUFFS: 'earrings-and-earcuffs',
    KEYRINGS: 'keyrings',
    NECKLACES_PENDANTS_AND_CHAINS: 'necklaces-pendants-and-chains',
    PINS_AND_CLIPS: 'pins-and-clips',
    RINGS: 'rings',
    WATCH: 'watch',
})

export const UnderwearItemCategoryData = Object.freeze({
    BODIES: 'bodies',
    BRAS: 'bras',
    UNDERWEAR_SETS: 'underwear-sets',
    PANTIES_UNDERPANTS: 'panties-underpants',
    SOCKS: 'socks',
    TIGHTS: 'tights',
})

export const AccessoriesSubItemCategoryGloveData = Object.freeze({
    KNITTED_GLOVES: 'knitted-gloves',
    LACE_GLOVES: 'lace-gloves',
    LEATHER_GLOVES: 'leather-gloves',
    MOTO_SPORT_GLOVES: 'moto-sport-gloves',
})

export const AccessoriesSubItemCategoryHatsAndCapsData = Object.freeze({
    BASEBALL_CAPS: 'baseball-caps',
    BEANIES_AND_WINTER: 'beanies-and-winter',
    HATS: 'hats',
    BERET: 'beret',
    BOWLER_HAT: 'bowler-hat',
    BUCKET_HAT: 'bucket-hat',
    CLASSIC_HATS_AND_FLOPPY_HATS: 'classic-hats-and-floppy-hats',
    FASCINATOR: 'fascinator',
    FLAT_CAPS: 'flat-caps',
    STRAW_HAT: 'straw-hat',
    TURBAN_HAT: 'turban-hat',
})

export const AccessoriesSubItemCategoryTiesData = Object.freeze({
    BOWTIES: 'bowties',
    CLASSIC_TIES: 'classic-ties',
    CRAVATE: 'cravate',
})

export const AccessoriesSubItemCategoryEyewearData = Object.freeze({
    GLASSES: 'glasses',
    SUNGLASSES: 'sunglasses',
})

export const AccessoriesSubItemCategoryScarvesData = Object.freeze({
    SCARVES: 'scarves',
})

export const AccessoriesSubItemCategoryBeltsData = Object.freeze({
    BELTS: 'belts',
})

export const AccessoriesSubItemCategorySuspendersData = Object.freeze({
    SUSPENDERS: 'suspenders',
})

export const AccessoriesSubItemCategoryWatchData = Object.freeze({
    ANALOGUE_WATCH: 'analogue-watch',
    DIGITAL_WATCH: 'digital-watch',
    SMART_WATCH: 'smart-watch',
})

export const UnderwearSubItemCategoryBodiesData = Object.freeze({
    BODIES: 'bodies',
    MONOKINIS: 'monokinis',
    BIKINIS: ' bikinis',
    NEGLIGEES: 'negligees',
})

export const UnderwearSubItemCategoryBrasData = Object.freeze({
    BRAS: 'bras',
})

export const UnderwearSubItemCategoryUnderwearSetsData = Object.freeze({
    UNDERWEAR_SETS: 'underwear-sets',
})

export const UnderwearSubItemCategoryPantiesUnderpantsData = Object.freeze({
    BOXER_BRIEFS: 'boxer-briefs',
    BOXERS: 'boxers',
    BRIEFS: 'briefs',
    PANTIES: 'panties',
    THONGS: 'thongs',
})

export const UnderwearSubItemCategorySocksData = Object.freeze({
    KNEE_SOCKS: 'knee-socks',
    LOW_CUT_SOCKS: 'low-cut-socks',
    SOCKS: 'socks',
})

export const UnderwearSubItemCategoryTightsData = Object.freeze({
    STOCKINGS: 'stockings',
    TIGHTS: 'tights',
})

export const ItemFeatureData = Object.freeze({
    LENGTH: 'length',
    MATERIAL: 'material',
    THICKNESS: 'thickness',
    NECKLINE: 'neckline',
    PATTERN: 'pattern',
    SLEEVES: 'sleeves',
    STYLE: 'style',
    SEASONS: 'seasons',
    FORM: 'form',
    HEIGHT: 'height',
    HEELS: 'heels',
})

export const LengthItemFeatureData = Object.freeze({
    ALL: 'all',
    SHORT_TOP: 'short-top',
    TOP: 'top',
    TUNIC: 'tunic',
    MAXI_SKIRT: 'maxi-skirt',
    MIDI_SKIRT: 'midi-skirt',
    MINI_SKIRT: 'mini-skirt',
    MAXI_DRESSES: 'maxi-dresses',
    MIDI_DRESSES: 'midi-dresses',
    MINI_DRESSES: 'mini-dresses',
    SHORT: 'short',
    MIDI: 'midi',
    LONG: 'long ',
    SHORTS: 'shorts',
    LONG_PANTS: 'long-pants',
    THREE_FOUR_PANTS: 'three-four-pants',
    SEVEN_EIGHT_PANTS: 'seven-eight-pants',
})

export const MaterialItemFeatureData = Object.freeze({
    CORDUROY: 'material-corduroy',
    COTTON: 'material-cotton',
    DENIM: 'material-denim',
    KNITWEAR: 'material-knitwear',
    LACE: 'material-lace',
    LEATHER: 'material-leather',
    LINEN: 'material-linen',
    MESH_TRANSPARENT: 'material-mesh-transparent',
    SILK: 'material-silk',
    SUEDE: 'material-suede',
    TWEED: 'material-tweed',
    FUR: 'material-fur',
    SILK_SATIN: 'material-silk-satin',
    VELVET: 'material-velvet',
    SOFTSHELL: 'material-softshell',
    SYNTHETIC: 'material-synthetic',
    TEXTILE: 'material-textile',
    WOOL: 'material-wool',
    FUR_FAUX_FUR_SHOES: 'material-fur-faux-fur-shoes',
    GORE_TEX_SHOES: 'material-gore-tex-shoes',
    LEATHER_FAUX_LEATHER_SHOES: 'material-leather-faux-leather-shoes',
    RUBBER_AND_PLASTIC_SHOES: 'material-rubber-and-plastic-shoes',
    SUEDE_NUBUCK_SHOES: 'material-suede-nubuck-shoes,',
    TEXTILE_SHOES: 'material-textile-shoes',
    PLASTIC_VINYL: 'plastic-vinyl',
    METAL: 'material-metal',
    GEMSTONES: 'material-gemstones',
    WOODEN: 'material-wooden',
    BEADED: 'material-beaded',
    PEARL: 'material-pearl',
    CASHMERE: 'material-cashmere',
    CAMEL_HAIR: 'material-camel-hair',
    ALPACA_WOOL: 'material-alpaca-wool',
    MOHAIR: 'material-mohair',
    YAK_WOOL: 'material-yak-wool',
    MODAL: 'material-modal',
    FLANNEL: 'material-flannel',
    FAUX_FUR: 'material-faux-fur',
    ACRYLIC: 'material-acrylic',
    FAUX_LEATHER: 'material-faux-leather',
    HEMP: 'material-hemp',
    ACETATE: 'material-acetate',
    LYOCELL: 'material-lyocell',
    NYLON: 'material-nylon',
    POLYESTER: 'material-polyester',
    SPANDEX_LYCRA_ELASTANE: 'material-spandex-lycra-elastane',
    VISCOSE: 'material-viscose',
    JERSEY: 'material-jersey',
    SATIN: 'material-satin',
    CHIFFON: 'material-chiffon',
})

export const ThicknessItemFeatureData = Object.freeze({
    THIN: 'thin',
    MEDIUM: 'medium',
    ENOUGH: 'enough',
    THICK: 'thick',
})

export const NecklineItemFeatureData = Object.freeze({
    BACK: 'back',
    BOATNECK: 'boatneck',
    BOW: 'bow',
    COLLAR: 'collar',
    COWL: 'cowl',
    CREW: 'crew',
    HOODED: 'hooded',
    LOW_CUT: 'low-cut',
    OFF_SHOULDER: 'off-shoulder',
    ROUND: 'round',
    SQUARE: 'square',
    TURTLENECK: 'turtleneck',
    V_NECK: 'v-neck',
    WRAP: 'wrap',
    ONE_SHOULDER: 'one-shoulder',
})

export const PatternItemFeatureData = Object.freeze({
    CAMOUFLAGE: 'camouflage',
    CHECKED: 'checked',
    CHEVRON: 'chevron',
    FLORAL: 'floral',
    LACE: 'pattern-lace',
    PATTERNED: 'patterned',
    PICTURE: 'picture',
    PLAIN: 'plain',
    POLKA: 'polka',
    DOT: 'dot',
    SHINY: 'shiny',
    STRIPE: 'stripe',
    TEXT: 'text',
})

export const SleevesItemFeatureData = Object.freeze({
    ALL: 'sleeves-all',
    THREE_FOUR_SLEEVES: 'three-four-sleeves',
    LONG_SLEEVES: 'long sleeves',
    SHORT_SLEEVES: 'short sleeves',
    SLEEVELESS: 'sleeveless',
})
export const StylesItemFeatureData = Object.freeze({
    BOHEMIAN: 'style-bohemian',
    CASUAL: 'style-casual',
    CHIC: 'style-chic',
    CLASSIC: 'style-classic',
    FEMININE: 'style-feminine',
    GLAMOROUS: 'style-glamorous',
    GRUNGE: 'style-grunge',
    MINIMALIST: 'style-minimalist',
    PREPPY: 'style-preppy',
    PROVOCATIVE: 'style-provocative',
    SPORTY: 'style-sporty',
    TOMBOY: 'style-tomboy',
    VINTAGE: 'style-vintage',
    ROMANTIC: 'style-romantic',
    SOPHISTICATED: 'style-sophisticated',
    FLAMBOYANT: 'style-flamboyant',
})
export const SeasonItemFeatureData = Object.freeze({
    ALL: 'all-seasons',
    WINTER: 'winter ',
    SPRING: 'spring',
    SUMMER: 'summer',
    AUTUMN: 'autumn',
    RAINY: 'rainy',
})
export const OccasionItemFeatureData = Object.freeze({
    EVERYDAY: 'occasion-everyday',
    OFFICE: 'occasion-office',
    SPORT: 'occasion-sport',
    BEACH: 'occasion-beach',
    COCKTAIL: 'occasion-cocktail',
    EVENING: 'occasion-evening',
    DRESSY: 'occasion-dressy',
})
export const FormItemFeatureData = Object.freeze({
    FLATS: 'flats',
    STILETTO_PLATFORM_HEELS: 'stiletto-platform-heels',
    WEDGE_SHOES: 'wedge-shoes',
})
export const HeightItemFeatureData = Object.freeze({
    HIGH_BOOTS: 'high-boots',
    LOW_BOOTS: 'low-boots',
    LOW_SHOES: 'low-shoes',
    MIDDLE_BOOTS: 'middle-boots',
    OPEN_FEET_SHOES: 'open-feet-shoes',
})
export const HeelItemFeatureData = Object.freeze({
    FLATFORM: 'flatform,',
    HIGH_HEELS: 'high-heels,',
    LOW_HEELS: 'low-heels,',
    MIDDLE_HEELS: 'middle-heels,',
    NO_HEELS: 'no-heels,',
    PLATFORM_SHOES: 'platform-shoes,',
    STILETTO: 'stiletto,',
    WEDGE_HEELS: 'wedge-heels',
})

const CategoryMapping = {
    [ItemCategoryData.PANTS]: PantsItemCategoryData,
    [ItemCategoryData.SKIRTS]: SkirtItemCategoryData,
    [ItemCategoryData.DRESSES]: DressesItemCategoryData,
    [ItemCategoryData.TOPS]: TopsItemCategoryData,
    [ItemCategoryData.WARM_TOPS]: WarmTopsItemCategoryData,
    [ItemCategoryData.OVERALLS]: OverrallsItemCategoryData,
    [ItemCategoryData.JACKETS]: JacketsItemCategoryData,
    [ItemCategoryData.FOOT_WEARS]: FootwearItemCategoryData,
    [ItemCategoryData.BAGS]: BagsItemCategoryData,
    [ItemCategoryData.ACCESSORIES]: AccessoriesItemCategoryData,
    [AccessoriesItemCategoryData.GLOVES]: AccessoriesSubItemCategoryGloveData,
    [AccessoriesItemCategoryData.HATS_AND_CAPS]: AccessoriesSubItemCategoryHatsAndCapsData,
    [AccessoriesItemCategoryData.TIES]: AccessoriesSubItemCategoryTiesData,
    [AccessoriesItemCategoryData.EYEWEAR]: AccessoriesSubItemCategoryEyewearData,
    [AccessoriesItemCategoryData.SCARVES]: AccessoriesSubItemCategoryScarvesData,
    [AccessoriesItemCategoryData.BELTS]: AccessoriesSubItemCategoryBeltsData,
    [AccessoriesItemCategoryData.SUSPENDERS]: AccessoriesSubItemCategorySuspendersData,
    [AccessoriesItemCategoryData.WATCH]: AccessoriesSubItemCategoryWatchData,
    [ItemCategoryData.JEWELLERIES]: JewelleryItemCategoryData,
    [ItemCategoryData.UNDER_WEARS]: UnderwearItemCategoryData,
    [UnderwearItemCategoryData.BODIES]: UnderwearSubItemCategoryBodiesData,
    [UnderwearItemCategoryData.BRAS]: UnderwearSubItemCategoryBrasData,
    [UnderwearItemCategoryData.UNDERWEAR_SETS]: UnderwearSubItemCategoryUnderwearSetsData,
    [UnderwearItemCategoryData.PANTIES_UNDERPANTS]: UnderwearSubItemCategoryPantiesUnderpantsData,
    [UnderwearItemCategoryData.SOCKS]: UnderwearSubItemCategorySocksData,
    [UnderwearItemCategoryData.TIGHTS]: UnderwearSubItemCategoryTightsData,
}

const allCategoryIds = keys(CategoryMapping)
type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType> ? ElementType : never
export type ItemCategoryIdType = ElementType<typeof allCategoryIds>

const createCategory = (catId: ItemCategoryIdType): ItemCategoryInfoType => {
    switch (catId) {
        case ItemCategoryData.ACCESSORIES:
        case ItemCategoryData.UNDER_WEARS:
            return {
                catId: catId,
                categoryChildrenIds: [],
                subCatGroupIds: values(CategoryMapping[catId]),
            }

    }
    return {
        catId: catId,
        categoryChildrenIds: values(CategoryMapping[catId]),
    }
}
export const getCategoryIdFromChildren = (catChildrenId: string) => {
    if (includes(values(PantsItemCategoryData), catChildrenId)) {
        return ItemCategoryData.PANTS
    }
    if (includes(values(SkirtItemCategoryData), catChildrenId)) {
        return ItemCategoryData.SKIRTS
    }
    if (includes(values(DressesItemCategoryData), catChildrenId)) {
        return ItemCategoryData.DRESSES
    }
    if (includes(values(TopsItemCategoryData), catChildrenId)) {
        return ItemCategoryData.TOPS
    }
    if (includes(values(WarmTopsItemCategoryData), catChildrenId)) {
        return ItemCategoryData.WARM_TOPS
    }
    if (includes(values(OverrallsItemCategoryData), catChildrenId)) {
        return ItemCategoryData.OVERALLS
    }
    if (includes(values(JacketsItemCategoryData), catChildrenId)) {
        return ItemCategoryData.JACKETS
    }
    if (includes(values(FootwearItemCategoryData), catChildrenId)) {
        return ItemCategoryData.FOOT_WEARS
    }
    if (includes(values(BagsItemCategoryData), catChildrenId)) {
        return ItemCategoryData.BAGS
    }
    if (includes(values(AccessoriesItemCategoryData), catChildrenId)) {
        return ItemCategoryData.ACCESSORIES
    }
    if (includes(values(UnderwearItemCategoryData), catChildrenId)) {
        return ItemCategoryData.UNDER_WEARS
    }
    return null
}
const createFeature = (catId: string): ItemFeatureInfoType => {
    const LENGTH_TOPS_DRESSES = [
        LengthItemFeatureData.ALL,
        LengthItemFeatureData.SHORT_TOP,
        LengthItemFeatureData.TOP,
        LengthItemFeatureData.TUNIC,
        LengthItemFeatureData.MAXI_DRESSES,
        LengthItemFeatureData.MIDI_DRESSES,
        LengthItemFeatureData.MINI_DRESSES,
    ]
    const LENGTH_WARM_TOPS_JACKET = [
        LengthItemFeatureData.SHORT,
        LengthItemFeatureData.MIDI,
        LengthItemFeatureData.LONG,
    ]
    const LENGTH_SKIRTS = [
        LengthItemFeatureData.MAXI_SKIRT,
        LengthItemFeatureData.MIDI_SKIRT,
        LengthItemFeatureData.MINI_SKIRT,
    ]
    const LENGTH_PANTS_OVERALL = [
        LengthItemFeatureData.SHORTS,
        LengthItemFeatureData.LONG_PANTS,
        LengthItemFeatureData.THREE_FOUR_PANTS,
        LengthItemFeatureData.SEVEN_EIGHT_PANTS,
    ]
    const MATERIAL_SKIRTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS = [
        MaterialItemFeatureData.CORDUROY,
        MaterialItemFeatureData.COTTON,
        MaterialItemFeatureData.DENIM,
        MaterialItemFeatureData.KNITWEAR,
        MaterialItemFeatureData.LACE,
        MaterialItemFeatureData.LEATHER,
        MaterialItemFeatureData.LINEN,
        MaterialItemFeatureData.MESH_TRANSPARENT,
        MaterialItemFeatureData.SILK,
        MaterialItemFeatureData.SUEDE,
        MaterialItemFeatureData.TWEED,
        MaterialItemFeatureData.VELVET,
    ]
    const MATERIAL_TOPS_DRESSES_PANTS_WARM_TOPS = [
        MaterialItemFeatureData.CORDUROY,
        MaterialItemFeatureData.COTTON,
        MaterialItemFeatureData.DENIM,
        MaterialItemFeatureData.KNITWEAR,
        MaterialItemFeatureData.LACE,
        MaterialItemFeatureData.LEATHER,
        MaterialItemFeatureData.LINEN,
        MaterialItemFeatureData.MESH_TRANSPARENT,
        MaterialItemFeatureData.SILK,
        MaterialItemFeatureData.SUEDE,
        MaterialItemFeatureData.TWEED,
        MaterialItemFeatureData.HEMP,
        MaterialItemFeatureData.WOOL,
        MaterialItemFeatureData.ACETATE,
        MaterialItemFeatureData.ACRYLIC,
        MaterialItemFeatureData.LYOCELL,
        MaterialItemFeatureData.NYLON,
        MaterialItemFeatureData.POLYESTER,
        MaterialItemFeatureData.SPANDEX_LYCRA_ELASTANE,
        MaterialItemFeatureData.VISCOSE,
        MaterialItemFeatureData.JERSEY,
        MaterialItemFeatureData.SATIN,
        MaterialItemFeatureData.CHIFFON,
        MaterialItemFeatureData.VELVET,
    ]
    const MATERIAL_JACKET = [
        MaterialItemFeatureData.DENIM,
        MaterialItemFeatureData.CASHMERE,
        MaterialItemFeatureData.CAMEL_HAIR,
        MaterialItemFeatureData.ALPACA_WOOL,
        MaterialItemFeatureData.MOHAIR,
        MaterialItemFeatureData.YAK_WOOL,
        MaterialItemFeatureData.FUR,
        MaterialItemFeatureData.MODAL,
        MaterialItemFeatureData.FLANNEL,
        MaterialItemFeatureData.FAUX_FUR,
        MaterialItemFeatureData.LEATHER,
        MaterialItemFeatureData.ACRYLIC,
        MaterialItemFeatureData.FAUX_LEATHER,
        MaterialItemFeatureData.VELVET,
        MaterialItemFeatureData.SOFTSHELL,
        MaterialItemFeatureData.WOOL,
    ]
    const MATERIAL_FOOTWEAR = [
        MaterialItemFeatureData.FUR_FAUX_FUR_SHOES,
        MaterialItemFeatureData.GORE_TEX_SHOES,
        MaterialItemFeatureData.LEATHER_FAUX_LEATHER_SHOES,
        MaterialItemFeatureData.RUBBER_AND_PLASTIC_SHOES,
        MaterialItemFeatureData.SUEDE_NUBUCK_SHOES,
        MaterialItemFeatureData.TEXTILE_SHOES,
    ]
    const MATERIAL_BAGS = [
        MaterialItemFeatureData.DENIM,
        MaterialItemFeatureData.SYNTHETIC,
        MaterialItemFeatureData.FUR,
        MaterialItemFeatureData.LEATHER,
        MaterialItemFeatureData.SOFTSHELL,
        MaterialItemFeatureData.TEXTILE,
        MaterialItemFeatureData.WOOL,
        MaterialItemFeatureData.SILK_SATIN,
        MaterialItemFeatureData.PLASTIC_VINYL,
    ]
    const MATERIAL_JEWELLERY_WATCH = [
        MaterialItemFeatureData.LEATHER,
        MaterialItemFeatureData.METAL,
        MaterialItemFeatureData.GEMSTONES,
        MaterialItemFeatureData.WOODEN,
        MaterialItemFeatureData.BEADED,
        MaterialItemFeatureData.PEARL,
        MaterialItemFeatureData.TEXTILE,
    ]
    const THICKNESS = values(ThicknessItemFeatureData)
    const NECKLINE = values(NecklineItemFeatureData)
    const PATTERN = values(PatternItemFeatureData)
    const SLEEVES = values(SleevesItemFeatureData)
    const STYLES = values(StylesItemFeatureData)
    const SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR = values(
        SeasonItemFeatureData)
    const OCCASIONS = values(OccasionItemFeatureData)
    const FORM_FOOTWEAR = values(FormItemFeatureData)
    const HEIGHT_FOOTWEAR = values(HeightItemFeatureData)
    const HEELS_FOOTWEAR = values(HeelItemFeatureData)
    switch (catId) {
        case ItemCategoryData.TOPS:
            return {
                featureId: catId,
                lengths: LENGTH_TOPS_DRESSES,
                materials: MATERIAL_TOPS_DRESSES_PANTS_WARM_TOPS,
                thicknesses: THICKNESS,
                necklines: NECKLINE,
                patterns: PATTERN,
                sleeves: SLEEVES,
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
            }
        case ItemCategoryData.DRESSES:
            return {
                featureId: catId,
                lengths: LENGTH_TOPS_DRESSES,
                materials: MATERIAL_TOPS_DRESSES_PANTS_WARM_TOPS,
                thicknesses: THICKNESS,
                necklines: NECKLINE,
                patterns: PATTERN,
                sleeves: SLEEVES,
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
            }
        case ItemCategoryData.WARM_TOPS:
            return {
                featureId: catId,
                lengths: LENGTH_WARM_TOPS_JACKET,
                materials: MATERIAL_TOPS_DRESSES_PANTS_WARM_TOPS,
                thicknesses: THICKNESS,
                necklines: NECKLINE,
                patterns: PATTERN,
                sleeves: SLEEVES,
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
            }
        case ItemCategoryData.JACKETS:
            return {
                featureId: catId,
                lengths: LENGTH_WARM_TOPS_JACKET,
                materials: MATERIAL_JACKET,
                thicknesses: THICKNESS,
                patterns: PATTERN,
                sleeves: SLEEVES,
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }
        case ItemCategoryData.SKIRTS:
            return {
                featureId: catId,
                lengths: LENGTH_SKIRTS,
                materials: MATERIAL_SKIRTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS,
                thicknesses: THICKNESS,
                patterns: PATTERN,
                sleeves: [],
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }
        case ItemCategoryData.PANTS:
            return {
                featureId: catId,
                lengths: LENGTH_PANTS_OVERALL,
                materials: MATERIAL_TOPS_DRESSES_PANTS_WARM_TOPS,
                thicknesses: THICKNESS,
                patterns: PATTERN,
                sleeves: [],
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }
        case ItemCategoryData.OVERALLS:
            return {
                featureId: catId,
                lengths: LENGTH_PANTS_OVERALL,
                materials: MATERIAL_SKIRTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS,
                thicknesses: THICKNESS,
                patterns: PATTERN,
                sleeves: [],
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }
        case UnderwearItemCategoryData.BODIES:
        case UnderwearItemCategoryData.BRAS:
        case UnderwearItemCategoryData.UNDERWEAR_SETS:
        case UnderwearItemCategoryData.PANTIES_UNDERPANTS:
        case UnderwearItemCategoryData.SOCKS:
        case UnderwearItemCategoryData.TIGHTS:
            return {
                featureId: catId,
                lengths: [],
                materials: MATERIAL_SKIRTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS,
                thicknesses: [],
                patterns: PATTERN,
                sleeves: [],
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }
        case ItemCategoryData.FOOT_WEARS:
            return {
                featureId: catId,
                lengths: [],
                materials: MATERIAL_FOOTWEAR,
                thicknesses: [],
                patterns: [],
                sleeves: [],
                styles: STYLES,
                seasons: SEASONS_TOPS_DRESSES_WARMTOPS_JACKET_SKIRTS_PANTS_OVERALLS_BODDIES_BRAS_UNDERWEARSET_PANTIES_SOCKS_TIGHTS_FOOTWEAR,
                occasions: OCCASIONS,
                forms: FORM_FOOTWEAR,
                heels: HEELS_FOOTWEAR,
                heights: HEIGHT_FOOTWEAR,
                necklines: [],
            }
        case ItemCategoryData.BAGS:
            return {
                featureId: catId,
                lengths: [],
                materials: MATERIAL_BAGS,
                thicknesses: [],
                patterns: [],
                sleeves: [],
                styles: STYLES,
                seasons: [],
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }
        case ItemCategoryData.JEWELLERIES:
            return {
                featureId: catId,
                lengths: [],
                materials: MATERIAL_JEWELLERY_WATCH,
                thicknesses: [],
                patterns: [],
                sleeves: [],
                styles: STYLES,
                seasons: [],
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }
        case AccessoriesItemCategoryData.WATCH:
        case AccessoriesSubItemCategoryWatchData.ANALOGUE_WATCH:
        case AccessoriesSubItemCategoryWatchData.DIGITAL_WATCH:
        case AccessoriesSubItemCategoryWatchData.SMART_WATCH:
            return {
                featureId: catId,
                lengths: [],
                materials: MATERIAL_JEWELLERY_WATCH,
                thicknesses: [],
                patterns: [],
                sleeves: [],
                styles: STYLES,
                seasons: [],
                occasions: OCCASIONS,
                forms: [],
                heels: [],
                heights: [],
                necklines: [],
            }

    }
    return {
        featureId: catId,
        lengths: [],
        materials: [],
        forms: [],
        heels: [],
        heights: [],
        necklines: [],
        patterns: [],
        seasons: [],
        occasions: OCCASIONS,
        sleeves: [],
        styles: STYLES,
        thicknesses: [],
    }
}
export const rootCategory: ItemCategoryInfoType = Object.freeze({
    catId: '',
    categoryChildrenIds: values(ItemCategoryData),
})
export const createAllCategoryData = () => {
    return map(allCategoryIds, (catId) => {
        return createCategory(catId)
    })
}
export const createAllFeatureData = () => {
    return map(allCategoryIds, (catId) => {
        return createFeature(catId)
    })
}

export type ItemCategoryInfoType = {
    catId: string
    categoryChildrenIds: string[]
    subCatGroupIds?: string[]
}
export type ItemFeatureInfoType = {
    featureId: string
    lengths: string[]
    materials: string[]
    thicknesses: string[]
    necklines: string[]
    patterns: string[]
    sleeves: string[]
    styles: string[]
    seasons: string[]
    occasions: string[]
    forms: string[]
    heights: string[]
    heels: string[]
}
export type ItemStateType = {
    rootCategory: ItemCategoryInfoType
    categoryMap: { [catId: string]: ItemCategoryInfoType }
    featureMap: { [featureId: string]: ItemFeatureInfoType }
    itemColorPalette: ItemColorType[]
}
export type ColorArea = {
    H: number
    S: number
    L: number
}
export type ColorHSLType = {
    H: number
    S: number
    L: number
}

export enum ColorLMD {
    P = 'P',
    L = 'L',
    M = 'M',
    D = 'D',
    V = 'V',
}

export type ItemColorType = {
    hsl: ColorHSLType | null
    lmd: ColorLMD[] | null
    area: ColorArea | null
    name: string | null
    source: string | null
    slug: string
}
