const coworkConfig = {
    "ribbon": {
        "panels": [
            {
                "id": "home",
                "text": "开始",
                "buttonGroups": [
                    {
                        "buttonGroupName": "剪贴板",
                        "commandGroup": {
                            "children": [
                                "undo",
                                {
                                    "command": "undoAndRedoList",
                                    "type": "dropdown",
                                    "direction": "horizontal",
                                    "visiblePriority": 10,
                                    "children": [
                                        "undo",
                                        "redo"
                                    ]
                                },
                                {
                                    "command": "paste",
                                    "type": "dropdown",
                                    "direction": "horizontal",
                                    "visiblePriority": 5,
                                    "children": [
                                        "cut",
                                        "copy",
                                        "pasteAll",
                                        "pasteFormulas",
                                        "pasteValues",
                                        "pasteFormatting",
                                        "pasteValuesAndFormatting",
                                        "pasteFormulasAndFormatting"
                                    ]
                                },
                                "formatPainter"
                            ]
                        }
                    },
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
                                        "rotateTextDown",
                                        "separator",
                                        "formatCellAlignment"
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
                        "buttonGroupName": "单元格",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "ribbonNumberFormat",
                                    "type": "dropdown",
                                    "visiblePriority": 9,
                                    "children": [
                                        "formatGeneral",
                                        "numberFormat",
                                        "currencyFormat",
                                        "accountingFormat",
                                        "shortDateFormat",
                                        "longDateformat",
                                        "timeFormat",
                                        "percentageFormat",
                                        "fractionFormat",
                                        "scientificFormat",
                                        "textFormat",
                                        "separator",
                                        "formatMore"
                                    ]
                                },
                                "formatPercentage",
                                "formatComma",
                                "increaseDecimal",
                                "decreaseDecimal",
                                {
                                    "command": "cellType",
                                    "type": "dropdown",
                                    "children": [
                                        "ribbonButtonButtonCellType",
                                        "checkboxCellType",
                                        "comboBoxCellType",
                                        "hyperlinkCellType",
                                        "rangeTemplateCellType",
                                        "separator",
                                        "checkboxListCellType",
                                        "radioListCellType",
                                        "buttonListCellType",
                                        "separator",
                                        "clearCellType"
                                    ]
                                },
                                {
                                    "command": "cellDropdowns",
                                    "type": "dropdown",
                                    "children": [
                                        "calculatorCellType",
                                        "colorPickerCellType",
                                        "dateTimePickerCellType",
                                        "listCellType",
                                        "monthPickerCellType",
                                        "sliderCellType",
                                        "timePickerCellType",
                                        "workflowList",
                                        "multiColumnPicker",
                                        "separator",
                                        "clearCellDropdown"
                                    ]
                                },
                                {
                                    "command": "conditionFormat",
                                    "visiblePriority": 4,
                                    "type": "dropdown",
                                    "children": [
                                        {
                                            "command": "highlightCellsRules",
                                            "type": "dropdown",
                                            "children": [
                                                "highlightCellsRulesGreaterThan",
                                                "highlightCellsRulesLessThan",
                                                "highlightCellsRulesBetween",
                                                "highlightCellsRulesEqualTo",
                                                "highlightCellsRulesContains",
                                                "highlightCellsRulesDateOccurring",
                                                "highlightCellsRulesDuplicateValues",
                                                "separator",
                                                "highlightCellsMoreRules"
                                            ]
                                        },
                                        {
                                            "command": "topBottomRules",
                                            "type": "dropdown",
                                            "children": [
                                                "topBottomRulesTop10",
                                                "topBottomRulesBottom10",
                                                "topBottomRulesAboveAverage",
                                                "topBottomRulesBelowAverage",
                                                "separator",
                                                "topBottomRulesMoreRules"
                                            ]
                                        },
                                        "separator",
                                        {
                                            "command": "dataBar",
                                            "type": "dropdown",
                                            "dropdownMaxWidth": 126,
                                            "children": [
                                                {
                                                    "command": "gradientFill",
                                                    "type": "group",
                                                    "children": [
                                                        "gradientFillBlueDataBar",
                                                        "gradientFillGreenDataBar",
                                                        "gradientFillRedDataBar",
                                                        "gradientFillOrangeDataBar",
                                                        "gradientFillLightBlueDataBar",
                                                        "gradientFillPurpleDataBar"
                                                    ]
                                                },
                                                {
                                                    "command": "solidFill",
                                                    "type": "group",
                                                    "children": [
                                                        "solidFillBlueDataBar",
                                                        "solidFillGreenDataBar",
                                                        "solidFillRedDataBar",
                                                        "solidFillOrangeDataBar",
                                                        "solidFillLightBlueDataBar",
                                                        "solidFillPurpleDataBar"
                                                    ]
                                                },
                                                "separator",
                                                "moreDataBarRules"
                                            ]
                                        },
                                        {
                                            "command": "colorScalesList",
                                            "type": "dropdown",
                                            "dropdownMaxWidth": 170,
                                            "children": [
                                                {
                                                    "command": "colorScalesList2",
                                                    "type": "group",
                                                    "children": [
                                                        "colorScaleGyr",
                                                        "colorScaleRyg",
                                                        "colorScaleGwr",
                                                        "colorScaleRwg",
                                                        "colorScaleBwr",
                                                        "colorScaleRwb",
                                                        "colorScaleWr",
                                                        "colorScaleRw",
                                                        "colorScaleGw",
                                                        "colorScaleWg",
                                                        "colorScaleGy",
                                                        "colorScaleYg"
                                                    ]
                                                },
                                                "separator",
                                                "moreColorScaleRules"
                                            ]
                                        },
                                        {
                                            "command": "iconSetList",
                                            "type": "dropdown",
                                            "dropdownMaxWidth": 260,
                                            "children": [
                                                {
                                                    "command": "directional",
                                                    "type": "group",
                                                    "children": [
                                                        "iconSetThreeArrowsColored",
                                                        "iconSetThreeArrowsGray",
                                                        "iconSet3Triangles",
                                                        "iconSetFourArrowsGray",
                                                        "iconSetFourArrowsColored",
                                                        "iconSetFiveArrowsGray",
                                                        "iconSetFiveArrowsColored"
                                                    ]
                                                },
                                                {
                                                    "command": "shapes",
                                                    "type": "group",
                                                    "children": [
                                                        "iconSetThreeTrafficLightsUnRimmed",
                                                        "iconSetThreeTrafficLightsRimmed",
                                                        "iconSetThreeSigns",
                                                        "iconSetFourTrafficLights",
                                                        "iconSetFourRedToBlack"
                                                    ]
                                                },
                                                {
                                                    "command": "indicators",
                                                    "type": "group",
                                                    "children": [
                                                        "iconSetThreeSymbolsCircled",
                                                        "iconSetThreeSymbolsUnCircled",
                                                        "iconSetThreeFlags"
                                                    ]
                                                },
                                                {
                                                    "command": "ratings",
                                                    "type": "group",
                                                    "children": [
                                                        "iconSetThreeStars",
                                                        "iconSetFourRatings",
                                                        "iconSetFiveQuarters",
                                                        "iconSetFiveRatings",
                                                        "iconSetFiveBoxes"
                                                    ]
                                                },
                                                "separator",
                                                "moreIconSetRules"
                                            ]
                                        },
                                        "separator",
                                        "conditionFormatNewRule",
                                        {
                                            "command": "clearRules",
                                            "type": "dropdown",
                                            "children": [
                                                "clearCellRules",
                                                "clearSheetRules"
                                            ]
                                        },
                                        "conditionFormatManageRule"
                                    ]
                                },
                                {
                                    "command": "cellStyles",
                                    "visiblePriority": 4,
                                    "type": "dropdown",
                                    "dropdownMaxWidth": 634,
                                    "children": [
                                        "cellStylesListContent",
                                        "separator",
                                        "newCellStyle",
                                        "separator",
                                        "manageCellState"
                                    ]
                                },
                                {
                                    "command": "formatTable2",
                                    "type": "dropdown",
                                    "visiblePriority": 4,
                                    "dropdownMaxWidth": 550,
                                    "children": [
                                        "formatTableListContent",
                                        "separator",
                                        "newTableStyle",
                                        "clearTableStyle"
                                    ]
                                },
                                {
                                    "command": "cellsInsert",
                                    "type": "dropdown",
                                    "visiblePriority": 2,
                                    "children": [
                                        "insertCells",
                                        "separator",
                                        "insertSheetRows",
                                        "insertSheetColumns",
                                        "separator",
                                        "insertSheet"
                                    ]
                                },
                                {
                                    "command": "cellsDelete",
                                    "type": "dropdown",
                                    "visiblePriority": 2,
                                    "children": [
                                        "deleteCells",
                                        "separator",
                                        "deleteSheetRows",
                                        "deleteSheetColumns",
                                        "separator",
                                        "deleteSheet"
                                    ]
                                },
                                {
                                    "command": "cellsFormat",
                                    "type": "dropdown",
                                    "visiblePriority": 4,
                                    "children": [
                                        "cellFormatRowHeight",
                                        "autoFitRowHeight",
                                        "defaultRowHeight",
                                        "separator",
                                        "cellFormatColumnWidth",
                                        "autoFitColumnWidth",
                                        "defaultColumnWidth",
                                        "separator",
                                        "hideRows",
                                        "hideColumns",
                                        "unHideRows",
                                        "unHideColumns",
                                        "separator",
                                        "headers",
                                        "separator",
                                        "cellFormatProtectSheet",
                                        "unProtectSheet",
                                        "lockCells",
                                        "unLockCells"
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
                                    "command": "editingAutoSum",
                                    "type": "dropdown",
                                    "visiblePriority": 9,
                                    "children": [
                                        "editingAutoSum",
                                        "average",
                                        "countNumbers",
                                        "max",
                                        "min"
                                    ]
                                },
                                {
                                    "command": "editingFillDown",
                                    "type": "dropdown",
                                    "children": [
                                        "down",
                                        "right",
                                        "up",
                                        "left",
                                        "series"
                                    ]
                                },
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
                                    "command": "editingSortFilter",
                                    "type": "dropdown",
                                    "visiblePriority": 6,
                                    "children": [
                                        "sortAZ",
                                        "sortZA",
                                        "customSortEditing",
                                        "setFilter",
                                        "clearFilter",
                                        "reapplyFilter"
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
                    },
                    {
                        "commandGroup": {
                            "children": [
                                "insertBarCode",
                                {
                                    "command": "sparklineGallery",
                                    "className": "sparklineGallery-dropdown-container",
                                    "type": "dropdown",
                                    "dropdownMaxWidth": 500,
                                    "children": [
                                        {
                                            "command": "lineSparklineGroup",
                                            "type": "group",
                                            "children": [
                                                "sparklinesLineSparkline",
                                                "sparklinesAreaSparkline"
                                            ]
                                        },
                                        {
                                            "command": "barSparklineGroup",
                                            "type": "group",
                                            "children": [
                                                "sparklinesColumnSparkline",
                                                "sparklinesWinLossSparkline",
                                                "sparklinesStackedSparkline",
                                                "sparklinesCascadeSparkline",
                                                "sparklinesParetoSparkline",
                                                "sparklinesHBarSparkline",
                                                "sparklinesVBarSparkline",
                                                "sparklinesHistogramSparkline"
                                            ]
                                        },
                                        {
                                            "command": "pieSparklineGroup",
                                            "type": "group",
                                            "children": [
                                                "sparklinesPieSparkline"
                                            ]
                                        },
                                        {
                                            "command": "scatterSparklineGroup",
                                            "type": "group",
                                            "children": [
                                                "sparklinesScatterSparkline",
                                                "sparklinesSpreadsSparkline"
                                            ]
                                        },
                                        {
                                            "command": "calendarSparklineGroup",
                                            "type": "group",
                                            "children": [
                                                "sparklinesMonthSparkline",
                                                "sparklinesYearSparkline"
                                            ]
                                        },
                                        {
                                            "command": "otherSparklineGroup",
                                            "type": "group",
                                            "children": [
                                                "sparklinesBoxPlotSparkline",
                                                "sparklinesBulletSparkline",
                                                "sparklinesVarianceSparkline",
                                                "sparklinesRangeBlockSparkline",
                                                "sparklinesGaugeKPISparkline",
                                                "sparklineImageSparkline"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "commandGroup": {
                            "commands": [
                                "insertPicture",
                                "insertShape",
                                "insertCameraShape",
                                "insertFormControlShape"
                            ]
                        }
                    },
                    {
                        "commandGroup": {
                            "commands": [
                                "insertHyperLink"
                            ]
                        }
                    },
                    {
                        "commandGroup": {
                            "commands": [
                                "InsertTextBox"
                            ]
                        }
                    }
                ],
                "visibleWhen": "!IsInTableSheetDesignMode"
            },
            {
                "id": "pageLayout",
                "text": "页面布局",
                "overflow": true,
                "buttonGroups": [
                    {
                        "buttonGroupName": "主题",
                        "commandGroup": {
                            "children": [
                                "ThemeSetting",
                                {
                                    "direction": "vertical",
                                    "children": [
                                        "ThemeColors",
                                        "ThemeFonts"
                                    ],
                                    "visiblePriority": 10
                                }
                            ]
                        }
                    },
                    {
                        "overflow": true,
                        "buttonGroupName": "页面设置",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "margins",
                                    "type": "dropdown",
                                    "visiblePriority": 1,
                                    "children": [
                                        "marginSelector",
                                        "separator",
                                        "customMargins"
                                    ]
                                },
                                {
                                    "command": "orientation",
                                    "visiblePriority": 2,
                                    "type": "dropdown",
                                    "children": [
                                        "orientationPortrait",
                                        "orientationLandscape"
                                    ]
                                },
                                {
                                    "command": "paperSize",
                                    "visiblePriority": 2,
                                    "children": [
                                        "paperKindSelector"
                                    ],
                                    "type": "dropdown"
                                },
                                {
                                    "command": "printArea",
                                    "type": "dropdown",
                                    "visiblePriority": 2,
                                    "children": [
                                        "setPrintArea",
                                        "clearPrintArea"
                                    ]
                                },
                                {
                                    "command": "breaks",
                                    "type": "dropdown",
                                    "visiblePriority": 2,
                                    "children": [
                                        "insertPageBreak",
                                        "removePageBreak",
                                        "separator",
                                        "resetAllPageBreaks"
                                    ]
                                },
                                "background",
                                "deleteBackground",
                                "printTitles"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "调整为合适大小",
                        "commandGroup": {
                            "children": [
                                {
                                    "children": [
                                        "fitPageWidth"
                                    ]
                                },
                                {
                                    "children": [
                                        "fitPageTall"
                                    ]
                                },
                                "scaleToFitScaleForToolbar"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "工作表选项",
                        "commandGroup": {
                            "children": [
                                {
                                    "direction": "horizontal",
                                    "children": [
                                        {
                                            "commands": [
                                                "pageLayoutGridlinesText",
                                                "pageLayoutViewGridlines",
                                                "pageLayoutPrintGridlines"
                                            ]
                                        },
                                        {
                                            "commands": [
                                                "separator"
                                            ]
                                        },
                                        {
                                            "commands": [
                                                "pageLayoutHeadingsText",
                                                "pageLayoutViewHeadings",
                                                "pageLayoutPrintHeadings"
                                            ]
                                        },
                                        {
                                            "commands": [
                                                "separator"
                                            ]
                                        },
                                        {
                                            "commands": [
                                                "printLineVisible"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "visibleWhen": "AllowPrintCurrentSheet && !IsInTableSheetDesignMode"
            },
            {
                "id": "formulas",
                "text": "公式",
                "buttonGroups": [
                    {
                        "buttonGroupName": "函数库",
                        "commandGroup": {
                            "commands": [
                                "insertFunction"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "函数库",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "formulaAutoSum",
                                    "type": "dropdown",
                                    "children": [
                                        "editingAutoSum",
                                        "average",
                                        "countNumbers",
                                        "max",
                                        "min"
                                    ]
                                },
                                "formulaFinancial",
                                "logicalFormula",
                                "logicalFormulaAllowDynamicArray",
                                "formulaText",
                                "formulaTextAllowDynamicArray",
                                "formulaDateTime",
                                "formulaLookupReference",
                                "formulaLookupReferenceAllowDynamicArray",
                                "formulaMathTrig",
                                "formulaMathTrigAllowDynamicArray",
                                "moreFunctions"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "定义的名称",
                        "commandGroup": {
                            "commands": [
                                "nameManager"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "公式审核",
                        "commandGroup": {
                            "direction": "vertical",
                            "commands": [
                                "showFormulas",
                                "showFormulaEditorPanel"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "计算",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "calculationOptionsPanel",
                                    "type": "dropdown",
                                    "children": [
                                        "calculationOptionAutomatic",
                                        "calculationOptionManual"
                                    ]
                                },
                                {
                                    "direction": "vertical",
                                    "commands": [
                                        "calculateNow",
                                        "calculateSheet"
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "!TableSheetActive && !DataManagerActive && !IsInTableSheetDesignMode"
            },
            {
                "id": "data",
                "text": "数据",
                "overflow": true,
                "buttonGroups": [
                    {
                        "commandGroup": {
                            "children": [
                                "templateDesignMode",
                                "separator",
                                "loadSchema",
                                "saveSchema",
                                "clearBindingPath",
                                "separator",
                                "autoGenerateLabel",
                                "editLinks"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "排序和筛选",
                        "commandGroup": {
                            "children": [
                                {
                                    "visiblePriority": 4,
                                    "commands": [
                                        "sortAZData",
                                        "sortZAData"
                                    ]
                                },
                                {
                                    "visiblePriority": 3,
                                    "commands": [
                                        "customSortData"
                                    ]
                                },
                                {
                                    "type": "separator"
                                },
                                {
                                    "commands": [
                                        "setFilterData"
                                    ]
                                },
                                {
                                    "visiblePriority": 2,
                                    "commands": [
                                        "clearFilterData",
                                        "reapplyFilterData"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "数据工具",
                        "commandGroup": {
                            "children": [
                                {
                                    "commands": [
                                        "textToColumn"
                                    ]
                                },
                                {
                                    "command": "dataValidation",
                                    "type": "dropdown",
                                    "visiblePriority": 1,
                                    "children": [
                                        "dropdownDataValidation",
                                        "circleInvalidDataCommand",
                                        "clearInvalidCircles"
                                    ]
                                },
                                {
                                    "commands": [
                                        "removeDuplicates"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "分级显示",
                        "indicator": "indicatorOutline",
                        "commandGroup": {
                            "children": [
                                {
                                    "children": [
                                        {
                                            "command": "group",
                                            "type": "dropdown",
                                            "visiblePriority": 5,
                                            "children": [
                                                "innerGroup",
                                                "autoOutline"
                                            ]
                                        },
                                        {
                                            "command": "ungroup",
                                            "type": "dropdown",
                                            "children": [
                                                "innerUngroup",
                                                "clearOutline"
                                            ]
                                        },
                                        "subtotal"
                                    ]
                                },
                                {
                                    "type": "separator"
                                },
                                "showDetail",
                                "hideDetail"
                            ]
                        }
                    }
                ],
                "visibleWhen": "!IsInTableSheetDesignMode"
            },
            {
                "id": "view",
                "text": "视图",
                "overflow": true,
                "buttonGroups": [
                    {
                        "buttonGroupName": "显示/隐藏",
                        "commandGroup": {
                            "commands": [
                                "zoom",
                                "zoomDefault",
                                "zoomSelection"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "显示比例",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "viewportFreezePanes",
                                    "type": "dropdown",
                                    "visiblePriority": 2,
                                    "children": [
                                        "freezePanes",
                                        "freezeTopRow",
                                        "freezeFirstColumn",
                                        "freezeBottomRow",
                                        "freezeLastColumn"
                                    ]
                                },
                                "unfreezePanes"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "窗口",
                        "commandGroup": {
                            "children": [
                                "showHideRowHeader",
                                "showHideColumnHeader",
                                {
                                    "type": "separator"
                                },
                                "showHideVGridLine",
                                "showHideHGridLine",
                                {
                                    "type": "separator"
                                },
                                "showHideTabStrip",
                                "showHideNewTab"
                            ]
                        }
                    }
                ],
                "visibleWhen": "!TableSheetActive && !DataManagerActive && !IsInTableSheetDesignMode"
            },
            {
                "id": "settings",
                "text": "设置",
                "overflow": true,
                "buttonGroups": [
                    {
                        "buttonGroupName": "Spread 设置",
                        "commandGroup": {
                            "commands": [
                                "spreadSettingGeneral",
                                "spreadSettingScrollBar",
                                "spreadSettingCalculation",
                                "spreadSettingTabStrip"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "工作表设置",
                        "commandGroup": {
                            "commands": [
                                "sheetSettingGeneral",
                                "sheetSettingGridLine",
                                "sheetSettingHeaders"
                            ]
                        }
                    }
                ],
                "visibleWhen": "!DataManagerActive && !IsInTableSheetDesignMode"
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
                                "tableName",
                                "resizeTable"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "工具",
                        "commandGroup": {
                            "commands": [
                                "convertToRange",
                                "tableAllowAutoExpand",
                                "insertSlicer"
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
                    },
                    {
                        "buttonGroupName": "表式样",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "formatTable2",
                                    "type": "dropdown",
                                    "dropdownMaxWidth": 550,
                                    "children": [
                                        "formatTableListContent",
                                        "separator",
                                        "newTableStyle",
                                        "clearTableStyle"
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
                                },
                                {
                                    "command": "quickLayout",
                                    "type": "dropdown",
                                    "children": [
                                        "quickLayoutListContent"
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
                        "buttonGroupName": "位置",
                        "commandGroup": {
                            "commands": [
                                "moveChart"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "辅助功能",
                        "commandGroup": {
                            "commands": [
                                "chartAltText"
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
            },
            {
                "id": "pictureDesign",
                "text": "图片格式",
                "buttonGroups": [
                    {
                        "commandGroup": {
                            "commands": [
                                "pictureAltText"
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "pictureSelected && !IsProtected || pictureSelected && AllowEditObject"
            },
            {
                "id": "shapeDesign",
                "text": "形状格式",
                "buttonGroups": [
                    {
                        "buttonGroupName": "插入形状",
                        "commandGroup": {
                            "commands": [
                                "changeShape"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "改变形状样式",
                        "commandGroup": {
                            "commands": [
                                "changeShapeStyle"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "辅助功能",
                        "commandGroup": {
                            "commands": [
                                "shapeAltText"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "旋转",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "shapeRotate",
                                    "type": "dropdown",
                                    "children": [
                                        "shapeRightRotate90",
                                        "shapeLeftRotate"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "组合",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "shapeCommandGroup",
                                    "type": "dropdown",
                                    "children": [
                                        "shapeGroup",
                                        "shapeUnGroup"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "对齐",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "shapeCommandAlign",
                                    "type": "dropdown",
                                    "children": [
                                        "shapeAlignLeft",
                                        "shapeAlignCenter",
                                        "shapeAlignRight",
                                        "separator",
                                        "shapeAlignTop",
                                        "shapeAlignMiddle",
                                        "shapeAlignBottom",
                                        "separator",
                                        "shapeHorizontalDistribute",
                                        "shapeShapeVerticalDistribute",
                                        "separator",
                                        "shapeSnapToGrid",
                                        "shapeSnapToShape"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "排列",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "bringShapeForwardGroup",
                                    "type": "dropdown",
                                    "children": [
                                        "bringShapeForward",
                                        "bringShapeToFront"
                                    ]
                                },
                                {
                                    "command": "sendShapeBackwardGroup",
                                    "type": "dropdown",
                                    "children": [
                                        "sendShapeBackward",
                                        "sendShapeToBack"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "大小",
                        "class": "gc-ribbon-panelgroup-shapeSize",
                        "commandGroup": {
                            "commands": [
                                "shapeSizeHeight",
                                "shapeSizeWidth"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "选择窗格",
                        "commandGroup": {
                            "commands": [
                                "selectionPaneButton"
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
                "visibleWhen": "!DataManagerActive && PureShapeAndFormControlSelected && !IsProtected || PureShapeAndFormControlSelected && AllowEditObject"
            },
            {
                "id": "pictureShapeDesign",
                "text": "图片格式",
                "buttonGroups": [
                    {
                        "buttonGroupName": "调整",
                        "commandGroup": {
                            "commands": [
                                "changePictureCorrections",
                                "changePictureColor",
                                "changePictureTransparency",
                                "changePicture",
                                "resetPicture"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "辅助功能",
                        "commandGroup": {
                            "commands": [
                                "shapeAltText"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "旋转",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "shapeRotate",
                                    "type": "dropdown",
                                    "children": [
                                        "shapeRightRotate90",
                                        "shapeLeftRotate"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "组合",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "shapeCommandGroup",
                                    "type": "dropdown",
                                    "children": [
                                        "shapeGroup",
                                        "shapeUnGroup"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "对齐",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "shapeCommandAlign",
                                    "type": "dropdown",
                                    "children": [
                                        "shapeAlignLeft",
                                        "shapeAlignCenter",
                                        "shapeAlignRight",
                                        "separator",
                                        "shapeAlignTop",
                                        "shapeAlignMiddle",
                                        "shapeAlignBottom",
                                        "separator",
                                        "shapeHorizontalDistribute",
                                        "shapeShapeVerticalDistribute",
                                        "separator",
                                        "shapeSnapToGrid",
                                        "shapeSnapToShape"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "排列",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "bringShapeForwardGroup",
                                    "type": "dropdown",
                                    "children": [
                                        "bringShapeForward",
                                        "bringShapeToFront"
                                    ]
                                },
                                {
                                    "command": "sendShapeBackwardGroup",
                                    "type": "dropdown",
                                    "children": [
                                        "sendShapeBackward",
                                        "sendShapeToBack"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "裁剪",
                        "commandGroup": {
                            "commands": [
                                "pictureShapeCrop"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "大小",
                        "class": "gc-ribbon-panelgroup-shapeSize",
                        "commandGroup": {
                            "commands": [
                                "shapeSizeHeight",
                                "shapeSizeWidth"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "选择窗格",
                        "commandGroup": {
                            "commands": [
                                "selectionPaneButton"
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
                "visibleWhen": "!DataManagerActive && PictureShapeSelected && !IsProtected || PictureShapeSelected && AllowEditObject"
            },
            {
                "id": "slicerDesign",
                "text": "切片器",
                "buttonGroups": [
                    {
                        "buttonGroupName": "切片器",
                        "class": "slicer_panel",
                        "commandGroup": {
                            "children": [
                                {
                                    "type": "group",
                                    "commands": [
                                        "captionName",
                                        "slicerSetting",
                                        "slicerReportConnections"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "切片器样式",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "slicerFormat",
                                    "type": "dropdown",
                                    "children": [
                                        "slicerStyleListContent",
                                        "newSlicerStyle"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "按钮",
                        "class": "slicer_buttons",
                        "commandGroup": {
                            "commands": [
                                "columnCount",
                                "itemHeight"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "大小",
                        "class": "slicer_size",
                        "commandGroup": {
                            "commands": [
                                "slicerHeight",
                                "slicerWidth"
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "SlicerSelected && !IsProtected || SlicerSelected && AllowEditObject"
            },
            {
                "id": "timelineDesign",
                "text": "时间线",
                "buttonGroups": [
                    {
                        "buttonGroupName": "日程表",
                        "class": "slicer_panel",
                        "commandGroup": {
                            "children": [
                                {
                                    "type": "group",
                                    "commands": [
                                        "timelineCaptionName",
                                        "slicerReportConnections"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "日程表样式",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "slicerFormat",
                                    "type": "dropdown",
                                    "children": [
                                        "timelineStyleListContent",
                                        "newTimelineStyle"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "大小",
                        "class": "slicer_size",
                        "commandGroup": {
                            "commands": [
                                "slicerHeight",
                                "slicerWidth"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "显示",
                        "class": "slicer_show",
                        "commandGroup": {
                            "commands": [
                                "timelineShowHeader",
                                "timelineShowSelectionLabel",
                                "timelineShowScrollbar",
                                "timelineShowTimeLevel"
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "TimelineSelected && !IsProtected || TimelineSelected && AllowEditObject"
            },
            {
                "id": "formulaSparkLineDesign",
                "text": "迷你图",
                "buttonGroups": [
                    {
                        "commandGroup": {
                            "commands": [
                                "formulaSparklineSetting"
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "FormulaSparklineSelected"
            },
            {
                "id": "sparkLineDesign",
                "text": "迷你图",
                "buttonGroups": [
                    {
                        "buttonGroupName": "类型",
                        "commandGroup": {
                            "commands": [
                                "lineSparkline",
                                "columnSparkline",
                                "winLossSparkline"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "显示",
                        "commandGroup": {
                            "commands": [
                                "showHighpoint",
                                "showLowPoint",
                                "showNegativePoint",
                                "showFirstPoint",
                                "showLastPoint",
                                "showMarkers"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "样式",
                        "commandGroup": {
                            "commands": [
                                "sparklineColor",
                                "sparklineMarkerColor",
                                "sparklineWeight"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "组合",
                        "commandGroup": {
                            "children": [
                                "sparklineGroup",
                                "sparklineUnGroup",
                                {
                                    "command": "clearSparkline",
                                    "type": "dropdown",
                                    "children": [
                                        "clearSelectedSparkline",
                                        "clearSelectedSparklineGroups"
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "SparklineSelected"
            },
            {
                "id": "barcodeDesignId",
                "text": "条形码设计",
                "buttonGroups": [
                    {
                        "commandGroup": {
                            "commands": [
                                "barCodeSetting"
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "BarCodeSelected"
            },
            {
                "id": "pivotTableAnalyze",
                "text": "数据透视表分析",
                "buttonGroups": [
                    {
                        "buttonGroupName": "数据透视表",
                        "commandGroup": {
                            "children": [
                                "pivotTableName",
                                {
                                    "command": "pivotTableOptions",
                                    "type": "dropdown",
                                    "children": [
                                        "pivotTableOptionsSub",
                                        "pivotTableShowReportFilterPages"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "活动字段",
                        "commandGroup": {
                            "commands": [
                                "pivotTableActiveField",
                                "pivotTableFieldSetting",
                                "pivotTableExpandField",
                                "pivotTableCollapseField"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "组合",
                        "commandGroup": {
                            "commands": [
                                "pivotTableGroupSelection",
                                "pivotTableUnGroup",
                                "pivotTableGroupField"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "插入切片器",
                        "commandGroup": {
                            "commands": [
                                "insertPivotSlicer",
                                "insertPivotTimeline",
                                "pivotFilterConnections"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "数据",
                        "commandGroup": {
                            "children": [
                                "pivotRibbonRefresh"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "操作",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "pivotTableClearList",
                                    "type": "dropdown",
                                    "children": [
                                        "pivotTableClearAll",
                                        "pivotTableClearFilters"
                                    ]
                                },
                                "pivotTableMove"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "计算",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "pivotTableFieldsItemsSets",
                                    "type": "dropdown",
                                    "children": [
                                        "pivotTableCalculatedField",
                                        "PivotTableCalculatedItem",
                                        "PivotTableSolveOrder",
                                        "pivotTableListFormulas"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "显示",
                        "commandGroup": {
                            "commands": [
                                "pivotTableFieldList",
                                "pivotTableButtons",
                                "pivotTableShowHeaders"
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "PivotTableSelected"
            },
            {
                "id": "pivotTableDesign",
                "text": "设计",
                "buttonGroups": [
                    {
                        "buttonGroupName": "布局",
                        "commandGroup": {
                            "children": [
                                {
                                    "children": [
                                        {
                                            "command": "pivotTableSubtotals",
                                            "type": "dropdown",
                                            "children": [
                                                "pivotTableSubtotalsNotShow",
                                                "pivotTableSubtotalsAtBottom",
                                                "pivotTableSubtotalsAtTop"
                                            ]
                                        },
                                        {
                                            "command": "pivotTableGrandTotals",
                                            "type": "dropdown",
                                            "children": [
                                                "pivotTableGrandTotalsOffRowColumn",
                                                "pivotTableGrandTotalsOnRowColumn",
                                                "pivotTableGrandTotalsOnRowOnly",
                                                "pivotTableGrandTotalsOnColumnOnly"
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "separator"
                                },
                                {
                                    "children": [
                                        {
                                            "command": "pivotTableReportLayout",
                                            "type": "dropdown",
                                            "children": [
                                                "pivotTableReportLayoutShowInCompact",
                                                "pivotTableReportLayoutShowInOutline",
                                                "pivotTableReportLayoutShowInTabular",
                                                "separator",
                                                "pivotTableReportLayoutRepeatAllItemLabels",
                                                "pivotTableReportLayoutNotRepeatAllItemLabels"
                                            ]
                                        },
                                        {
                                            "command": "pivotTableBlankRows",
                                            "type": "dropdown",
                                            "children": [
                                                "pivotTableInsertBlankRows",
                                                "pivotTableRemoveBlankRows"
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "数据透视表样式选项",
                        "commandGroup": {
                            "commands": [
                                "pivotTableRowHeaders",
                                "pivotTableColumnHeaders",
                                "pivotTableBandedRows",
                                "pivotTableBandedColumns"
                            ]
                        }
                    },
                    {
                        "buttonGroupName": "数据透视表样式",
                        "commandGroup": {
                            "children": [
                                {
                                    "command": "pivotTableStyle",
                                    "type": "dropdown",
                                    "dropdownMaxWidth": 550,
                                    "children": [
                                        "pivotTableStyleListContent",
                                        "separator",
                                        "newPivotTableStyle",
                                        "clearPivotTableStyle"
                                    ]
                                }
                            ]
                        }
                    }
                ],
                "overflow": true,
                "visibleWhen": "PivotTableSelected"
            }
        ],
        "ribbonHeight": 50
    },
    "contextMenu": [
        "contextMenuCut",
        "contextMenuCopy",
        "contextMenuPaste",
        "designerPasteAll",
        "pasteFormula",
        "designerPasteValues",
        "designerPasteFormatting",
        "pasteValuesFormatting",
        "pasteFormulaFormatting",
        "gc.spread.contextMenu.pasteValues",
        "floatingObjectCut",
        "floatingObjectCopy",
        "contextMenuCutShapes",
        "contextMenuCopyShapes",
        "resetChartColor",
        "changeChartTypeDialog",
        "selectChartDataDialog",
        "moveChartDialog",
        "formatChart",
        "insertDialog",
        "deleteDialog",
        "gc.spread.contextMenu.insertColumns",
        "gc.spread.contextMenu.deleteColumns",
        "gc.spread.contextMenu.insertRows",
        "gc.spread.contextMenu.deleteRows",
        "tableInsert",
        "tableDelete",
        "gc.spread.contextMenu.clearContents",
        "gc.spread.contextMenu.rowHeaderinsertCopiedCells",
        "gc.spread.contextMenu.rowHeaderinsertCutCells",
        "gc.spread.contextMenu.colHeaderinsertCopiedCells",
        "gc.spread.contextMenu.colHeaderinsertCutCells",
        "insertCopiedCells",
        "insertCutCells",
        "gc.spread.contextMenu.insertSheet",
        "gc.spread.contextMenu.deleteSheet",
        "sheetTabMoveOrCopy",
        "gc.spread.contextMenu.changeSheetTabPosition",
        "unprotectSheet",
        "protectSheet",
        "gc.spread.contextMenu.filter",
        "sort",
        "table",
        "gc.spread.contextMenu.insertComment",
        "gc.spread.contextMenu.editComment",
        "gc.spread.contextMenu.deleteComment",
        "gc.spread.contextMenu.toggleComment",
        "formatComment",
        "formatCells",
        "editCellType",
        "editCellDropdowns",
        "link",
        "editHyperlink",
        "openHyperlink",
        "removeHyperlink",
        "removeHyperlinks",
        "richText",
        "defineName",
        "cellTag",
        "defaultValue",
        "cellAltText",
        "rowTag",
        "colTag",
        "columnWidth",
        "rowHeight",
        "gc.spread.contextMenu.hideColumns",
        "gc.spread.contextMenu.hideRows",
        "gc.spread.contextMenu.unhideColumns",
        "gc.spread.contextMenu.unhideRows",
        "columnHeaders",
        "contextMenuOutlineColumn",
        "rowHeaders",
        "showTabColor",
        "gc.spread.contextMenu.hideSheet",
        "contextMenuUnhideSheet",
        "sheetTag",
        "slicerPasteOptions",
        "gc.spread.contextMenu.pasteAll",
        "gc.spread.contextMenu.slicerSortAscend",
        "gc.spread.contextMenu.slicerSortDescend",
        "gc.spread.contextMenu.removeSlicer",
        "slicerProperty",
        "contextMenuSlicerSetting",
        "groupShape",
        "ctxCropPicture",
        "ctxBringShapeForwardGroup",
        "ctxSendShapeBackwardGroup",
        "formatShapes",
        "designerMoreFunctions",
        "shapeLink",
        "editShapeHyperlink",
        "openShapeHyperlink",
        "removeShapeHyperlink",
        "editShapeText",
        "pivotSort",
        "pivotTableAutoFitColumn",
        "pivotTableContextMenuRefresh",
        "removeField",
        "removePivotGrandTotal",
        "updatePivotValueFieldCmd",
        "pivotTableShowValueAs",
        "pivotTableFilter",
        "pivotExpandOrCollapse",
        "openPivotGroupDialog",
        "pivotTableContextMenuUnGroup",
        "pivotShowDetails",
        "openValueFieldSettingDialogCmd",
        "pivotTableContextMenuOptions",
        "showFieldList",
        "hideFieldList"
    ],
    "fileMenu": "fileMenuButton",
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
    ]
};
export default coworkConfig;