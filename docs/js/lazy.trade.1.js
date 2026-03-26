/*!
 * [懒人交易系统] 
 * Lazy Trader System
 * 
 * @description 基于 AnyStock 的自动化/半自动化辅助交易工具
 * @copyright   Copyright (c) 2026 [hkargc at gmail dot com]
 * @license     PolyForm Noncommercial License 1.0.0 (仅限非商业用途)
 * @see         {@link https://github.com/hkargc/trader} 项目仓库
 * @see         {@link https://polyformproject.org} 协议详情
 * 
 * --------------------------------------------------------------------------
 * 第三方库声明 (Third-party Libraries):
 * --------------------------------------------------------------------------
 * 1. AnyStock (AnyChart)
 *    - 版权归 AnyChart 所有。
 *    - 其使用受 AnyChart 许可条款约束，商业用途需自行购买授权。
 *    - 详情访问: https://www.anychart.com
 * --------------------------------------------------------------------------
 */
"use strict";
const _this = self;
_this.importScripts("./long.min.js");
_this.importScripts("./protobuf.min.js");
_this.importScripts("./futu.compiled.min.js");
_this.importScripts("./locutus.min.js");
_this.importScripts("./config.js?_=" + Math.random());
_this.protos = {
	1: 'InitWebSocket',
	1001: 'InitConnect',
	1002: 'GetGlobalState',
	1003: 'Notify',
	1004: 'KeepAlive',
	3001: 'Qot_Sub',
	3003: 'Qot_GetSubInfo',
	3004: 'Qot_GetBasicQot',
	3005: 'Qot_UpdateBasicQot',
	3006: 'Qot_GetKL',
	3007: 'Qot_UpdateKL',
	3008: 'Qot_GetRT',
	3009: 'Qot_UpdateRT',
	3010: 'Qot_GetTicker',
	3011: 'Qot_UpdateTicker',
	3012: 'Qot_GetOrderBook',
	3013: 'Qot_UpdateOrderBook',
	3014: 'Qot_GetBroker',
	3015: 'Qot_UpdateBroker',
	3019: 'Qot_UpdatePriceReminder',
	3103: 'Qot_RequestHistoryKL',
	3104: 'Qot_RequestHistoryKLQuota',
	3105: 'Qot_RequestRehab',
	3202: 'Qot_GetStaticInfo',
	3203: 'Qot_GetSecuritySnapshot',
	3204: 'Qot_GetPlateSet',
	3205: 'Qot_GetPlateSecurity',
	3206: 'Qot_GetReference',
	3207: 'Qot_GetOwnerPlate',
	3209: 'Qot_GetOptionChain',
	3210: 'Qot_GetWarrant',
	3211: 'Qot_GetCapitalFlow',
	3212: 'Qot_GetCapitalDistribution',
	3213: 'Qot_GetUserSecurity',
	3214: 'Qot_ModifyUserSecurity',
	3215: 'Qot_StockFilter',
	3217: 'Qot_GetIpoList',
	3218: 'Qot_GetFutureInfo',
	3219: 'Qot_RequestTradeDate',
	3220: 'Qot_SetPriceReminder',
	3221: 'Qot_GetPriceReminder',
	3222: 'Qot_GetUserSecurityGroup',
	3223: 'Qot_GetMarketState',
	3224: 'Qot_GetOptionExpirationDate',
	2001: 'Trd_GetAccList',
	2005: 'Trd_UnlockTrade',
	2008: 'Trd_SubAccPush',
	2101: 'Trd_GetFunds',
	2102: 'Trd_GetPositionList',
	2111: 'Trd_GetMaxTrdQtys',
	2201: 'Trd_GetOrderList',
	2202: 'Trd_PlaceOrder',
	2205: 'Trd_ModifyOrder',
	2208: 'Trd_UpdateOrder',
	2211: 'Trd_GetOrderFillList',
	2218: 'Trd_UpdateOrderFill',
	2221: 'Trd_GetHistoryOrderList',
	2222: 'Trd_GetHistoryOrderFillList',
	2223: 'Trd_GetMarginRatio'
};
/**
 * https://github.com/google/closure-library/blob/master/closure/goog/crypt/crypt.js
 */
_this.stringToUtf8ByteArray = function(str) {
	let out = [];
	let p = 0;
	for (let i = 0; i < str.length; i++) {
		let c = str.charCodeAt(i);
		if (c < 128) {
			out[p++] = c;
		} else if (c < 2048) {
			out[p++] = (c >> 6) | 192;
			out[p++] = (c & 63) | 128;
		} else if (
			((c & 0xFC00) == 0xD800) && (i + 1) < str.length && ((str.charCodeAt(i + 1) & 0xFC00) == 0xDC00)) {
			c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
			out[p++] = (c >> 18) | 240;
			out[p++] = ((c >> 12) & 63) | 128;
			out[p++] = ((c >> 6) & 63) | 128;
			out[p++] = (c & 63) | 128;
		} else {
			out[p++] = (c >> 12) | 224;
			out[p++] = ((c >> 6) & 63) | 128;
			out[p++] = (c & 63) | 128;
		}
	}
	return out;
};
/**
 * https://github.com/google/closure-library/blob/master/closure/goog/crypt/crypt.js
 */
