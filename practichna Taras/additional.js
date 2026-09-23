const Slots = 5
let inventory = new Array(Slots).fill("EMPTYYOOOO");

function AddItem(inv, item){
    const EmptySlot = inv.indexOf("EMPTYYOOOO")
    if(EmptySlot != -1){
        inv[EmptySlot] = item;
        console.log(`${item} Додано до інвентарю`)
        return true;
    }
    console.log(`Помилка йоу, неможливо додати ${item} оскільки місця зеро`)
        return false
}

function DeleteItem(inv, removable){
    let i = -1

    if (typeof removable === "number" && removable >= 0 && removable < inv.length) {
            i = removable;
        }
    else{
        i = inv.indexOf(removable);

    }
    if(i != -1 && inv[i] != "EMPTYYOOOO"){
        const del = inv[i];
        inv[i] = "EMPTYYOOOO";
        console.log(`Предмет ${del} було видалено нафєк з [${i}]`);
        return true
    }
    console.log(`Помилка! Предмет ${removable} не знайдено.`)
    return false

}
function IntoFirst(inv){
    const Items = inv.filter(item => item !== "EMPTYYOOOO");

    for (let i = 0; i < inv.length; i++){
        inv[i] = i < Items.length ? Items[i] : "EMPTYYOOOO";
    }
    console.log("Предмети пересунуті на початок")
}

console.log('Ваш інвентар', [...inventory])

AddItem(inventory, "Pistol")
AddItem(inventory, "shawerma")

console.log(`Після додавання: `, [...inventory])

DeleteItem(inventory, "Pistol")

console.log(`Після видалення: `,[...inventory])

IntoFirst(inventory)
console.log(`Фінальний інвентар: `, [...inventory])