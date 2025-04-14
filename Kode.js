function doPost(e) {
    const sheetUrl = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1u7R7nOUrkD8fd9zg9vhhFBX94hCkV_hhdZzY_bda7zs/edit?gid=0#gid=0")
  
    const sheet = sheetUrl.getSheetByName('Sheet1')
  
    let data = e.parameter
    sheet.appendRow([data.Name,data.Email,data.Pesan,data.Trip])
  
    return ContentService.createTextOutput("Data berhasil disimpan")
  }