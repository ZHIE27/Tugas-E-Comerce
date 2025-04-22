function doPost(e) {
  const formType = e.parameter.formType;
  const sheetUrlA = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11-WoZtVHsQQ14nI0y303S3RSarGAd1BmOv-rAyZ_XnE/edit?gid=0#gid=0")
  const sheetUrlB = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/11-WoZtVHsQQ14nI0y303S3RSarGAd1BmOv-rAyZ_XnE/edit?gid=8520513#gid=8520513")
if(formType === "formA"){
  const sheet = sheetUrlA.getSheetByName('TravelTypeRequest')

  let data = e.parameter
  sheet.appendRow([data.Name,data.Email,data.Pesan,data.Trip])
}else if(formType === "formB"){
      const sheet = sheetUrlB.getSheetByName('CustomTravelRequest')

  let data = e.parameter
  sheet.appendRow([data.Name,data.Email,data.Pesan])
}
  return ContentService.createTextOutput("Data berhasil disimpan")
}