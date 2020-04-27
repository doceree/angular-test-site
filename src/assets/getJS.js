var symmetrickey = "13";
var baseURl = "https://qa-programmatic.doceree.com";
var script = document.createElement("script");
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js", document.getElementsByTagName("head")[0].appendChild(script);
var $ = jQuery,
    DocereeAdCode = "DOC_",
    banCode = "_D0(banner",
    listOfDocereeAdIds = [],
    orginalRequestedAdIds = [];

function getDynamicImage(e, t) {
    if (document.cookie = "D0CIDS_=; expires=Thu, 01 Jan 1970 00:00:00 GMT", "function" == typeof getHCPFromPublisherPage) try {
        getHCPFromPublisherPage(function(n) {
            var o = n;
            Array.prototype.forEach.call(orginalRequestedAdIds, function(n, d) {
                e = n.Id, t = n.Dimension;
                var i = "id=" + e + "&size=" + t + "&publisherDomain=" + document.domain + "&pubRequestedURL=" + encodeURIComponent(document.URL) + "&loggedInUser=" + o,
                    r = new XMLHttpRequest;
                $("[id]").each(function() {
                    var t = $('[id="' + this.id + '"]');
                    e === this.id && 1 == t.length && (r.onreadystatechange = function() {
                        if (4 == this.readyState)
                            if (200 == this.status) {
                                var e = JSON.parse(r.responseText);
                                if (e && e.newPlatformUid) {
                                    var t = {
                                        platformUid: e.newPlatformUid,
                                        version: e.version
                                    };
                                    document.cookie = "_docereeId=" + JSON.stringify(t) + ";path=/"
                                } else {
                                    var n = e.ctaLink.includes("http:") || e.ctaLink.includes("https:") ? e.ctaLink : "//" + e.ctaLink;
                                    document.getElementById(e.DIVID).innerHTML = "<a id='" + e.DIVID + banCode + "' name='" + e.CBID + "'  href='" + n + "'  target='blank'><img onload='tracking(" + e.DIVID + ")' src='" + e.sourceURL + "'></a>"
                                }
                            } else logging("Exception : getImage API,  " + r.responseText)
                    }, r.open("GET", baseURl + "/render/getImage?" + i, !0), r.send())
                })
            })
        })
    } catch (e) {
        logging(e)
    } else logging("getHCPFromPublisherPage function is not yet defined for " + e)
}

function typeOfAction(e, t, n, o) {
    try {
        "CPC" == e && o <= 1 ? UserAction(e, t, n) : "CPC" != e && UserAction(e, t, n)
    } catch (e) {
        logging(e)
    }
}

function UserAction(e, t, n) {
    try {
        var o = new XMLHttpRequest,
            d = new Date;
        o.onreadystatechange = function() {
            4 == this.readyState && 200 == this.status && console.log(this.responseText)
        }, o.open("POST", baseURl + "/render/saveDetail", !0), o.setRequestHeader("Content-type", "application/json; charset=utf-8"), o.send(JSON.stringify({
            publisherDomain: document.domain,
            publisherACSID: t,
            advertiserCampID: n,
            typeOfEvent: e,
            dateInUTC: d.toUTCString()
        }))
    } catch (e) {
        logging(e)
    }
}

