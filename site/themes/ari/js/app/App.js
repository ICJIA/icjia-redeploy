const App = {


    init: function() {
        var text = "text"
        console.log('ARI Init')
        return this
    },


    highlightSearch: function() {
        $(".search").focus().select();
        return this
    },

    addThis: function() {
        var addThis = document.createElement('script');
        addThis.setAttribute('src', '//s7.addthis.com/js/300/addthis_widget.js#pubid=cschweda');
        document.body.appendChild(addThis);
        return this
    },

    initializeFactsheets: function() {
        console.log('Factsheet init')
        $('.selectpicker').selectpicker();
        $('.selectpicker').on('changed.bs.select', function(e) {
            $('.local-program-description').hide()
            $('.factsheet').show();
            var siteTitle = $(".selectpicker option:selected").text()
            var siteURL = e.target.value
            $('.panel-title').html(siteTitle)
            console.log('URL: ', e.target.value)
            $.ajax(siteURL, {
                success: function(data) {
                    $('.panel-body').html(data)
                },
                error: function() {
                    console.log('Error: ', error)
                }
            });


        });
        return this

    },
    initializeHomePageMap: function() {
        // Map events
        var fusionEventsObj = {

            // "entityRollover": function(evt, data) {
            //     console.log(data.label)
            // },

            "entityClick": function(evt, data) {
                //alert("You have clicked on " + data.label + ". Data ID: " + data.id);
                //var siteDescriptionLabel = mapCountyToSiteDescription(data.label)

                //var metaData = getCountyMetaDataFromId(data.id);
                var metaData = getCountyMetaData('id', data.id)
                $('.local-program-description').hide();
                //console.log(metaData)
                if (metaData.displayValue != '') {
                    //var factsheetURL = '/sites/site-' + metaData.toolText
                    $('.selectpicker').selectpicker('val', metaData.title);
                    //var factsheetTitle = metaData.title
                    loadAjaxFactsheet(metaData)
                    $('.factsheet').show();

                }
            },
        }

        // Map colors

        var fusionColorRangeObj = {
            "color": [{
                    "minValue": "0",
                    "maxValue": "500",
                    "displayValue": "ARI SFY17 sites",
                    "color": "#5a53f2"

                }, {
                    "minValue": "500",
                    "maxValue": "1000",
                    "displayValue": "ARI planning grant counties",
                    "color": "#2e2a7a"

                },

            ]
        }

        // Map specs
        var fusionChartObj = {
            "caption": "Adult Redeploy Illinois",
            "subCaption": "SFY 2017",
            "captionFontSize": "18",
            "captionFontColor": "#222222",
            "subcaptionFontSize": "14",
            "subcaptionFontColor": "#666666",
            "animation": "0",
            "showBevel": "0",
            "showCanvasBorder": "0",
            "includeValueInLabels": "1",
            "baseFontSize": "9",
            "showToolTip": "1",
            "showLabels": "1",
            "includeNameInLabels": "0",
            "showMarkerLabels": "1",
            "fontBold": "1",
            "hoverColor": "#eeeeee",
            "exportenabled": "0",
            "showexportdatamenuitem": "0",
            "showprintmenuitem": "0",
            "useHoverColor": "1",
            "hoverOnEmpty": "1",
            "borderColor": "#777777",
            "legendPosition": "BOTTOM",
            "legendItemFontSize": "12",
            "legendItemFontColor": "#333333",
            "connectorColor": "#ffffff",
            "fillColor": "#ffffff",
            "showLegend": "1",
            "legendPosition": "bottom",
            "baseFontColor": "#aaaaaa"
        }

        // County metadata
        var mapMetaData = [{
            "id": "001",
            "displayValue": "AD",
            "value": "500",
            "toolText": "Adams",
            "title": "Adams County"
        }, {
            "id": "003",
            "displayValue": ""
        }, {
            "id": "005",
            "displayValue": ""
        }, {
            "id": "007",
            "displayValue": "BO",
            "value": "10",
            "toolText": "Boone",
            "title": "Boone County"
        }, {
            "id": "009",
            "displayValue": ""
        }, {
            "id": "011",
            "displayValue": ""
        }, {
            "id": "013",
            "displayValue": ""
        }, {
            "id": "015",
            "displayValue": ""
        }, {
            "id": "017",
            "displayValue": ""
        }, {
            "id": "019",
            "displayValue": ""
        }, {
            "id": "021",
            "displayValue": "CI",
            "value": "10",
            "toolText": "Christian",
            "title": "Christian County"
        }, {
            "id": "023",
            "displayValue": ""
        }, {
            "id": "025",
            "displayValue": "CY",
            "value": "500",
            "toolText": "Clay",
            "title": "Clay County"
        }, {
            "id": "027",
            "displayValue": ""
        }, {
            "id": "029",
            "displayValue": ""
        }, {
            "id": "031",
            "displayValue": "CK",
            "value": "10",
            "toolText": "Cook",
            "title": "Cook County"
        }, {
            "id": "033",
            "displayValue": "CF",
            "value": "10",
            "toolText": "Crawford",
            "title": "Crawford County"
        }, {
            "id": "035",
            "displayValue": ""
        }, {
            "id": "037",
            "displayValue": "DE",
            "value": "10",
            "toolText": "DeKalb",
            "title": "DeKalb County"
        }, {
            "id": "039",
            "displayValue": ""
        }, {
            "id": "041",
            "displayValue": ""
        }, {
            "id": "043",
            "displayValue": "DP",
            "value": "10",
            "toolText": "DuPage",
            "title": "DuPage County"
        }, {
            "id": "045",
            "displayValue": ""
        }, {
            "id": "047",
            "displayValue": "EW",
            "value": "10",
            "toolText": "Edwards",
            "title": "Edwards County"
        }, {
            "id": "049",
            "displayValue": "EF",
            "value": "10",
            "toolText": "Effingham",
            "title": "Effingham County"
        }, {
            "id": "051",
            "displayValue": "FA",
            "value": "500",
            "toolText": "Fayette",
            "title": "Fayette County"
        }, {
            "id": "053",
            "displayValue": ""
        }, {
            "id": "055",
            "displayValue": "FR",
            "value": "10",
            "toolText": "Franklin",
            "title": "Franklin County"
        }, {
            "id": "057",
            "displayValue": "FU",
            "value": "10",
            "toolText": "Fulton",
            "title": "Fulton County"
        }, {
            "id": "059",
            "displayValue": "GA",
            "value": "10",
            "toolText": "Gallatin",
            "title": "Gallatin County"
        }, {
            "id": "061",
            "displayValue": "GR",
            "value": "500",
            "toolText": "Greene",
            "title": "Greene County"
        }, {
            "id": "063",
            "displayValue": "GU",
            "value": "10",
            "toolText": "Grundy",
            "title": "Grundy County"
        }, {
            "id": "065",
            "displayValue": "HA",
            "value": "10",
            "toolText": "Hamilton",
            "title": "Hamilton County"
        }, {
            "id": "067",
            "displayValue": "HC",
            "value": "10",
            "toolText": "Hancock",
            "title": "Hancock County"
        }, {
            "id": "069",
            "displayValue": "HR",
            "value": "10",
            "toolText": "Hardin",
            "title": "Hardin County"
        }, {
            "id": "071",
            "displayValue": "HE",
            "value": "10",
            "toolText": "Henderson",
            "title": "Henderson County"
        }, {
            "id": "073",
            "displayValue": ""
        }, {
            "id": "075",
            "displayValue": ""
        }, {
            "id": "077",
            "displayValue": ""
        }, {
            "id": "079",
            "displayValue": "JS",
            "value": "500",
            "toolText": "Jasper",
            "title": "Jasper County"
        }, {
            "id": "081",
            "displayValue": "JE",
            "value": "10",
            "toolText": "Jefferson",
            "title": "Jefferson County"
        }, {
            "id": "083",
            "displayValue": "JR",
            "value": "10",
            "toolText": "Jersey",
            "title": "Jersey County"
        }, {
            "id": "085",
            "displayValue": ""
        }, {
            "id": "087",
            "displayValue": ""
        }, {
            "id": "089",
            "displayValue": ""
        }, {
            "id": "091",
            "displayValue": ""
        }, {
            "id": "093",
            "displayValue": "KD",
            "value": "10",
            "toolText": "Kendall",
            "title": "Kendall County"
        }, {
            "id": "095",
            "displayValue": "KO",
            "value": "10",
            "toolText": "Knox",
            "title": "Knox County"
        }, {
            "id": "097",
            "displayValue": "LA",
            "value": "10",
            "toolText": "Lake",
            "title": "Lake County"
        }, {
            "id": "099",
            "displayValue": "LS",
            "value": "10",
            "toolText": "LaSalle",
            "title": "LaSalle County"
        }, {
            "id": "101",
            "displayValue": "LW",
            "value": "10",
            "toolText": "Lawrence",
            "title": "Lawrence County"
        }, {
            "id": "103",
            "displayValue": ""
        }, {
            "id": "105",
            "displayValue": ""
        }, {
            "id": "107",
            "displayValue": ""
        }, {
            "id": "109",
            "displayValue": "MD",
            "value": "10",
            "toolText": "McDonough",
            "title": "McDonough County"
        }, {
            "id": "111",
            "displayValue": ""
        }, {
            "id": "113",
            "displayValue": "ML",
            "value": "10",
            "toolText": "McLean",
            "title": "McLean County"
        }, {
            "id": "115",
            "displayValue": "MA",
            "value": "10",
            "toolText": "Macon",
            "title": "Macon County"
        }, {
            "id": "117",
            "displayValue": "MP",
            "value": "500",
            "toolText": "Macoupin",
            "title": "Macoupin County"
        }, {
            "id": "119",
            "displayValue": "MI",
            "value": "10",
            "toolText": "Madison",
            "title": "Madison County"
        }, {
            "id": "121",
            "displayValue": ""
        }, {
            "id": "123",
            "displayValue": ""
        }, {
            "id": "125",
            "displayValue": ""
        }, {
            "id": "127",
            "displayValue": ""
        }, {
            "id": "129",
            "displayValue": ""
        }, {
            "id": "131",
            "displayValue": ""
        }, {
            "id": "133",
            "displayValue": "ME",
            "value": "10",
            "toolText": "Monroe",
            "title": "Monroe County"
        }, {
            "id": "135",
            "displayValue": ""
        }, {
            "id": "137",
            "displayValue": "MG",
            "value": "500",
            "toolText": "Morgan",
            "title": "Morgan County"
        }, {
            "id": "139",
            "displayValue": ""
        }, {
            "id": "141",
            "displayValue": ""
        }, {
            "id": "143",
            "displayValue": "PE",
            "value": "10",
            "toolText": "Peoria",
            "title": "Peoria County"
        }, {
            "id": "145",
            "displayValue": "PR",
            "value": "500",
            "toolText": "Perry",
            "title": "Perry County"
        }, {
            "id": "147",
            "displayValue": ""
        }, {
            "id": "149",
            "displayValue": ""
        }, {
            "id": "151",
            "displayValue": ""
        }, {
            "id": "153",
            "displayValue": ""
        }, {
            "id": "155",
            "displayValue": ""
        }, {
            "id": "157",
            "displayValue": "RA",
            "value": "10",
            "toolText": "Randolph",
            "title": "Randolph County"
        }, {
            "id": "159",
            "displayValue": "RI",
            "value": "10",
            "toolText": "Richland",
            "title": "Richland County"
        }, {
            "id": "161",
            "displayValue": ""
        }, {
            "id": "163",
            "displayValue": "SC",
            "value": "10",
            "toolText": "St. Clair",
            "title": "St. Clair County"
        }, {
            "id": "165",
            "displayValue": ""
        }, {
            "id": "167",
            "displayValue": "SN",
            "value": "10",
            "toolText": "Sangamon",
            "title": "Sangamon County"
        }, {
            "id": "169",
            "displayValue": ""
        }, {
            "id": "171",
            "displayValue": "ST",
            "value": "500",
            "toolText": "Scott",
            "title": "Scott County"
        }, {
            "id": "173",
            "displayValue": ""
        }, {
            "id": "175",
            "displayValue": ""
        }, {
            "id": "177",
            "displayValue": ""
        }, {
            "id": "179",
            "displayValue": ""
        }, {
            "id": "181",
            "displayValue": ""
        }, {
            "id": "183",
            "displayValue": ""
        }, {
            "id": "185",
            "displayValue": "WA",
            "value": "10",
            "toolText": "Wabash",
            "title": "Wabash County"
        }, {
            "id": "187",
            "displayValue": "WR",
            "value": "10",
            "toolText": "Warren",
            "title": "Warren County"
        }, {
            "id": "189",
            "displayValue": "WS",
            "value": "500",
            "toolText": "Washington",
            "title": "Washington County"
        }, {
            "id": "191",
            "displayValue": "WY",
            "value": "10",
            "toolText": "Wayne",
            "title": "Wayne County"
        }, {
            "id": "193",
            "displayValue": "WH",
            "value": "10",
            "toolText": "White",
            "title": "White County"
        }, {
            "id": "195",
            "displayValue": ""
        }, {
            "id": "197",
            "displayValue": "WI",
            "value": "10",
            "toolText": "Will",
            "title": "Will County"
        }, {
            "id": "199",
            "displayValue": ""
        }, {
            "id": "201",
            "displayValue": "WB",
            "value": "10",
            "toolText": "Winnebago",
            "title": "Winnebago County"
        }, {
            "id": "203",
            "displayValue": ""
        }]

        /* ***********************************************

        Map Functions

        ************************************************* */

        function generateLorumIpsum() {
            var els = document.querySelectorAll('[data-lorem]');
            for (var i in els) {
                if (els.hasOwnProperty(i)) {
                    var lorem = new Lorem;
                    lorem.type = els[i].tagName == 'IMG' ? Lorem.IMAGE : Lorem.TEXT;
                    lorem.query = els[i].getAttribute('data-lorem');
                    lorem.createLorem(els[i]);
                }
            }
            return this
        }

        function loadAjaxFactsheet(metaDataObj) {
            $('.panel-text').html('')
            $('.panel-title').html(metaDataObj.title)
            var factSheetUrl = _.camelCase(metaDataObj.title)
                // $(".panel-title").after(function() {
                //     return "<div id='litext' data-lorem='2p'></div>";
                // });
            $('.panel-text').attr('data-lorem', '2p')
            generateLorumIpsum();
            console.log('Load AJAX factsheet from: ', factSheetUrl)
            return this
        }


        function getCountyMetaData(key, value) {
            var myObj
            if (key === 'title') {
                myObj = _.find(mapMetaData, { 'title': value });
            }
            if (key === 'id') {
                myObj = _.find(mapMetaData, { 'id': value });
            }

            return myObj
        }


        function displayErrorMessage(e) {
            $('.panel-title').html(e);
            $('.panel-text').html('Content not defined.')
            return this
        }


        $('.factsheet').hide();

        $('.selectpicker').selectpicker();
        //$('.selectpicker').selectpicker('val', '/sites/site-002');
        $('.selectpicker').on('changed.bs.select', function(e) {
            //var factsheetTitle = $(".selectpicker option:selected").text()
            $('.local-program-description').hide();
            $('.panel-text').html('');
            $('.factsheet').show();
            var factsheetTitle = e.target.value;
            //console.log($(".selectpicker option:selected").text())
            //console.log(factsheetTitle)
            //var o = getCountyMetaDataFromTitle(factsheetTitle)
            var o = getCountyMetaData('title', factsheetTitle)
            console.log(o)
            if (typeof o === "undefined") {
                displayErrorMessage(factsheetTitle)
            } else {
                loadAjaxFactsheet(o)
            }


        });


        // Render Fusion Map


        var ariMap;
        FusionCharts.ready(function() {
            ariMap = new FusionCharts({
                type: 'maps/illinois',
                renderAt: 'chart-container',
                width: '580',
                height: '800',
                dataFormat: 'json',
                "events": fusionEventsObj,
                dataSource: {
                    "chart": fusionChartObj,
                    "colorrange": fusionColorRangeObj,
                    "data": mapMetaData,
                }
            }).render();

            //ariMap.resizeTo(700, 700).render();


        });






    }

}

export { App }