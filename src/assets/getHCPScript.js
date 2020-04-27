var scriptVersion = '0.1';

function getHCPFromPublisherPage(callback) {
    var hcpData = {};
    var encryptedContextSet = getCookie('_docereeContext');
    var contextSet = JSON.parse(decodeURIComponent(atob(encryptedContextSet)));
    if (contextSet !== null) {
        var cookieContent = getCookie('_docereeId');
        if (cookieContent !== null) {
            cookieContent = JSON.parse(cookieContent)
        }
        if (cookieContent === null || cookieContent.version !== scriptVersion) {
            hcpData['email'] = contextSet['email'];
            hcpData['firstName'] = contextSet['firstName'];
            hcpData['lastName'] = contextSet['lastName'];
            hcpData['specialization'] = contextSet['specialization'];
            hcpData['gender'] = contextSet['gender'];
            hcpData['location'] = contextSet['location'];
            hcpData['npi'] = contextSet['npi'];
            hcpData['zipCode'] = contextSet['zipCode'];
            hcpData['version'] = scriptVersion;
        } else {
            hcpData['platformUid'] = cookieContent.platformUid;
        }
    } else {  eraseCookie('_docereeContext'); } hcpData = JSON.stringify(hcpData); var encryptedHCP = btoa(encodeURIComponent(hcpData)); callback(encryptedHCP); }; function getCookie(name) { var nameEQ = name + "="; var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) == ' ') c = c.substring(1, c.length); if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length); } return null; }; function eraseCookie(name) { document.cookie = name + '=; Max-Age=-99999999;'; }; 
    