function logging(e) {
    var t = new XMLHttpRequest,
        n = new Date;
    t.open("POST", baseURl + "/render/logExceptions", !0), t.setRequestHeader("Content-type", "application/json; charset=utf-8"), t.send(JSON.stringify({
        excDetails: n.toUTCString() + " : Path :" + window.location.origin + " , ERROR : " + e
    }))
}! function() {
    try {
        // var e = docCont.contet_id,
        //     t = document.getElementById(e),
        //     n = docCont.content_type,
        //     o = docCont.content_sizes;
        // if (document.cookie.split(";").filter(e => e.trim().startsWith("D0CIDS_=")).length) {
        //     var d = document.cookie.replace(/(?:(?:^|.*;\s*)D0CIDS_\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
        //         i = JSON.parse(d);
        //     requestedAdIds = requestedAdIds || [], (requestedAdIds = i).push({
        //         Id: e,
        //         Dimension: o
        //     }), requestedAdIds = requestedAdIds.filter((e, t, n) => n.findIndex(t => t.Id === e.Id) === t);
        //     var r = JSON.stringify(requestedAdIds);
        //     document.cookie = "D0CIDS_=" + r
        // } else {
        //     i = [{
        //         Id: e,
        //         Dimension: o
        //     }], r = JSON.stringify(i);
        //     requestedAdIds = requestedAdIds || [], requestedAdIds = i, document.cookie = "D0CIDS_=" + r
        // }
        $(document).ready(function() {
            var t = document.querySelectorAll("[id]");
            // if (listOfDocereeAdIds = [], Array.prototype.forEach.call(t, function(e, t) {
            //         -1 === listOfDocereeAdIds.indexOf(e.id.split(DocereeAdCode)[0]) && e.id.includes(DocereeAdCode) && listOfDocereeAdIds.push(e.id)
            //     }), requestedAdIds.length == listOfDocereeAdIds.length && requestedAdIds.length == listOfDocereeAdIds.length) {
                 orginalRequestedAdIds = requestedAdIds;
                var d = new XMLHttpRequest;
                var r = JSON.stringify(requestedAdIds);
                document.cookie = "D0CIDS_=" + r;
                d.onreadystatechange = function() {
                    if (4 == this.readyState && 200 == this.status) {
                        var t = document.createElement("script");
                        t.text = d.responseText, document.body.appendChild(t), "img" == 'img' && getDynamicImage('DOC_frpgajk627nsx9', ['250 x 250'])
                    }
                }, d.open("GET", "http://localhost:2007/getHCPScript.js", !0), d.send()
            
        });
        // if (t) {
        //     var c = "img" == n ? e + banCode : e + vidCode,
        //         s = 0;
        //     t.addEventListener("click", function() {
        //         typeOfAction("CPC", e, document.getElementById(c).getAttribute("name"), ++s)
        //     })
        // }
    } catch (e) {
        logging(e.message)
    }
}();
var windowPrototype = {
    wdHeight: function() {
        try {
            var e;
            return "number" == typeof window.innerWidth ? e = window.innerHeight : document.documentElement && document.documentElement.clientHeight ? e = document.documentElement.clientHeight : document.body && document.body.clientHeight && (e = document.body.clientHeight), e
        } catch (e) {
            return 0
        }
    },
    wdWidth: function() {
        try {
            var e;
            return "number" == typeof window.innerWidth ? e = window.innerWidth : document.documentElement && document.documentElement.clientWidth ? e = document.documentElement.clientWidth : document.body && document.body.clientWidth && (e = document.body.clientWidth), e
        } catch (e) {
            return 0
        }
    }
};

function getScrollTop() {
    try {
        var e = document.body.scrollTop;
        return 0 == e && (e = window.pageYOffset ? window.pageYOffset : document.body.parentElement ? document.body.parentElement.scrollTop : 0), e
    } catch (e) {
        logging(e)
    }
}

function getElementTop(e) {
    try {
        if (document.getElementById) var t = document.getElementById(e);
        else if (document.all) t = document.all[e];
        if (null != t) {
            for (yPos = t.offsetTop, tempEl = t.offsetParent; null != tempEl;) yPos += tempEl.offsetTop, tempEl = tempEl.offsetParent;
            return yPos
        }
        return 0
    } catch (e) {
        logging(e)
    }
}

function tracking(e) {
    try {
        if (e) {
            var t = getScrollTop(),
                n = getElementTop(e.id);
            n > 0 && t + windowPrototype.wdHeight() > 1 && t + windowPrototype.wdHeight() > n ? UserAction("CPM", e.id, document.getElementById(e.id + banCode).getAttribute("name")) : setTimeout("tracking(" + e.id + ")", 1e3)
        }
    } catch (e) {
        logging(e)
    }
}