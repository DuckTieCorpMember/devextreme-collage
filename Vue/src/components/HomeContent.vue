<script setup lang="ts">
import { computed, ref } from "vue";

import "devextreme/dist/css/dx.material.blue.light.compact.css";


import { DxAccordion } from 'devextreme-vue/accordion';
import { DxActionSheet } from 'devextreme-vue/action-sheet';
import { DxAutocomplete } from 'devextreme-vue/autocomplete';
import { DxBarGauge } from 'devextreme-vue/bar-gauge';
import { DxBox } from 'devextreme-vue/box';
import { DxButton } from 'devextreme-vue/button';
import { DxBullet } from 'devextreme-vue/bullet';
import { DxButtonGroup } from 'devextreme-vue/button-group';
import { DxCalendar } from 'devextreme-vue/calendar';
import { DxChart } from 'devextreme-vue/chart';
import { DxCheckBox } from 'devextreme-vue/check-box';
import { DxCircularGauge } from 'devextreme-vue/circular-gauge';
import { DxColorBox } from 'devextreme-vue/color-box';
import { DxContextMenu } from 'devextreme-vue/context-menu';
import { DxDataGrid } from 'devextreme-vue/data-grid';
import { DxDateBox } from 'devextreme-vue/date-box';
import { DxDateRangeBox } from 'devextreme-vue/date-range-box';
import { DxDeferRendering } from 'devextreme-vue/defer-rendering';
import { DxDiagram } from 'devextreme-vue/diagram';
import { DxDraggable } from 'devextreme-vue/draggable';
import { DxDrawer } from 'devextreme-vue/drawer';
import { DxDropDownBox } from 'devextreme-vue/drop-down-box';
import { DxDropDownButton } from 'devextreme-vue/drop-down-button';
import { DxFileManager } from 'devextreme-vue/file-manager';
import { DxFileUploader } from 'devextreme-vue/file-uploader';
import { DxFilterBuilder } from 'devextreme-vue/filter-builder';
import { DxForm } from 'devextreme-vue/form';
import { DxFunnel } from 'devextreme-vue/funnel';
import { DxGallery } from 'devextreme-vue/gallery';
import { DxGantt } from 'devextreme-vue/gantt';
import { DxHtmlEditor } from 'devextreme-vue/html-editor';
import { DxLinearGauge } from 'devextreme-vue/linear-gauge';
import { DxList } from 'devextreme-vue/list';
import { DxLoadIndicator } from 'devextreme-vue/load-indicator';
import { DxLoadPanel } from 'devextreme-vue/load-panel';
import { DxLookup } from 'devextreme-vue/lookup';
import { DxMap } from 'devextreme-vue/map';
import { DxMenu } from 'devextreme-vue/menu';
import { DxMultiView } from 'devextreme-vue/multi-view';
import { DxNumberBox } from 'devextreme-vue/number-box';
import { DxPieChart } from 'devextreme-vue/pie-chart';
import { DxPivotGrid } from 'devextreme-vue/pivot-grid';
import { DxPivotGridFieldChooser } from 'devextreme-vue/pivot-grid-field-chooser';
import { DxPolarChart } from 'devextreme-vue/polar-chart';
import { DxPopover } from 'devextreme-vue/popover';
import { DxPopup } from 'devextreme-vue/popup';
import { DxProgressBar } from 'devextreme-vue/progress-bar';
import { DxRadioGroup } from 'devextreme-vue/radio-group';
import { DxRangeSelector } from 'devextreme-vue/range-selector';
import { DxRangeSlider } from 'devextreme-vue/range-slider';
import { DxResizable } from 'devextreme-vue/resizable';
import { DxResponsiveBox } from 'devextreme-vue/responsive-box';
import { DxSankey } from 'devextreme-vue/sankey';
import { DxScheduler } from 'devextreme-vue/scheduler';
import { DxScrollView } from 'devextreme-vue/scroll-view';
import { DxSelectBox } from 'devextreme-vue/select-box';
import { DxSlider } from 'devextreme-vue/slider';
import { DxSortable } from 'devextreme-vue/sortable';
import { DxSparkline } from 'devextreme-vue/sparkline';
import { DxSplitter } from 'devextreme-vue/splitter';
import { DxSwitch } from 'devextreme-vue/switch';
import { DxTabPanel } from 'devextreme-vue/tab-panel';
import { DxTabs } from 'devextreme-vue/tabs';
import { DxTagBox } from 'devextreme-vue/tag-box';
import { DxTextArea } from 'devextreme-vue/text-area';
import { DxTextBox } from 'devextreme-vue/text-box';
import { DxTileView } from 'devextreme-vue/tile-view';
import { DxToast } from 'devextreme-vue/toast';
import { DxToolbar } from 'devextreme-vue/toolbar';
import { DxTooltip } from 'devextreme-vue/tooltip';
import { DxTreeList } from 'devextreme-vue/tree-list';
import { DxTreeMap } from 'devextreme-vue/tree-map';
import { DxTreeView } from 'devextreme-vue/tree-view';
import { DxVectorMap } from 'devextreme-vue/vector-map';

const props = defineProps({
  text: String,
});
const count = ref(0);
const buttonText = computed<String>(
  () => `Click ${props.text}: ${count.value}`
);
function clickHandler() {
  count.value += 1;
}
</script>
<template>
  <div>
    <DxButton :text="buttonText" @click="clickHandler"></DxButton>
  </div>
</template>
