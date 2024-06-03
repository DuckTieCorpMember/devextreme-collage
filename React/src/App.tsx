import React, { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';

import { Accordion } from 'devextreme-react/accordion';
import { ActionSheet } from 'devextreme-react/action-sheet';
import { Autocomplete } from 'devextreme-react/autocomplete';
import { BarGauge } from 'devextreme-react/bar-gauge';
import { Box } from 'devextreme-react/box';
import { Button } from 'devextreme-react/button';
import { Bullet } from 'devextreme-react/bullet';
import { ButtonGroup } from 'devextreme-react/button-group';
import { Calendar } from 'devextreme-react/calendar';
import { Chart } from 'devextreme-react/chart';
import { CheckBox } from 'devextreme-react/check-box';
import { CircularGauge } from 'devextreme-react/circular-gauge';
import { ColorBox } from 'devextreme-react/color-box';
import { ContextMenu } from 'devextreme-react/context-menu';
import { DataGrid } from 'devextreme-react/data-grid';
import { DateBox } from 'devextreme-react/date-box';
import { DateRangeBox } from 'devextreme-react/date-range-box';
import { DeferRendering } from 'devextreme-react/defer-rendering';
import { Diagram } from 'devextreme-react/diagram';
import { Draggable } from 'devextreme-react/draggable';
import { Drawer } from 'devextreme-react/drawer';
import { DropDownBox } from 'devextreme-react/drop-down-box';
import { DropDownButton } from 'devextreme-react/drop-down-button';
import { FileManager } from 'devextreme-react/file-manager';
import { FileUploader } from 'devextreme-react/file-uploader';
import { FilterBuilder } from 'devextreme-react/filter-builder';
import {SpeedDialAction} from "devextreme-react/speed-dial-action"
import { Form } from 'devextreme-react/form';
import { Funnel } from 'devextreme-react/funnel';
import { Gallery } from 'devextreme-react/gallery';
import { Gantt } from 'devextreme-react/gantt';
import { HtmlEditor } from 'devextreme-react/html-editor';
import { LinearGauge } from 'devextreme-react/linear-gauge';
import { List } from 'devextreme-react/list';
import { LoadIndicator } from 'devextreme-react/load-indicator';
import { LoadPanel } from 'devextreme-react/load-panel';
import { Lookup } from 'devextreme-react/lookup';
import { Map } from 'devextreme-react/map';
import { Menu } from 'devextreme-react/menu';
import { MultiView } from 'devextreme-react/multi-view';
import { NumberBox } from 'devextreme-react/number-box';
import { PieChart } from 'devextreme-react/pie-chart';
import { PivotGrid } from 'devextreme-react/pivot-grid';
import { PivotGridFieldChooser } from 'devextreme-react/pivot-grid-field-chooser';
import { PolarChart } from 'devextreme-react/polar-chart';
import { Popover } from 'devextreme-react/popover';
import { Popup } from 'devextreme-react/popup';
import { ProgressBar } from 'devextreme-react/progress-bar';
import { RadioGroup } from 'devextreme-react/radio-group';
import { RangeSelector } from 'devextreme-react/range-selector';
import { RangeSlider } from 'devextreme-react/range-slider';
import { Resizable } from 'devextreme-react/resizable';
import { ResponsiveBox } from 'devextreme-react/responsive-box';
import { Sankey } from 'devextreme-react/sankey';
import { Scheduler } from 'devextreme-react/scheduler';
import { ScrollView } from 'devextreme-react/scroll-view';
import { SelectBox } from 'devextreme-react/select-box';
import { Slider } from 'devextreme-react/slider';
import { Sortable } from 'devextreme-react/sortable';
import { Sparkline } from 'devextreme-react/sparkline';
import { Splitter } from 'devextreme-react/splitter';
import { Switch } from 'devextreme-react/switch';
import { TabPanel } from 'devextreme-react/tab-panel';
import { Tabs } from 'devextreme-react/tabs';
import { TagBox } from 'devextreme-react/tag-box';
import { TextArea } from 'devextreme-react/text-area';
import { TextBox } from 'devextreme-react/text-box';
import { TileView } from 'devextreme-react/tile-view';
import { Toast } from 'devextreme-react/toast';
import { Toolbar } from 'devextreme-react/toolbar';
import { Tooltip } from 'devextreme-react/tooltip';
import { TreeList } from 'devextreme-react/tree-list';
import { TreeMap } from 'devextreme-react/tree-map';
import { TreeView } from 'devextreme-react/tree-view';
import { VectorMap } from 'devextreme-react/vector-map';

function App(): JSX.Element {
  var [count, setCount] = useState<number>(0);
  const clickHandler = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);
  return (
    <div className="main">
      <Button text={`Click count: ${count}`} onClick={clickHandler} />
    </div>
  );
}

export default App;
