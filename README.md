# vx_chart

vx_chart example repository

### Included Files

| File             | Description                             |
| ---------------- |-----------------------------------------|
| CubeDemo.html    | Framework example file                  |
| vx_enum.js       | Event record enumerated definitions     |

### Live Demo

* [Full orderbook chart](https://code.vertex-analytics.com/vx-chart-1.0.0/CubeDemo.html)
* [Trades only chart](https://code.vertex-analytics.com/vx-chart-1.0.0/CubeDemo.html?chart=trades)

### Installation

The vx_chart framework is hosted at https://code.vertex-analytics.com.

Implementation files are hosted on the client's site.

## Walk Through

#### 1. Import dependencies ####
 
```html
<!-- include third party dependencies -->
<script src="https://code.vertex-analytics.com/_third/monaco-editor-0.18.1/package/min/vs/loader.js"></script>
<link rel="stylesheet" type="text/css" href="https://code.vertex-analytics.com/_third/tooltipster-master/dist/css/tooltipster.bundle.min.css"/>
<script type="text/javascript" src="https://code.vertex-analytics.com/_third/tooltipster-master/dist/js/tooltipster.bundle.min.js"></script>

<!-- include third party fonts -->
@import url(https://fonts.googleapis.com/css?family=Roboto:400);
@import url(https://fonts.googleapis.com/css?family=Roboto:500);
@import url(https://fonts.googleapis.com/css?family=Roboto+Mono);
``` 
#### 3. Import the framework in the body tag ####
   
```html
<!-- include vx.chart api files in order -->
<script src="https://code.vertex-analytics.com/vx-chart-1.0.0/vx-enum.js"></script>
<script src="https://code.vertex-analytics.com/vx-chart-1.0.0/vx-util.js"></script>
<script src="https://code.vertex-analytics.com/vx-chart-1.0.0/vx-main.js"></script>
<script src="https://code.vertex-analytics.com/vx-chart-1.0.0/vx-draw.js"></script>
<script src="https://code.vertex-analytics.com/vx-chart-1.0.0/vx-cube.js"></script>
<script src="https://code.vertex-analytics.com/vx-chart-1.0.0/vx-core.js"></script>	
```
   
#### 5. Implement an initialization function. ####

Call vX.onReady with an initialization function. This function is called when the framework has finished loading.
   
```javascript
// called after the api is Ready
function onReady ()
{
}

// Assign the onReady callback 
vX.onReady(onReady);
```
  
#### 6. Derive a class from vX.cube. ####

```javascript
class BookChart extends vX.cube {

   constructor (pConfiguration)
   {
      super(pConfiguration);
   }

   //Called by the framework if an exception occurred during creation of the chart.
   //pError = critical error description object.
   onError (pError)
   {		
      console.log ("onError Called");
      console.log (pError);
   }

   //Called by the framework before data is read with a calls to onRead.
   //pInfo = initialization object.
   onOpen (pInfo)
   {
      //console.log ("onOpen Called");
      //console.log (pInfo);
   }

   //Called by the framework to read each record of data.
   //pItem = event item number, 0 to rows-1.
   onRead (pItem)
   {
      let	tEvnt	=	{};   // Add FID record
      this.CubeEvnt(tEvnt);
   }

   //Called by the framework after all records have been read.
   //pInfo =  status of the book build and any errors encountered object.
   onShut (pInfo)
   {
      console.log ("onShut Called");
      console.log (pInfo);
   }

}
```
   
#### 7. Create the vX.cube derived class with configuration parameters. #### 

```javascript
gCube = new BookChart({
   //email : "registered_email",
   //password : "registered_password",
   rows : 1234,
   title : "Title of the chart",
   tickSize : 0.25,
   displayType : 1,
   displayTypeEx : 1
   });		
```
   #### Configuration Parameters

| Parameter            | Description                             |
| -------------------- |-----------------------------------------|
| email                | Registered email                        |
| password             | Registered password                     |
| rows                 | Number of event records in the chart    |
| tickSize             | Smallest price resolution               |
| title                | Title of the chart                      |
| displayType          | Primary price format of the chart       |
| displayTypeEx        | Secondary price format of the chart     |
     
   ##### Authentication
   - The framework can be used with the supplied demo data without registration.
   - For user defined data, a user must be registered with [Vertex-Analytics](https://code.vertex-analytics.com).
   - Contact [Vertex-Analytics](https://code.vertex-analytics.com) for a version configured for client distribution.
   
   ##### Price Format
   - The framework's price format uses the CME FIX display format.
   - For decimal prices, use displayType=0. The resolution of the digits will be automatically be calculated based on the ticksize.
   - For fractional prices, please consult [CME Fractional Pricing](https://www.cmegroup.com/confluence/display/EPICSANDBOX/Fractional+Pricing)
  
#### 8. Supply data to the framework. #### 

 * Data is supplied to the framework as separate tick event records with a call to this.CubeEvnt();
   
## Anatomy of a Event Message

##### General Notes

 * The tick event records are defined as javascript object of FID/Value pairs.
 * Many FID's values are supplied as numbers. See vx_enum.js for the enumerated definitions.
 * For a complete list of available FIDs consult vx_enum.js/vX.Fids.
 * Only a minimal number of FIDs are required to generate the chart.
 * Contact Vertex-Analytics for any required custom FID processing.
 * Each column of the chart is a summation of events with the same time-stamp. 
 * Multiple events can share the same time-stamp.
 * All time-stamps are supplied to the framework in Bigint nanoseconds.
 * If nanoseconds time-stamps are unavailable, upscale the time-stamp to nanoseconds.
 * Each event object most contain header FIDs.
 * Additional FIDS are defined per event type.

 ##### Required Header FIDS

| Name            | Value                             |
| -------------------- |-----------------------------------------|
| header.unionID       | Record type: see vx_enum.js/vX.UnionID |
| header.time          | Nanosecond time-stamp |

##### Required tradeSummary FIDS

| Name            | Value                             |
| -------------------- |-----------------------------------------|
| tradeSummary.aggressor       | Trade aggressor: see vx_enum.js/vX.Aggressor  |
| tradeSummary.isImplied          | Implied trade: 0=false,1=true |
| tradeSummary.isSnapshot          | Pre-market snapshot: 0=false,1=true |
| tradeSummary.price          | Trade price |
| tradeSummary.quantity          | Trade quantity |

##### Required TradeMatch FIDS

| Name            | Value                             |
| -------------------- |-----------------------------------------|
| tradeMatch.isAggressor       | Trade aggressor: see vx_enum.js/vX.Aggressor  |
| tradeMatch.orderID          | Bigint OrderID |
| tradeMatch.price          | Trade match price  |
| tradeMatch.quantity          | Trade match quantity |

##### Required OrderBook FIDS

| Name            | Value                             |
| -------------------- |-----------------------------------------|
| orderBook.action       | Book update action: see vx_enum.js/vX.BookAction  |
| orderBook.type          | Book update type: see vx_enum.js/vX.BookType |
| orderBook.isSnapshot           | Pre-market snapshot: 0=false,1=true |
| orderBook.orderID          | Bigint OrderID |
| orderBook.price          | Order  price |
| orderBook.quantity          | Order quantity |

## Using the Framework's Sample Book Data

The framework's provides a single day of sample book data that can be used to investiagate the event FID format.

1. Create a vX.demo class with configuration parameters.

```javascript
gDemo = new vX.demo({
   file		: "ZSN3_20230502",
   onLoaded	: onLoaded
   });
```
   #### Configuration Parameters

| Parameter            | Description                             |
| -------------------- |-----------------------------------------|
| file                 | File name                               |
| onLoaded             | Function called after the data is loaded |

 * Use vX.demo.DemoRows() to return the number of event records in the data stream.
 * Use vX.demo.DemoRead() to read an enumerated event record.
 
## Dependencies  
CubeChart uses several third-party libraries and tools to work with JavaScript and CSS.

* [Monaco-Editor](https://github.com/microsoft/monaco-editor) - The Monaco Editor is the fully featured code editor.
* [Tooltipster](https://github.com/calebjacob/tooltipster) - A flexible and extensible jQuery plugin for modern tooltips.
* [jQuery](https://github.com/jquery/jquery) - JavaScript Library.
