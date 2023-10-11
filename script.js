const table = document.getElementById('table');

function addRecord() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const tc_kimlik = document.getElementById('tc-kimlik').value;
    const phone = document.getElementById('phone-num').value;
    const lastRecord = table.lastChild;
    const no = parseInt(lastRecord.firstChild.firstChild)++;
    const id = parseInt(lastRecord.childNodes[1])++;


    if(lastRecord.firstChild.firstChild == "NO") {
        no = "1";
    }

    if(lastRecord.childNodes[1] == "ID") {
        id = "1001";
    }

    table.appendChild("<ul class='records'><li>" + no.toString() + "</li><li>" + id.toString() + "</li><li>" + name + "</li><li>Ahmet</li><li>99999999999</li><li>055555555</li><li></li></ul>");

    console.log(name, surname, tc_kimlik, phone);
}