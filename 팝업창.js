var blocked = false;
function openPopup() {			
    var newWin = window.open("팝업창.html", "pop", "width=500, height=466");
    if (newWin == null) {
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요.")
    }
    newWin.moveBy(500,200);
}

function frameclose() { 
    parent.close() 
    window.close() 
    self.close() 
}