_this.utf8ByteArrayToString = function(bytes) {
	let out = [];
	let pos = 0;
	let c = 0;
	while (pos < bytes.length) {
		let c1 = bytes[pos++];
		if (c1 < 128) {
			out[c++] = String.fromCharCode(c1);
		} else if (c1 > 191 && c1 < 224) {
			let c2 = bytes[pos++];
			out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
		} else if (c1 > 239 && c1 < 365) {
			let c2 = bytes[pos++];
			let c3 = bytes[pos++];
			let c4 = bytes[pos++];
			let u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
			out[c++] = String.fromCharCode(0xD800 + (u >> 10));
			out[c++] = String.fromCharCode(0xDC00 + (u & 1023));
		} else {
			let c2 = bytes[pos++];
			let c3 = bytes[pos++];
			out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
		}
	}
	return out.join('');
};
_this.wss = {};
_this.call = function(data) {
	if (data.proto == -1001) { //初始化
		_this.wss = new WebSocket(config.trade[1]["websocketUri"]);
		_this.wss.binaryType = "arraybuffer";
		_this.wss.addEventListener('open', function(e) {
			_this.call({
				proto: 1,
				c2s: {
					//'IP': '', //OpenD地址
					//'Port': '', //OpenD端口
					//'RSAPrivateKey': '', //与OpenD连接的密钥正文
					'websocketKey': md5(config.trade[1]["websocketKey"]),
					'clientID': 'ft-v1.0',
					'programmingLanguage': 'JavaScript'
				},
				serialNo: data.serialNo
			});
		});
		_this.wss.addEventListener('message', function(e) {
			let m = {};
			let view = new DataView(e.data);
			m.sign = new Array();
			for (let i = 0; i <= 7; i++) {
				m.sign[i] = view.getUint8(i);
			}
			m.sign = _this.utf8ByteArrayToString(m.sign).replace(/\0/g, '');
			m.proto = view.getUint32(8, false);
			m.serialNo = view.getBigUint64(12, false);
			m.serialNo = Number(m.serialNo);
			m.error = view.getUint32(20, false);
			m.errmsg = new Array();
			for (let i = 0; i <= 19; i++) {
				m.errmsg[i] = view.getUint8(i + 24);
			}
			m.errmsg = _this.utf8ByteArrayToString(m.errmsg).replace(/\0/g, '');
			let buffer = new Uint8Array(e.data, 44);
			let response = _this['protos'][m.proto] ? protobuf.roots.default[_this['protos'][m.proto]]['Response'].decode(buffer) : {
				s2c: {},
				retType: 0,
				retMsg: m.errmsg,
				errCode: m.error
			};
			if (m.proto == 1) {
				m.proto = 1001;
			}
			m.s2c = response.s2c;
			m.retMsg = response.retMsg;
			m.retType = response.retType;
			m.errCode = response.errCode;
			_this.post(m);
		});
		_this.wss.addEventListener('error', function(e) {
			_this.post({
				retMsg: _this.name + ' error.'
			});
		});
		_this.wss.addEventListener('close', function(e) {
			_this.post({
				retMsg: _this.name + ' close.'
			});
		});
	} else { //发送数据
		let request = protobuf.roots.default[_this['protos'][data.proto]]['Request'];
		let buffer = request.encode({
			'c2s': data.c2s
		}).finish();
		let buff = new ArrayBuffer(20 + buffer.byteLength);
		let view = new DataView(buff);
		let bytes = _this.stringToUtf8ByteArray("ft-v1.0");
		for (let i = 0; i < bytes.length; i++) {
			view.setUint8(i, bytes[i]);
		}
		for (let i = bytes.length; i <= 7; i++) {
			view.setUint8(i, 0);
		}
		view.setUint32(8, data.proto, false);
		view.setBigUint64(12, BigInt(data.serialNo), false); //BigInt有浏览器兼容性问题
		for (let i = 0; i < buffer.byteLength; i++) {
			view.setUint8(20 + i, buffer[i]);
		}
		if (_this.wss.readyState == WebSocket.OPEN) {
			_this.wss.send(buff);
		} else {
			_this.post({
				retMsg: _this.name + ' readyState error.'
			});
		}
	}
};
_this.post = function(m) {
	_this.postMessage([Object.assign({
		proto: 0,
		serialNo: 0,
		s2c: {
			wk: 0
		},
		retMsg: _this.name + ' message error.',
		retType: -1,
		errCode: 0
	}, m), _this.name]);
};
_this.addEventListener('message', function(e) {
	_this.call(e.data);
}, false);