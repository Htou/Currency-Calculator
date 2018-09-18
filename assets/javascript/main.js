let { euro, dollar, pound, yen } = document.converter

function euroConverter() {
    dollar.value = (euro.value * 1.1594).toFixed(2)
    pound.value = (euro.value * 0.89238).toFixed(2)
    yen.value = (euro.value * 129.26).toFixed(2)
    }

    function dollarConverter() {
    euro.value = (dollar.value * 0.86367).toFixed(2)
    pound.value = (dollar.value * 0.77078).toFixed(2)
    yen.value = (dollar.value * 111.06).toFixed(2)
    }

    function poundConverter() {
    dollar.value = (pound.value * 1.29719).toFixed(2)
    euro.value = (pound.value * 1.12037).toFixed(2)
    yen.value = (pound.value * 145.18).toFixed(2)
    }

    function yenConverter() {
    dollar.value = (yen.value * 0.00774).toFixed(2)
    pound.value =  (yen.value * 0.00689).toFixed(2)
    euro.value = (yen.value * 0.00774).toFixed(2)
    }


/*
function euroConverter() {
    document.converter.dollar.value = document.converter.euro.value * 1.1594
    document.converter.pound.value = document.converter.euro.value * 0.89238
    document.converter.yen.value = document.converter.euro.value * 129.26
    }

function dollarConverter() {
    document.converter.euro.value = document.converter.dollar.value * 0.86367
    document.converter.pound.value = document.converter.dollar.value * 0.77078
    document.converter.yen.value = document.converter.dollar.value * 111.06
    }

function poundConverter() {
    document.converter.dollar.value = document.converter.pound.value * 1.29719
    document.converter.euro.value = document.converter.pound.value * 1.12037
    document.converter.yen.value = document.converter.pound.value * 145.18
    }

function yenConverter() {
    document.converter.dollar.value = document.converter.yen.value * 0.00774
    document.converter.pound.value = document.converter.yen.value * 0.00689
    document.converter.euro.value = document.converter.yen.value * 0.00774
}
*/
