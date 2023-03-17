const arr = [{
    "id": 1, "Chemical_name": "Ammonium Persulfate", "Vendor": "LG Chem", "Density": 3525.92, "Viscosity": 60.63, "Packaging": "Bag",

    "Pack_Size": 100.00, "Unit": "kg", "Quantity": 6495.18
},

{
    "id": 2, "Chemical_name": "Caustic Potash", "Vendor": "Formosa", "Density": 3172.15, "Viscosity": 48.22, "Packaging": "Bag",

    "Pack_Size": 100.00, "Unit": "kg", "Quantity": 8751.90
},

{
    "id": 3, "Chemical_name": "Dimesthylaminopropylamino", "Vendor": "LG Chem", "Density": 8435.37, "Viscosity": 12.62, "Packaging": "Barrel",

    "Pack_Size": 75.00, "Unit": "L", "Quantity": 5964.61
},

{
    "id": 4, "Chemical_name": "Mono Ammonium PhosPhate", "Vendor": "Sinopec", "Density": 1597.65, "Viscosity": 76.51, "Packaging": "Bag",

    "Pack_Size": 105.00, "Unit": "kg", "Quantity": 4154.33
},

{
    "id": 5, "Chemical_name": "Ferric Nitrate", "Vendor": "DowDuPont", "Density": 364.84, "Viscosity": 14.90, "Packaging": "Bag",

    "Pack_Size": 105.00, "Unit": "kg", "Quantity": 6495.18
},

{
    "id": 6, "Chemical_name": "n-Pentane", "Vendor": "Sinopec", "Density": 4535.26, "Viscosity": 66.76, "Packaging": "N/A",

    "Pack_Size": "N/A", "Unit": "t", "Quantity": 6272.34
},

{
    "id": 7, "Chemical_name": "Glycol Ether PM", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
}, {
    "id": 8, "Chemical_name": "Mercuric chloride", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
},

{
    "id": 9, "Chemical_name": "Ethyl alcohol", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
},

{
    "id": 10, "Chemical_name": "Calcium sulphate", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
},

{
    "id": 11, "Chemical_name": "Benzene hexachloride", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
},

{
    "id": 12, "Chemical_name": "Stanic chloride", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
},

{
    "id": 13, "Chemical_name": "Sodium hydroxide", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
},

{
    "id": 14, "Chemical_name": "Phenol", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
},

{
    "id": 15, "Chemical_name": "Potassium nitrate", "Vendor": "LG Chem", "Density": 6495.18, "Viscosity": 72.12, "Packaging": "Bag",

    "Pack_Size": 250.00, "Unit": "kg", "Quantity": 8749.54
}
]



// let list = document.getElementById("list")

// function display(arr) {
//     let table = "<tr><td>id</td><td>Chemical_name</td><td>Vendor</td><td>Density</td><td>Viscosity</td><td>Packaging</td><td>Pack_Size</td><td>Unit</td><td>Quantity</td></tr>"

//     arr.forEach((item, index) => {

//         let id = item.id;

//         let Chemical_name = item.Chemical_name;

//         let Vendor = item.Vendor;

//         let Density = item.Density

//         let Viscosity = item.Viscosity

//         let Packaging = item.Packaging

//         let Pack_Size = item.Pack_Size

//         let Unit = item.Unit

//         let Quantity = item.Quantity

//         console.log(item);

//         table = table + `<tr><td>${id}</td><td>${Chemical_name}</td><td>${Vendor}</td><td>${Density}</td><td>${Viscosity}

//     </td><td>${Packaging}</td><td>${Pack_Size}</td><td>${Unit}</td><td>${Quantity}</td></tr>`

//         list.innerHTML = table;
//     })
//     return table;
// }

// const table = display(arr);
// document.body.appendChild(table);




function renderTable(arr) {
    const table = document.getElementById("list");
    const header = table.createTHead();
    const row = header.insertRow();
    Object.keys(arr[0]).forEach((key) => {
        const th = document.createElement("th");
        const tableHeading = document.createTextNode(key);
        th.appendChild(tableHeading);
        row.appendChild(th);
    });
    const body = table.createTBody();
    arr.forEach((item) => {
        const row = body.insertRow();
        Object.values(item).forEach((value) => {
            const cell = row.insertCell();
            cell.contentEditable = true;
            const tableData = document.createTextNode(value);
            cell.appendChild(tableData);
        });
        const deleteCell = row.insertCell();
        deleteCell.innerHTML = "<button class='delete-btn' onclick='deleteRow(this)'>Delete</button>";
    });
    return table;
}

const table = renderTable(arr);
document.body.appendChild(table);

//********************************* */
function addRow() {
    var table = document.getElementById("list");
    var row = table.insertRow(table.rows.length);
    var idcell = row.insertCell(0);
    var Chemical_nameCell = row.insertCell(1);
    var VendorCell = row.insertCell(2);
    var DensityCell = row.insertCell(3);
    var ViscosityCell = row.insertCell(4);
    var PackagingCell = row.insertCell(5);
    var Pack_SizeCell = row.insertCell(6);
    var UnitCell = row.insertCell(7);
    var QuantityCell = row.insertCell(8);
    var deleteCell = row.insertCell(9);

    idcell.contentEditable = true;
    Chemical_nameCell.contentEditable = true;
    VendorCell.contentEditable = true;
    DensityCell.contentEditable = true;
    ViscosityCell.contentEditable = true;
    PackagingCell.contentEditable = true;
    Pack_SizeCell.contentEditable = true;
    UnitCell.contentEditable = true;
    QuantityCell.contentEditable = true;

    deleteCell.innerHTML = "<button class='delete-btn' onclick='deleteRow(this)'>Delete</button>";
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
