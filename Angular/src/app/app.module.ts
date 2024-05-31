import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxAccordionModule, DxAccordionTypes } from 'devextreme-angular/ui/accordion';
import { DxActionSheetModule, DxActionSheetTypes } from 'devextreme-angular/ui/action-sheet';
import { DxAutocompleteModule, DxAutocompleteTypes } from 'devextreme-angular/ui/autocomplete';
import { DxBarGaugeModule, DxBarGaugeTypes } from 'devextreme-angular/ui/bar-gauge';
import { DxBoxModule, DxBoxTypes } from 'devextreme-angular/ui/box';
import { DxButtonModule, DxButtonTypes } from 'devextreme-angular/ui/button';
import { DxBulletModule, DxBulletTypes } from 'devextreme-angular/ui/bullet';
import { DxButtonGroupModule, DxButtonGroupTypes } from 'devextreme-angular/ui/button-group';
import { DxCalendarModule, DxCalendarTypes } from 'devextreme-angular/ui/calendar';
import { DxChartModule, DxChartTypes } from 'devextreme-angular/ui/chart';
import { DxCheckBoxModule, DxCheckBoxTypes } from 'devextreme-angular/ui/check-box';
import { DxCircularGaugeModule, DxCircularGaugeTypes } from 'devextreme-angular/ui/circular-gauge';
import { DxColorBoxModule, DxColorBoxTypes } from 'devextreme-angular/ui/color-box';
import { DxContextMenuModule, DxContextMenuTypes } from 'devextreme-angular/ui/context-menu';
import { DxDataGridModule, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { DxDateBoxModule, DxDateBoxTypes } from 'devextreme-angular/ui/date-box';
import { DxDateRangeBoxModule, DxDateRangeBoxTypes } from 'devextreme-angular/ui/date-range-box';
import { DxDeferRenderingModule, DxDeferRenderingTypes } from 'devextreme-angular/ui/defer-rendering';
import { DxDiagramModule, DxDiagramTypes } from 'devextreme-angular/ui/diagram';
import { DxDraggableModule, DxDraggableTypes } from 'devextreme-angular/ui/draggable';
import { DxDrawerModule, DxDrawerTypes } from 'devextreme-angular/ui/drawer';
import { DxDropDownBoxModule, DxDropDownBoxTypes } from 'devextreme-angular/ui/drop-down-box';
import { DxDropDownButtonModule, DxDropDownButtonTypes } from 'devextreme-angular/ui/drop-down-button';
import { DxFileManagerModule, DxFileManagerTypes } from 'devextreme-angular/ui/file-manager';
import { DxFileUploaderModule, DxFileUploaderTypes } from 'devextreme-angular/ui/file-uploader';
import { DxFilterBuilderModule, DxFilterBuilderTypes } from 'devextreme-angular/ui/filter-builder';
import { DxFormModule, DxFormTypes } from 'devextreme-angular/ui/form';
import { DxFunnelModule, DxFunnelTypes } from 'devextreme-angular/ui/funnel';
import { DxGalleryModule, DxGalleryTypes } from 'devextreme-angular/ui/gallery';
import { DxGanttModule, DxGanttTypes } from 'devextreme-angular/ui/gantt';
import { DxHtmlEditorModule, DxHtmlEditorTypes } from 'devextreme-angular/ui/html-editor';
import { DxLinearGaugeModule, DxLinearGaugeTypes } from 'devextreme-angular/ui/linear-gauge';
import { DxListModule, DxListTypes } from 'devextreme-angular/ui/list';
import { DxLoadIndicatorModule, DxLoadIndicatorTypes } from 'devextreme-angular/ui/load-indicator';
import { DxLoadPanelModule, DxLoadPanelTypes } from 'devextreme-angular/ui/load-panel';
import { DxLookupModule, DxLookupTypes } from 'devextreme-angular/ui/lookup';
import { DxMapModule, DxMapTypes } from 'devextreme-angular/ui/map';
import { DxMenuModule, DxMenuTypes } from 'devextreme-angular/ui/menu';
import { DxMultiViewModule, DxMultiViewTypes } from 'devextreme-angular/ui/multi-view';
import { DxNumberBoxModule, DxNumberBoxTypes } from 'devextreme-angular/ui/number-box';
import { DxPieChartModule, DxPieChartTypes } from 'devextreme-angular/ui/pie-chart';
import { DxPivotGridModule, DxPivotGridTypes } from 'devextreme-angular/ui/pivot-grid';
import { DxPivotGridFieldChooserModule, DxPivotGridFieldChooserTypes } from 'devextreme-angular/ui/pivot-grid-field-chooser';
import { DxPolarChartModule, DxPolarChartTypes } from 'devextreme-angular/ui/polar-chart';
import { DxPopoverModule, DxPopoverTypes } from 'devextreme-angular/ui/popover';
import { DxPopupModule, DxPopupTypes } from 'devextreme-angular/ui/popup';
import { DxProgressBarModule, DxProgressBarTypes } from 'devextreme-angular/ui/progress-bar';
import { DxRadioGroupModule, DxRadioGroupTypes } from 'devextreme-angular/ui/radio-group';
import { DxRangeSelectorModule, DxRangeSelectorTypes } from 'devextreme-angular/ui/range-selector';
import { DxRangeSliderModule, DxRangeSliderTypes } from 'devextreme-angular/ui/range-slider';
import { DxResizableModule, DxResizableTypes } from 'devextreme-angular/ui/resizable';
import { DxResponsiveBoxModule, DxResponsiveBoxTypes } from 'devextreme-angular/ui/responsive-box';
import { DxSankeyModule, DxSankeyTypes } from 'devextreme-angular/ui/sankey';
import { DxSchedulerModule, DxSchedulerTypes } from 'devextreme-angular/ui/scheduler';
import { DxScrollViewModule, DxScrollViewTypes } from 'devextreme-angular/ui/scroll-view';
import { DxSelectBoxModule, DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import { DxSliderModule, DxSliderTypes } from 'devextreme-angular/ui/slider';
import { DxSortableModule, DxSortableTypes } from 'devextreme-angular/ui/sortable';
import { DxSparklineModule, DxSparklineTypes } from 'devextreme-angular/ui/sparkline';
import { DxSplitterModule, DxSplitterTypes } from 'devextreme-angular/ui/splitter';
import { DxSwitchModule, DxSwitchTypes } from 'devextreme-angular/ui/switch';
import { DxTabPanelModule, DxTabPanelTypes } from 'devextreme-angular/ui/tab-panel';
import { DxTabsModule, DxTabsTypes } from 'devextreme-angular/ui/tabs';
import { DxTagBoxModule, DxTagBoxTypes } from 'devextreme-angular/ui/tag-box';
import { DxTextAreaModule, DxTextAreaTypes } from 'devextreme-angular/ui/text-area';
import { DxTextBoxModule, DxTextBoxTypes } from 'devextreme-angular/ui/text-box';
import { DxTileViewModule, DxTileViewTypes } from 'devextreme-angular/ui/tile-view';
import { DxToastModule, DxToastTypes } from 'devextreme-angular/ui/toast';
import { DxToolbarModule, DxToolbarTypes } from 'devextreme-angular/ui/toolbar';
import { DxTooltipModule, DxTooltipTypes } from 'devextreme-angular/ui/tooltip';
import { DxTreeListModule, DxTreeListTypes } from 'devextreme-angular/ui/tree-list';
import { DxTreeMapModule, DxTreeMapTypes } from 'devextreme-angular/ui/tree-map';
import { DxTreeViewModule, DxTreeViewTypes } from 'devextreme-angular/ui/tree-view';
import { DxVectorMapModule, DxVectorMapTypes } from 'devextreme-angular/ui/vector-map';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxAccordionModule, 
    DxActionSheetModule, 
    DxAutocompleteModule, 
    DxBarGaugeModule, 
    DxBoxModule, 
    DxButtonModule, 
    DxBulletModule, 
    DxButtonGroupModule, 
    DxCalendarModule, 
    DxChartModule, 
    DxCheckBoxModule, 
    DxCircularGaugeModule, 
    DxColorBoxModule, 
    DxContextMenuModule, 
    DxDataGridModule, 
    DxDateBoxModule, 
    DxDateRangeBoxModule, 
    DxDeferRenderingModule, 
    DxDiagramModule, 
    DxDraggableModule, 
    DxDrawerModule, 
    DxDropDownBoxModule, 
    DxDropDownButtonModule, 
    DxFileManagerModule, 
    DxFileUploaderModule, 
    DxFilterBuilderModule, 
    DxFormModule, 
    DxFunnelModule, 
    DxGalleryModule, 
    DxGanttModule, 
    DxHtmlEditorModule, 
    DxLinearGaugeModule, 
    DxListModule, 
    DxLoadIndicatorModule, 
    DxLoadPanelModule, 
    DxLookupModule, 
    DxMapModule, 
    DxMenuModule, 
    DxMultiViewModule, 
    DxNumberBoxModule, 
    DxPieChartModule, 
    DxPivotGridModule, 
    DxPivotGridFieldChooserModule, 
    DxPolarChartModule, 
    DxPopoverModule, 
    DxPopupModule, 
    DxProgressBarModule, 
    DxRadioGroupModule, 
    DxRangeSelectorModule, 
    DxRangeSliderModule, 
    DxResizableModule, 
    DxResponsiveBoxModule, 
    DxSankeyModule, 
    DxSchedulerModule, 
    DxScrollViewModule, 
    DxSelectBoxModule, 
    DxSliderModule, 
    DxSortableModule, 
    DxSparklineModule, 
    DxSplitterModule, 
    DxSwitchModule, 
    DxTabPanelModule, 
    DxTabsModule, 
    DxTagBoxModule, 
    DxTextAreaModule, 
    DxTextBoxModule, 
    DxTileViewModule, 
    DxToastModule, 
    DxToolbarModule, 
    DxTooltipModule, 
    DxTreeListModule, 
    DxTreeMapModule, 
    DxTreeViewModule, 
    DxVectorMapModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
