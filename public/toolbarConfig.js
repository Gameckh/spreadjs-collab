const coworkConfig = {
    "ribbon": {
        "panels": [
            {
                "id": "home",
                "text": "开始",
                "buttonGroups": [
                    {
                        "overflow": true,
                        "overflowTitle": "更多字体选项",
                        "commandGroup": {
                            "children": [
                                {
                                    "children": [
                                        "fontFamily",
                                        "fontSize",
                                        "increaseFontsize",
                                        "decreaseFontsize",
                                        "fontWeight",
                                        "fontItalic",
                                        "fontUnderline",
                                        {
                                            "command": "border",
                                            "type": "dropdown",
                                            "direction": "horizontal",
                                            "visiblePriority": 5,
                                            "children": [
                                                "bottomBorder",
                                                "topBorder",
                                                "leftBorder",
                                                "rightBorder",
                                                "separator",
                                                "noBorder",
                                                "allBorder",
                                                "outsideBorder",
                                                "thickBoxBorder",
                                                "separator",
                                                "bottomDoubleBorder",
                                                "thickBottomBorder",
                                                "topBottomBorder",
                                                "topThickBottomBorder",
                                                "topDoubleBottomBorder",
                                                "moreBorder"
                                            ]
                                        },
                                        "backColor",
                                        "foreColor",
                                        "fontDoubleUnderline"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "对齐方式",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "alignment",
                                    "type": "dropdown",
                                    "visiblePriority": 9,
                                    "dropdownMaxWidth": 145,
                                    "children": [
                                        {
                                            "command": "leftAlign",
                                            "type": "group",
                                            "children": [
                                                "leftAlign",
                                                "centerAlign",
                                                "rightAlign",
                                                "topAlign",
                                                "middleAlign",
                                                "bottomAlign"
                                            ]
                                        },
                                        {
                                            "command": "decreaseIndent",
                                            "type": "group",
                                            "children": [
                                                "decreaseIndent",
                                                "increaseIndent"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "command": "orientationList",
                                    "type": "dropdown",
                                    "direction": "horizontal",
                                    "children": [
                                        "angleCounterclockwise",
                                        "angleClockwise",
                                        "verticalText",
                                        "rotateTextUp",
                                        "rotateTextDown"
                                    ]
                                },
                                "wrapText",
                                {
                                    "children": [
                                        {
                                            "command": "mergeCenter",
                                            "type": "dropdown",
                                            "visiblePriority": 7,
                                            "children": [
                                                "mergeCenterButton",
                                                "mergeAcross",
                                                "mergeCells",
                                                "unMergeCells"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "编辑",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "clear",
                                    "type": "dropdown",
                                    "visiblePriority": 1,
                                    "children": [
                                        "clearAll",
                                        "clearFormat",
                                        "clearContent",
                                        "clearComments"
                                    ]
                                },
                                {
                                    "command": "editingFind",
                                    "type": "dropdown",
                                    "visiblePriority": 6,
                                    "children": [
                                        "find",
                                        "replace",
                                        "goto",
                                        "gotoSpecial"
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "!TableSheetActive && !DataManagerActive || IsInTableSheetDesignMode"
            },
            {
                "id": "insert",
                "text": "插入",
                "overflow": true,
                "buttonGroups": [
                    {
                        "commandGroup": {
                            "commands": [
                                "insertTable"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "图表",
                        "commandGroup": {
                            "direction": "horizontal",
                            "children": [
                                "insertChart",
                                {
                                    "children": [
                                        {
                                            "direction": "horizontal",
                                            "children": [
                                                {
                                                    "command": "columnOrBarChartPreview",
                                                    "className": "columnOrBarChartPreview-dropdown-container",
                                                    "type": "dropdown",
                                                    "children": [
                                                        {
                                                            "command": "columnChartGroup",
                                                            "className": "test",
                                                            "type": "group",
                                                            "children": [
                                                                "clusteredColumnChart",
                                                                "stackedColumnChart",
                                                                "stackedColumn100Chart"
                                                            ]
                                                        },
                                                        {
                                                            "command": "barChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "clusteredBarChart",
                                                                "stackedBarChart",
                                                                "stackedBar100Chart"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "command": "treeMapOrSunburstChartPreview",
                                                    "type": "dropdown",
                                                    "className": "treeMapOrSunburstChartPreview-dropdown-container",
                                                    "children": [
                                                        {
                                                            "command": "treemapChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "treemapChart"
                                                            ]
                                                        },
                                                        {
                                                            "command": "sunburstChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "sunburstChart"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "command": "funnelOrStockChartPreview",
                                                    "className": "funnelOrStockChartPreview-dropdown-container",
                                                    "type": "dropdown",
                                                    "children": [
                                                        {
                                                            "command": "funnelChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "funnelChart"
                                                            ]
                                                        },
                                                        {
                                                            "command": "stockChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "stockHLCChart",
                                                                "stockOHLCChart",
                                                                "stockVHLCChart",
                                                                "stockVOHLCChart"
                                                            ]
                                                        },
                                                        {
                                                            "command": "radarChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "radarChart",
                                                                "radarWithMarkersChart",
                                                                "filledRadarChart"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "direction": "horizontal",
                                            "children": [
                                                {
                                                    "command": "lineOrAreaChartPreview",
                                                    "className": "lineOrAreaChartPreview-dropdown-container",
                                                    "type": "dropdown",
                                                    "children": [
                                                        {
                                                            "command": "lineChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "lineChart",
                                                                "lineStackedChart",
                                                                "lineStacked100Chart",
                                                                "lineMarkersChart",
                                                                "lineMarkersStackedChart",
                                                                "lineMarkersStacked100Chart"
                                                            ]
                                                        },
                                                        {
                                                            "command": "areaChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "areaChart",
                                                                "areaStackedChart",
                                                                "areaStacked100Chart"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "command": "pieOrDoughnutChartPreview",
                                                    "type": "dropdown",
                                                    "className": "pieOrDoughnutChartPreview-dropdown-container",
                                                    "children": [
                                                        {
                                                            "command": "pieChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "pieChart"
                                                            ]
                                                        },
                                                        {
                                                            "command": "doughnutChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "doughnutChart"
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "command": "comboChartPreview",
                                                    "type": "dropdown",
                                                    "className": "comboChartPreview-dropdown-container",
                                                    "children": [
                                                        {
                                                            "command": "comboChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "comboChartColumnAndLine",
                                                                "comboChartColumnAndLineAxis",
                                                                "comboChartColumnAndArea"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "direction": "horizontal",
                                            "children": [
                                                {
                                                    "command": "scatterOrBubbleChartPreview",
                                                    "type": "dropdown",
                                                    "className": "scatterOrBubbleChartPreview-dropdown-container",
                                                    "children": [
                                                        {
                                                            "command": "scatterChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "scatterChart",
                                                                "scatterSmoothMarkersChart",
                                                                "scatterSmoothChart",
                                                                "scatterStraightMarkersChart",
                                                                "scatterStraightChart"
                                                            ]
                                                        },
                                                        {
                                                            "command": "bubbleChartGroup",
                                                            "type": "group",
                                                            "children": [
                                                                "bubbleChart"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "visibleWhen": "!IsInTableSheetDesignMode"
            },
            {
                "id": "tableDesign",
                "text": "表设计",
                "overflow": true,
                "buttonGroups": [
                    {
                        "buttonGroupName": "属性",
                        "commandGroup": {
                            "commands": [
                                "tableName"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "工具",
                        "commandGroup": {
                            "commands": [
                                "convertToRange",
                                "tableAllowAutoExpand"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "表式样选项",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "tableStyleOptions",
                                    "type": "dropdown",
                                    "children": [
                                        "tableStyleHeaderRow",
                                        "tableStyleTotalRow",
                                        "tableStyleBandedRows",
                                        "tableStyleFirstColumn",
                                        "tableStyleLastColumn",
                                        "tableStyleBandedColumns",
                                        "tableStyleResizeHandler",
                                        "tableStyleFilterButton",
                                        "tableStyleTotalRowList"
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "visibleWhen": "TableSelected"
            },
            {
                "id": "chartDesign",
                "text": "图表设计",
                "buttonGroups": [
                    {
                        "buttonGroupName": "数据",
                        "commandGroup": {
                            "commands": [
                                "switchRowColumn",
                                "selectData"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "类型",
                        "commandGroup": {
                            "commands": [
                                "changeChartType"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "图表布局",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "addChartElement",
                                    "type": "dropdown",
                                    "children": [
                                        {
                                            "command": "axes",
                                            "type": "dropdown",
                                            "children": [
                                                "axesPrimaryHorizontal",
                                                "axesPrimaryVertical",
                                                "axesSecondaryHorizontal",
                                                "axesSecondaryVertical",
                                                "separator",
                                                "axesMoreAxisOption"
                                            ]
                                        },
                                        {
                                            "command": "axisTitles",
                                            "type": "dropdown",
                                            "children": [
                                                "axisTitlesPrimaryHorizontal",
                                                "axisTitlesPrimaryVertical",
                                                "axisTitlesSecondaryHorizontal",
                                                "axisTitlesSecondaryVertical",
                                                "separator",
                                                "axisTitlesMoreAxisTitlesOption"
                                            ]
                                        },
                                        {
                                            "command": "chartTitle",
                                            "type": "dropdown",
                                            "children": [
                                                "chartTitleNone",
                                                "chartTitleAboveChart",
                                                "separator",
                                                "chartTitleMoreChartTitleOption"
                                            ]
                                        },
                                        {
                                            "command": "errorBars",
                                            "type": "dropdown",
                                            "children": [
                                                "errorBarNone",
                                                "errorBarStandardError",
                                                "errorBarPercentage",
                                                "errorBarStandardDeviation",
                                                "separator",
                                                "errorBarMoreOption"
                                            ]
                                        },
                                        {
                                            "command": "gridLines",
                                            "type": "dropdown",
                                            "children": [
                                                "gridLinesPrimaryMajorHorizontal",
                                                "gridLinesPrimaryMajorVertical",
                                                "gridLinesPrimaryMinorHorizontal",
                                                "gridLinesPrimaryMinorVertical",
                                                "gridLinesSecondaryMajorHorizontal",
                                                "gridLinesSecondaryMajorVertical",
                                                "gridLinesSecondaryMinorHorizontal",
                                                "gridLinesSecondaryMinorVertical",
                                                "separator",
                                                "gridLinesMoreGridLinesOption"
                                            ]
                                        },
                                        {
                                            "command": "dataLabels",
                                            "type": "dropdown",
                                            "children": [
                                                "dataLabelsNone",
                                                "dataLabelsNoneLineGroup",
                                                "dataLabelsNoneScatterGroup",
                                                "dataLabelsNonePieGroup",
                                                "dataLabelsNoneDoughnutGroup",
                                                "dataLabelsNoneSunburstGroup",
                                                "dataLabelNoneTreeMapGroup",
                                                "dataLabelsNoneFunnelGroup",
                                                "dataLabelsCenter",
                                                "dataLabelsCenterLineGroup",
                                                "dataLabelsCenterScatterGroup",
                                                "dataLabelsCenterPieGroup",
                                                "dataLabelsCenterSunburstGroup",
                                                "dataLabelsCenterFunnelGroup",
                                                "dataLabelsInsideEnd",
                                                "dataLabelsInsideEndPieGroup",
                                                "dataLabelsOutsideEnd",
                                                "dataLabelsOutsideEndPieGroup",
                                                "dataLabelsBestFitPieGroup",
                                                "dataLabelShow",
                                                "dataLabelsShowPieGroup",
                                                "dataLabelsShowDoughnutGroup",
                                                "dataLabelsShowTreeMapGroup",
                                                "dataLabelsAboveLineGroup",
                                                "dataLabelsAboveScatterGroup",
                                                "dataLabelsBelowLineGroup",
                                                "dataLabelsBelowScatterGroup",
                                                "separator",
                                                "dataLabelsMoreDataLabelsOption"
                                            ]
                                        },
                                        {
                                            "command": "legend",
                                            "type": "dropdown",
                                            "children": [
                                                "legendNone",
                                                "legendRight",
                                                "legendTop",
                                                "legendLeft",
                                                "legendBottom",
                                                "separator",
                                                "legendMoreLegendOption"
                                            ]
                                        },
                                        {
                                            "command": "trendline",
                                            "type": "dropdown",
                                            "children": [
                                                "trendlineNone",
                                                "trendlineLinear",
                                                "trendlineExponential",
                                                "trendlineLinearForecast",
                                                "trendlineMovingAverage",
                                                "separator",
                                                "trendlineMoreOption"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "图表样式",
                        "commandGroup": {
                            "commands": [
                                "changeColors",
                                "chartStyle"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "设置格式",
                        "commandGroup": {
                            "commands": [
                                "FormatPane"
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "singleChartSelected"
            }
        ],
        "ribbonHeight": 50
    },
    "contextMenu": [
        "gc.spread.contextMenu.insertColumns",
        "gc.spread.contextMenu.deleteColumns",
        "gc.spread.contextMenu.insertRows",
        "gc.spread.contextMenu.deleteRows",
        "tableInsert",
        "tableDelete",
        "gc.spread.contextMenu.clearContents",
        "gc.spread.contextMenu.filter",
        "sort",
        "table",
        "link",
        "editHyperlink",
        "openHyperlink",
        "removeHyperlink",
        "removeHyperlinks",
        "richText",
        "defineName",
        "columnWidth",
        "rowHeight",
        "gc.spread.contextMenu.hideColumns",
        "gc.spread.contextMenu.hideRows",
        "gc.spread.contextMenu.unhideColumns",
        "gc.spread.contextMenu.unhideRows"
    ],
    "sidePanels": [
        {
            "position": "top",
            "allowResize": true,
            "command": "formulaBarPanel",
            "uiTemplate": "formulaBarTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "fieldListTreePanel",
            "uiTemplate": "filedListTemplate"
        },
        {
            "position": "bottom",
            "command": "statusBarPanel",
            "uiTemplate": "statusBarPanelTemplate"
        },
        {
            "position": "full",
            "command": "fileMenuPanel",
            "uiTemplate": "fileMenuPanelTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "shapePanel",
            "uiTemplate": "shapeTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "columnChartPanel",
            "uiTemplate": "columnChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "lineChartPanel",
            "uiTemplate": "lineChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "pieChartPanel",
            "uiTemplate": "pieChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "barChartPanel",
            "uiTemplate": "barChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "areaChartPanel",
            "uiTemplate": "areaChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "scatterChartPanel",
            "uiTemplate": "scatterChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "stockChartPanel",
            "uiTemplate": "stockChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "radarChartPanel",
            "uiTemplate": "radarChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "sunburstChartPanel",
            "uiTemplate": "sunburstChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "treeMapChartPanel",
            "uiTemplate": "treeMapChartPanelTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "funnelChartPanel",
            "uiTemplate": "funnelChartPanelTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "comboChartPanel",
            "uiTemplate": "comboChartTemplate"
        },
        {
            "position": "right",
            "width": "315px",
            "command": "chartAltTextPanel",
            "uiTemplate": "altTextTemplate",
            "showCloseButton": true
        },
        {
            "position": "right",
            "width": "315px",
            "command": "pictureAltTextPanel",
            "uiTemplate": "altTextTemplate",
            "showCloseButton": true
        },
        {
            "position": "right",
            "width": "315px",
            "command": "shapeAltTextPanel",
            "uiTemplate": "altTextTemplate",
            "showCloseButton": true
        },
        {
            "position": "right",
            "width": "315px",
            "command": "pivotTablePanel",
            "uiTemplate": "pivotTablePanelTemplate",
            "classList": [
                "gc-designer-pivot-table-panel"
            ],
            "showCloseButton": true
        },
        {
            "position": "right",
            "width": "315px",
            "command": "selectionPane",
            "uiTemplate": "selectionPane",
            "classList": [
                "gc-designer-selection-pane"
            ],
            "showCloseButton": true
        },
        {
            "position": "right",
            "width": "420px",
            "minWidth": "315px",
            "maxWidth": "1200px",
            "allowResize": true,
            "showResizeLine": true,
            "command": "formulaEditorPanel",
            "uiTemplate": "formulaEditorPanelTemplate",
            "showCloseButton": true
        }
    ],
    "commandMap": {
        "fontFamily": {
            "title": "${res.ribbon.home.fontFamily}",
            "type": "comboBox",
            "text": "Font Family",
            "comboWidth": 100,
            "commandName": "fontFamily",
            "dropdownList": [
                {
                    "value": "微软雅黑",
                    "text": "微软雅黑"
                },
                {
                    "value": "黑体",
                    "text": "黑体"
                },
                {
                    "value": "新宋体",
                    "text": "新宋体"
                },
                {
                    "value": "仿宋",
                    "text": "仿宋"
                },
                {
                    "value": "隶书",
                    "text": "隶书"
                },
                {
                    "value": "楷体",
                    "text": "楷体"
                },
                {
                    "text": "Arial",
                    "value": "Arial"
                },
                {
                    "text": "Arial Black",
                    "value": "Arial Black"
                },
                {
                    "text": "Calibri",
                    "value": "Calibri"
                },
                {
                    "text": "Cambria",
                    "value": "Cambria"
                },
                {
                    "text": "Candara",
                    "value": "Candara"
                },
                {
                    "text": "Century",
                    "value": "Century"
                },
                {
                    "text": "Courier New",
                    "value": "Courier New"
                },
                {
                    "text": "Comic Sans MS",
                    "value": "Comic Sans MS"
                },
                {
                    "text": "Garamond",
                    "value": "Garamond"
                },
                {
                    "text": "Georgia",
                    "value": "Georgia"
                },
                {
                    "text": "Malgun Gothic",
                    "value": "Malgun Gothic"
                },
                {
                    "text": "Mangal",
                    "value": "Mangal"
                },
                {
                    "text": "Meiryo",
                    "value": "Meiryo"
                },
                {
                    "text": "MS Gothic",
                    "value": "MS Gothic"
                },
                {
                    "text": "MS Mincho",
                    "value": "MS Mincho"
                },
                {
                    "text": "MS PGothic",
                    "value": "MS PGothic"
                },
                {
                    "text": "MS PMincho",
                    "value": "MS PMincho"
                },
                {
                    "text": "Tahoma",
                    "value": "Tahoma"
                },
                {
                    "text": "Times",
                    "value": "Times"
                },
                {
                    "text": "Times New Roman",
                    "value": "Times New Roman"
                },
                {
                    "text": "Trebuchet MS",
                    "value": "Trebuchet MS"
                },
                {
                    "text": "Verdana",
                    "value": "Verdana"
                },
                {
                    "text": "Wingdings",
                    "value": "Wingdings"
                }
            ],
            "dropdownMaxHeight": 500,
            "enableContext": "AllowFormatCells && !DisableHomeButton && !ChartSelected && !ShapeSelected && !pictureSelected && !SlicerSelected && !SelectedOrEditComments",
            "visiblePriority": 4
        }
    }
}

export default coworkConfig;