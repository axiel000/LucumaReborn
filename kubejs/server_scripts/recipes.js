ServerEvents.recipes(event => {

    // Receta 1: Lingote de oro encantado (8 diamantes + 1 lingote de oro)
    event.shaped('kubejs:enchanted_gold_ingot', [
        'DDD',
        'DGD',
        'DDD'
    ], {
        D: 'minecraft:diamond',
        G: 'minecraft:gold_ingot'
    })

    // Receta 2: Manzana de Notch (8 lingotes encantados + 1 manzana)
    event.shaped('minecraft:enchanted_golden_apple', [
        'III',
        'IAI',
        'III'
    ], {
        I: 'kubejs:enchanted_gold_ingot',
        A: 'minecraft:apple'
    })

})