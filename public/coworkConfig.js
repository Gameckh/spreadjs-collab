const coworkConfig = {
  "ribbon": [
    {
      "id": "home",
      "text": "开始",
      "buttonGroups": [
        {
          "label": "剪贴板",
          "thumbnailClass": "ribbon-thumbnail-clipboard",
          "commandGroup": {
            "children": [
              {
                "command": "pasteAll",
                "type": "dropdown",
                "children": [
                  "pasteAll",
                  "pasteFormulas",
                  "pasteValues",
                  "pasteFormatting",
                  "pasteValuesAndFormatting",
                  "pasteFormulasAndFormatting"
                ]
              },
              {
                "direction": "vertical",
                "commands": [
                  "cut",
                  "copy",
                  "formatPainter"
                ]
              }
            ]
          }
        },
        {
          "label": "字体",
          "indicator": "indicatorFonts",
          "thumbnailClass": "ribbon-thumbnail-fonts",
          "commandGroup": {
            "direction": "vertical",
            "children": [
              {
                "commands": [
                  "fontFamily",
                  "fontSize",
                  "increaseFontsize",
                  "decreaseFontsize"
                ]
              },
              {
                "children": [
                  "fontWeight",
                  "fontItalic",
                  "fontUnderline",
                  "fontDoubleUnderline",
                  "separator",
                  {
                    "command": "border",
                    "type": "dropdown",
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
                  "separator",
                  "backColor",
                  "foreColor"
                ]
              }
            ]
          }
        },
        {
          "label": "对齐方式",
          "indicator": "indicatorAlignment",
          "thumbnailClass": "ribbon-thumbnail-alignment",
          "commandGroup": {
            "children": [
              {
                "direction": "vertical",
                "children": [
                  {
                    "children": [
                      "topAlign",
                      "middleAlign",
                      "bottomAlign",
                      "separator",
                      {
                        "command": "orientationList",
                        "type": "dropdown",
                        "children": [
                          "angleCounterclockwise",
                          "angleClockwise",
                          "verticalText",
                          "rotateTextUp",
                          "rotateTextDown",
                          "separator",
                          "formatCellAlignment"
                        ]
                      }
                    ]
                  },
                  {
                    "commands": [
                      "leftAlign",
                      "centerAlign",
                      "rightAlign",
                      "separator",
                      "decreaseIndent",
                      "increaseIndent"
                    ]
                  }
                ]
              },
              {
                "type": "separator"
              },
              {
                "direction": "vertical",
                "children": [
                  {
                    "commands": [
                      "wrapText"
                    ]
                  },
                  {
                    "children": [
                      {
                        "command": "mergeCenter",
                        "type": "dropdown",
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
            ]
          }
        },
        {
          "label": "数字",
          "indicator": "indicatorNumbers",
          "thumbnailClass": "ribbon-thumbnail-numbers",
          "commandGroup": {
            "direction": "vertical",
            "children": [
              {
                "command": "ribbonNumberFormat",
                "type": "dropdown",
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
              {
                "commands": [
                  "formatPercentage",
                  "formatComma",
                  "separator",
                  "increaseDecimal",
                  "decreaseDecimal"
                ]
              }
            ]
          }
        },
        {
          "label": "编辑",
          "thumbnailClass": "ribbon-thumbnail-editing",
          "commandGroup": {
            "children": [
              {
                "direction": "vertical",
                "children": [
                  {
                    "command": "editingAutoSum",
                    "type": "dropdown",
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
                    "children": [
                      "clearAll",
                      "clearFormat",
                      "clearContent",
                      "clearComments"
                    ]
                  }
                ]
              },
              {
                "command": "editingFind",
                "type": "dropdown",
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
      "visibleWhen": "!TableSheetActive && !DataManagerActive && !ContainMultipleHeaderCells || IsInTableSheetDesignMode"
    },
    {
      "id": "insert",
      "text": "插入",
      "buttonGroups": [
        {
          "label": "表格",
          "thumbnailClass": "ribbon-thumbnail-table",
          "commandGroup": {
            "commands": [
              "insertTable"
            ]
          }
        },
        {
          "label": "图表",
          "thumbnailClass": "ribbon-thumbnail-chart",
          "commandGroup": {
            "direction": "horizontal",
            "children": [
              "insertChart",
              {
                "direction": "vertical",
                "children": [
                  {
                    "direction": "horizontal",
                    "children": [
                      {
                        "command": "columnOrBarChartPreview",
                        "type": "dropdown",
                        "children": [
                          {
                            "command": "columnChartGroup",
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
                        "children": [
                          {
                            "command": "comboChartGroup",
                            "type": "group",
                            "children": [
                              "comboChartColumnAndLine",
                              "comboChartColumnAndArea",
                              "comboChartColumnAndLineAxis"
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
              },
              "insertBarCode",
              {
                "command": "sparklineGallery",
                "className": "sparklineGallery-dropdown-container",
                "type": "dropdown",
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
        }
      ],
      "visibleWhen": "!IsInTableSheetDesignMode"
    },
    {
      "id": "tableDesign",
      "text": "表设计",
      "buttonGroups": [
        {
          "label": "属性",
          "thumbnailClass": "ribbon-thumbnail-properties",
          "commandGroup": {
            "children": [
              {
                "direction": "vertical",
                "commands": [
                  "tableName",
                  "resizeTable"
                ]
              }
            ]
          }
        },
        {
          "label": "工具",
          "thumbnailClass": "ribbon-thumbnail-tools",
          "commandGroup": {
            "children": [
              {
                "direction": "vertical",
                "commands": [
                  "convertToRange",
                  "tableAllowAutoExpand"
                ]
              },
              {
                "commands": [
                  "insertSlicer"
                ]
              }
            ]
          }
        },
        {
          "label": "表式样选项",
          "thumbnailClass": "ribbon-thumbnail-tablestyleoptions",
          "commandGroup": {
            "children": [
              {
                "direction": "vertical",
                "commands": [
                  "tableStyleHeaderRow",
                  "tableStyleTotalRow",
                  "tableStyleBandedRows"
                ]
              },
              {
                "direction": "vertical",
                "commands": [
                  "tableStyleFirstColumn",
                  "tableStyleLastColumn",
                  "tableStyleBandedColumns"
                ]
              },
              {
                "direction": "vertical",
                "commands": [
                  "tableStyleResizeHandler",
                  "tableStyleFilterButton",
                  "tableStyleTotalRowList"
                ]
              }
            ]
          }
        },
        {
          "label": "表式样",
          "thumbnailClass": "ribbon-thumbnail-tablestyles",
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
          "label": "图表布局",
          "thumbnailClass": "ribbon-thumbnail-chartlayouts",
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
                "dropdownMaxWidth": 190,
                "children": [
                  "quickLayoutListContent"
                ]
              }
            ]
          }
        },
        {
          "label": "图表样式",
          "thumbnailClass": "ribbon-thumbnail-chartstyles",
          "commandGroup": {
            "commands": [
              "changeColors",
              "chartStyle"
            ]
          }
        },
        {
          "label": "数据",
          "thumbnailClass": "ribbon-thumbnail-chartdata",
          "commandGroup": {
            "commands": [
              "switchRowColumn",
              "selectData"
            ]
          }
        },
        {
          "label": "类型",
          "thumbnailClass": "ribbon-thumbnail-charttype",
          "commandGroup": {
            "commands": [
              "changeChartType"
            ]
          }
        },
        {
          "label": "位置",
          "thumbnailClass": "ribbon-thumbnail-chartlocation",
          "commandGroup": {
            "commands": [
              "moveChart"
            ]
          }
        },
        {
          "label": "辅助功能",
          "thumbnailClass": "ribbon-thumbnail-chart-alt-text",
          "commandGroup": {
            "commands": [
              "chartAltText"
            ]
          }
        },
        {
          "label": "设置格式",
          "thumbnailClass": "ribbon-thumbnail-formatPane",
          "commandGroup": {
            "commands": [
              "FormatPane"
            ]
          }
        }
      ],
      "visibleWhen": "singleChartSelected"
    },
  ],
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
    "separator",
    "showTabColor",
    "gc.spread.contextMenu.hideSheet",
    "contextMenuUnhideSheet",
    "sheetTag",
    "separator",
    "slicerPasteOptions",
    "gc.spread.contextMenu.pasteAll",
    "gc.spread.contextMenu.slicerSortAscend",
    "gc.spread.contextMenu.slicerSortDescend",
    "gc.spread.contextMenu.removeSlicer",
    "slicerProperty",
    "contextMenuSlicerSetting",
    "separator",
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
    "hideFieldList",
    "separator",
    "separator",
    "separator",
    "separator"
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
};

export default coworkConfig;