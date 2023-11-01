

//-----------------------------------------------------------------------------------------------------------=
var vX = {
	
	//-----------------------------------------------------------------------------------------------------------=
	ErrorText		:
	[
		"None",
		"Order new, duplicate orderID",
		"Order delete, orderID not found",
		"Order delete, quantity and number of orders mismatched",
		"Order modification, orderID not found",
		"Book delete, orderID not found",
		"Book delete, order and quantity not zero",
		"Book modification, price not found",
		"Error 8",
		"Error 9",
		"Error 10",
		"Error 11",
		"Error 12",
		"Error 13",
		"Error 14",
		"Error 15"
	],
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	Fids		:
	[

		"header.instrumentID",
		"header.sequence",
		"header.time",
		"header.channelSequence",
		"header.instrumentSequence",
		"header.unionID",
		"header.eventIndicator",
		"header.flag",
		"header.baseExponent",

		"transactionMarker.type",

		"channelReset.type",

		"tradeSummary.price",
		"tradeSummary.quantity",
		"tradeSummary.matches",
		"tradeSummary.aggressor",
		"tradeSummary.isImplied",
		"tradeSummary.isSnapshot",
		"tradeSummary.volume",

		"tradeMatch.isAggressor",
		"tradeMatch.number",
		"tradeMatch.price",
		"tradeMatch.orderID",
		"tradeMatch.auxillaryID",
		"tradeMatch.quantity",
		"tradeMatch.flags",

		"volumeUpdate.volume",	
		"volumeUpdate.vwap",

		"bookLevel.price",
		"bookLevel.quantity",
		"bookLevel.orders",
		"bookLevel.impliedQuantity",
		"bookLevel.impliedOrders",
		"bookLevel.level",
		"bookLevel.action",
		"bookLevel.type",
		"bookLevel.isEndEvent",

		"orderBook.orderID",
		"orderBook.auxilaryID",
		"orderBook.priorityID",
		"orderBook.price",
		"orderBook.previousID",
		"orderBook.quantity",
		"orderBook.action",
		"orderBook.type",
		"orderBook.isSnapshot",

		"securityStatus.group",
		"securityStatus.asset",
		"securityStatus.sessionDate",
		"securityStatus.type",	
		"securityStatus.haltReason",
		"securityStatus.event",	

		"dailyStatistics.instrumentID",
		"dailyStatistics.price",
		"dailyStatistics.size",
		"dailyStatistics.sessionDate",
		"dailyStatistics.settleType",
		"dailyStatistics.type",	

		"sessionStatistics.instrumentID", 
		"sessionStatistics.price",
		"sessionStatistics.stateType",
		"sessionStatistics.action",
		"sessionStatistics.type",
		"sessionStatistics.size",

		"limitsBanding.highLimit",
		"limitsBanding.lowLimit",
		"limitsBanding.maxVariation",

		"clearingPrice.price",
		"clearingPrice.quantity"	
	],
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	UnionID				:
	{
		NotSet						: 255,
		NotMapped					: 250,
		TradeSummary				: 0,
		TradeMatch					: 1,
		VolumeUpdate				: 2,
		BookLevel					: 3,
		OrderBook					: 4,
		SecurityStatus				: 5,
		DailyStatistics				: 6,
		SessionStatistics			: 7,
		LimitsBanding				: 8,
		ChannelReset				: 9,
		TransactionMarker			: 10,
		Test						: 11,
		ClearingPrice				: 12,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.NotMapped					: return "NotMapped";
				case this.TradeSummary				: return "TradeSummary";
				case this.TradeMatch				: return "TradeMatch";
				case this.VolumeUpdate				: return "VolumeUpdate";
				case this.BookLevel					: return "BookLevel";
				case this.OrderBook					: return "OrderBook";
				case this.SecurityStatus			: return "SecurityStatus";
				case this.DailyStatistics			: return "DailyStatistics";
				case this.SessionStatistics			: return "SessionStatistics";
				case this.LimitsBanding				: return "LimitsBanding";
				case this.ChannelReset				: return "ChannelReset";
				case this.TransactionMarker			: return "TransactionMarker";
				case this.Test						: return "Test";
				case this.ClearingPrice				: return "ClearingPrice";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	OrdStatus	:	
	{
		NEW						:	 '0',
		PARTIALLY_FILLED		:	 '1',
		FILLED					:	 '2',
		DONE_FOR_DAY			:	 '3',
		CANCELED				:	 '4',
		REPLACED				:	 '5',
		PENDING_CANCEL			:	 '6',
		STOPPED					:	 '7',
		REJECTED				:	 '8',
		SUSPENDED				:	 '9',
		PENDING_NEW				:	 'A',
		CALCULATED				:	 'B',
		EXPIRED					:	 'C',
		ACCEPTED_FOR_BIDDING    :	 'D',
		PENDING_REPLACE			:	 'E',

		name (pType)
		{
			if (pType==this.NEW)					return "NEW";
			if (pType==this.PARTIALLY_FILLED)		return "PARTIALLY_FILLED";
			if (pType==this.FILLED)					return "FILLED";
			if (pType==this.DONE_FOR_DAY)			return "DONE_FOR_DAY";
			if (pType==this.CANCELED)				return "CANCELED";
			if (pType==this.REPLACED)				return "REPLACED";
			if (pType==this.PENDING_CANCEL)			return "PENDING_CANCEL";
			if (pType==this.STOPPED)				return "STOPPED";

			if (pType==this.REJECTED)				return "REJECTED";
			if (pType==this.SUSPENDED)				return "SUSPENDED";
			if (pType==this.PENDING_NEW)			return "PENDING_NEW";
			if (pType==this.CALCULATED)				return "CALCULATED";
			if (pType==this.EXPIRED)				return "EXPIRED";
			if (pType==this.ACCEPTED_FOR_BIDDING)	return "ACCEPTED_FOR_BIDDING";
			if (pType==this.PENDING_REPLACE)		return "PENDING_REPLACE";

			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	PRICE_NULL_32		:	2147483647,
	PRICE_NULL_64		:	9223372036854775807n,
	sGroupSettleID		:	4294967293,
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	TimeFormat	:	
	{
		NotSet					:	-1,
		Nanoseconds				:	0,
		Microseconds			:	1,
		Milliseconds			:	2,
		Seconds					:	3,
		Minutes					:	4,
		Hours					:	5,

		name (pType)
		{
			switch (pType)	{
				case this.NotSet					: return "None";
				case this.Nanoseconds				: return "Nanoseconds";
				case this.Microseconds				: return "Microseconds";
				case this.Seconds					: return "Seconds";
				case this.Minutes					: return "Minutes";
				case this.Hours						: return "Hours";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	Import	:	
	{
		TXT						: 0,
		JSON					: 1,
		CSV						: 2,
		JS						: 3,
		
		name (pType)	
		{
			switch (pType)	{
				case this.TXT						: return "TXT";
				case this.JSON						: return "JSON";
				case this.CSV						: return "CSV";
				case this.JS						: return "JS";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	Format	:	
	{
		Number					: 0,
		Bigint					: 1,
		Boolean					: 2,
		String					: 3,
		Time					: 4,
		Symbol					: 5,
		Date					: 6,
		OrderID					: 7,
		Sequence				: 8,
		Color					: 9,
		Price					: 10,
		Delta					: 11,

		name (pType)
		{
			switch (pType)	{
				case this.Number					: return "Number";
				case this.Bigint					: return "Bigint";
				case this.Boolean					: return "Boolean";
				case this.String					: return "String";
				case this.Time						: return "Time";
				case this.Symbol					: return "Symbol";
				case this.Date						: return "Date";
				case this.OrderID					: return "OrderID";
				case this.Sequence					: return "Sequence";
				case this.Color						: return "Color";
				case this.Price						: return "Price";
				case this.Delta						: return "Delta";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	Session	:	
	{
		Current					: 0,
		Previous				: 1,

		name (pType)	
		{
			switch (pType)	{
				case this.Current					: return "Current";
				case this.Previous					: return "Previous";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	Trigger	:	
	{
		IcebergOrders			: 1,
		TradeSweeps				: 2,
		StopOrders				: 4,
		Trades					: 8,
		Books					: 16,

		name (pType)	
		{
			let	tName	=	"";

			if (pType & this.IcebergOrders)	tName	+=	 (tName=="") ? "IcebergOrders" : "|IcebergOrders";
			if (pType & this.TradeSweeps)	tName	+=	 (tName=="") ? "TradeSweeps" : "|TradeSweeps";
			if (pType & this.StopOrders)	tName	+=	 (tName=="") ? "StopOrders" : "|StopOrders";
			if (pType & this.Trades)		tName	+=	 (tName=="") ? "Trades" : "|Trades";;
			if (pType & this.Books)			tName	+=	 (tName=="") ? "Books" : "|Books";
			
			return tName;

			//switch (pType)	{
			//	case this.IcebergOrders				: return "IcebergOrders";
			//	case this.TradeSweeps				: return "TradeSweeps";
			//	case this.StopOrders				: return "StopOrders";
			//	case this.Trades					: return "Trades";
			//	case this.Books						: return "Books";
			//	}
			//return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	Align	:
	{
		Default					: 0,
		Center					: 1,
		Left					: 2,
		Right					: 3,

		name (pType)	
		{
			switch (pType)	{
				case this.Default					: return "Default";
				case this.Center					: return "Center";
				case this.Left						: return "Left";
				case this.Right						: return "Right";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	Aggressor	:	
	{
		NoAggressor					: 0,
		Buy							: 1,
		Sell						: 2,

		name (pType)	
		{
			switch (pType)	{
				case this.NoAggressor				: return "NoAggressor";
				case this.Buy						: return "Buy";
				case this.Sell						: return "Sell";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	HaltReason	:
	{
		NotSet						: 255,
		GroupSchedule				: 0,
		SurveillanceIntervention	: 1,
		MarketEvent					: 2,
		InstrumentActivation		: 3,
		InstrumentExpiration		: 4,
		Unknown						: 5,
	    RecoveryInProcess			: 6,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.GroupSchedule				: return "GroupSchedule";
				case this.SurveillanceIntervention	: return "SurveillanceIntervention";
				case this.MarketEvent				: return "MarketEvent";
				case this.InstrumentActivation		: return "InstrumentActivation";
				case this.InstrumentExpiration		: return "InstrumentExpiration";
				case this.Unknown					: return "Unknown";
				case this.RecoveryInProcess			: return "RecoveryInProcess";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	SecurityType	:
	{
		NotSet						: 0,
		TradingHalt					: 2,
		Close						: 4,
		NewPriceIndication			: 15,
		ReadyToTrade				: 17,
		NotAvailableForTrading		: 18,
		UnknownorInvalid			: 20,
		PreOpen						: 21,
		PreCross					: 24,
		Cross						: 25,
		PostClose					: 26,
		NoChange					: 103,
		PreClose					: 150,
		Restricted					: 200,
		Freeze						: 201,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.TradingHalt				: return "TradingHalt";
				case this.Close						: return "Close";
				case this.NewPriceIndication		: return "NewPriceIndication";
				case this.ReadyToTrade				: return "ReadyToTrade";
				case this.NotAvailableForTrading	: return "NotAvailableForTrading";
				case this.UnknownorInvalid			: return "UnknownorInvalid";
				case this.PreOpen					: return "PreOpen";
				case this.PreCross					: return "PreCross";
				case this.Cross						: return "Cross";
				case this.PostClose					: return "PostClose";
				case this.NoChange					: return "NoChange";
				case this.PreClose					: return "PreClose";
				case this.Restricted				: return "Restricted";
				case this.Freeze					: return "Freeze";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=
	
	//-----------------------------------------------------------------------------------------------------------=
	SecurityEvent	:
	{
		NoEvent						: 0,
		NoCancel					: 1,
		ResetStatistics				: 4,
		ImpliedMatchingON			: 5,
		ImpliedMatchingOFF			: 6,

		name (pType)	
		{
			switch (pType)	{
				case this.NoEvent					: return "NoEvent";
				case this.NoCancel					: return "NoCancel";
				case this.ResetStatistics			: return "ResetStatistics";
				case this.ImpliedMatchingON			: return "ImpliedMatchingON";
				case this.ImpliedMatchingOFF		: return "ImpliedMatchingOFF";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=
	
	//-----------------------------------------------------------------------------------------------------------=
	BookType	:
	{
		NotSet						: 85,
		Bid							: 66,
		Ask							: 83,
		ImpliedBid					: 98,
		ImpliedAsk					: 115,
		BookReset					: 82,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.Bid						: return "Bid";
				case this.Ask						: return "Ask";
				case this.ImpliedBid				: return "ImpliedBid";
				case this.ImpliedAsk				: return "ImpliedAsk";
				case this.BookReset					: return "BookReset";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=
	
	//-----------------------------------------------------------------------------------------------------------=
	DailyStatisticsType	:
	{
		SettlementPrice				: 54,
		ClearedVolume				: 66,
		OpenInterest				: 67,
		FixingPrice					: 87,

		name (pType)	
		{
			switch (pType)	{
				case this.SettlementPrice			: return "SettlementPrice";
				case this.ClearedVolume				: return "ClearedVolume";
				case this.OpenInterest				: return "OpenInterest";
				case this.FixingPrice				: return "FixingPrice";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	BookAction	:
	{
		NotSet						: 255,
		New							: 0,
		Change						: 1,
		Delete						: 2,
		DeleteThru					: 3,
		DeleteFrom					: 4,
		Overlay						: 5,
		Replace						: 6,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.New						: return "New";
				case this.Change					: return "Change";
				case this.Delete					: return "Delete";
				case this.DeleteThru				: return "DeleteThru";
				case this.DeleteFrom				: return "DeleteFrom";
				case this.Overlay					: return "Overlay";
				case this.Replace					: return "Replace";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	SessionStatisticsType	:
	{
		NotSet						: 127,
		OpenPrice					: 0,
		HighTrade					: 1,
		LowTrade					: 2,
		LastTrade					: 3,
		HighestBid					: 4,
		LowestAsk					: 5,
		ClosePrice					: 6,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.OpenPrice					: return "OpenPrice";
				case this.HighTrade					: return "HighTrade";
				case this.LowTrade					: return "LowTrade";
				case this.LastTrade					: return "LastTrade";
				case this.HighestBid				: return "HighestBid";
				case this.LowestAsk					: return "LowestAsk";
				case this.ClosePrice				: return "ClosePrice";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	StateType	:
	{
		NotSet						: 255,
		DailyOpeningPrice			: 0,
		IndicativeOpeningPrice		: 5,
		DailyClosingPrice			: 10,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.DailyOpeningPrice			: return "DailyOpeningPrice";
				case this.IndicativeOpeningPrice	: return "IndicativeOpeningPrice";
				case this.DailyClosingPrice			: return "DailyClosingPrice";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	PutOrCall	:
	{
		NotSet						: 255,
		Put							: 0,
		Call						: 1, 

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.Put						: return "Put";
				case this.Call						: return "Call";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	SettleType	:
	{
		Final						: 1,
		Actual						: 2,
		Rounded						: 4,
		Intraday					: 8,
		ReservedBits				: 16,
		NullValue					: 128,

		name (pType)	
		{
			switch (pType)	{
				case this.Final						: return "Final";
				case this.Actual					: return "Actual";
				case this.Rounded					: return "Rounded";
				case this.Intraday					: return "Intraday";
				case this.ReservedBits				: return "ReservedBits";
				case this.NullValue					: return "NullValue";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	TransactionType	:
	{
		NotSet						: 255,
		TransactionStart			: 0,
		TransactionEnd				: 1,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.TransactionStart			: return "TransactionStart";
				case this.TransactionEnd			: return "TransactionEnd";
				}
			return 	"NA";
		}
	},
	//-----------------------------------------------------------------------------------------------------------=

	//-----------------------------------------------------------------------------------------------------------=
	EventIndicator	:
	{
		NotSet						: 0,
		LastOfType					: 1,
		EndOfEvent					: 128,

		name (pType)	
		{
			switch (pType)	{
				case this.NotSet					: return "NotSet";
				case this.LastOfType				: return "LastOfType";
				case this.EndOfEvent				: return "EndOfEvent";
				}
			return 	"NA";
		}

	},
	//-----------------------------------------------------------------------------------------------------------=


};
//-----------------------------------------------------------------------------------------------------------=

