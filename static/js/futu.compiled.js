/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function($protobuf) {
    "use strict";

    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Common = (function() {
    
        var Common = {};
    
        Common.RetType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RetType_Succeed"] = 0;
            values[valuesById[-1] = "RetType_Failed"] = -1;
            values[valuesById[-100] = "RetType_TimeOut"] = -100;
            values[valuesById[-200] = "RetType_DisConnect"] = -200;
            values[valuesById[-400] = "RetType_Unknown"] = -400;
            values[valuesById[-500] = "RetType_Invalid"] = -500;
            return values;
        })();
    
        Common.PacketEncAlgo = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PacketEncAlgo_FTAES_ECB"] = 0;
            values[valuesById[-1] = "PacketEncAlgo_None"] = -1;
            values[valuesById[1] = "PacketEncAlgo_AES_ECB"] = 1;
            values[valuesById[2] = "PacketEncAlgo_AES_CBC"] = 2;
            return values;
        })();
    
        Common.PacketID = (function() {
    
            function PacketID(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            PacketID.prototype.connID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            PacketID.prototype.serialNo = 0;
    
            PacketID.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.connID != null && Object.hasOwnProperty.call(m, "connID"))
                    w.uint32(8).uint64(m.connID);
                if (m.serialNo != null && Object.hasOwnProperty.call(m, "serialNo"))
                    w.uint32(16).uint32(m.serialNo);
                return w;
            };
    
            PacketID.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Common.PacketID();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.connID = r.uint64();
                            break;
                        }
                    case 2: {
                            m.serialNo = r.uint32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return PacketID;
        })();
    
        Common.ProtoFmt = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ProtoFmt_Protobuf"] = 0;
            values[valuesById[1] = "ProtoFmt_Json"] = 1;
            return values;
        })();
    
        Common.UserAttribution = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UserAttribution_Unknown"] = 0;
            values[valuesById[1] = "UserAttribution_NN"] = 1;
            values[valuesById[2] = "UserAttribution_MM"] = 2;
            values[valuesById[3] = "UserAttribution_SG"] = 3;
            values[valuesById[4] = "UserAttribution_AU"] = 4;
            values[valuesById[5] = "UserAttribution_JP"] = 5;
            values[valuesById[6] = "UserAttribution_HK"] = 6;
            return values;
        })();
    
        Common.ProgramStatusType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ProgramStatusType_None"] = 0;
            values[valuesById[1] = "ProgramStatusType_Loaded"] = 1;
            values[valuesById[2] = "ProgramStatusType_Loging"] = 2;
            values[valuesById[3] = "ProgramStatusType_NeedPicVerifyCode"] = 3;
            values[valuesById[4] = "ProgramStatusType_NeedPhoneVerifyCode"] = 4;
            values[valuesById[5] = "ProgramStatusType_LoginFailed"] = 5;
            values[valuesById[6] = "ProgramStatusType_ForceUpdate"] = 6;
            values[valuesById[7] = "ProgramStatusType_NessaryDataPreparing"] = 7;
            values[valuesById[8] = "ProgramStatusType_NessaryDataMissing"] = 8;
            values[valuesById[9] = "ProgramStatusType_UnAgreeDisclaimer"] = 9;
            values[valuesById[10] = "ProgramStatusType_Ready"] = 10;
            values[valuesById[11] = "ProgramStatusType_ForceLogout"] = 11;
            values[valuesById[12] = "ProgramStatusType_DisclaimerPullFailed"] = 12;
            return values;
        })();
    
        Common.ProgramStatus = (function() {
    
            function ProgramStatus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            ProgramStatus.prototype.type = 0;
            ProgramStatus.prototype.strExtDesc = "";
    
            ProgramStatus.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.strExtDesc != null && Object.hasOwnProperty.call(m, "strExtDesc"))
                    w.uint32(18).string(m.strExtDesc);
                return w;
            };
    
            ProgramStatus.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Common.ProgramStatus();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.type = r.int32();
                            break;
                        }
                    case 2: {
                            m.strExtDesc = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return ProgramStatus;
        })();
    
        Common.Session = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Session_NONE"] = 0;
            values[valuesById[1] = "Session_RTH"] = 1;
            values[valuesById[2] = "Session_ETH"] = 2;
            values[valuesById[3] = "Session_ALL"] = 3;
            values[valuesById[4] = "Session_OVERNIGHT"] = 4;
            return values;
        })();
    
        return Common;
    })();
    
    $root.GetGlobalState = (function() {
    
        var GetGlobalState = {};
    
        GetGlobalState.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.userID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.userID != null && Object.hasOwnProperty.call(m, "userID"))
                    w.uint32(8).uint64(m.userID);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.GetGlobalState.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.userID = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        GetGlobalState.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.marketHK = 0;
            S2C.prototype.marketUS = 0;
            S2C.prototype.marketSH = 0;
            S2C.prototype.marketSZ = 0;
            S2C.prototype.marketHKFuture = 0;
            S2C.prototype.marketUSFuture = 0;
            S2C.prototype.marketSGFuture = 0;
            S2C.prototype.marketJPFuture = 0;
            S2C.prototype.qotLogined = false;
            S2C.prototype.trdLogined = false;
            S2C.prototype.serverVer = 0;
            S2C.prototype.serverBuildNo = 0;
            S2C.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            S2C.prototype.localTime = 0;
            S2C.prototype.programStatus = null;
            S2C.prototype.qotSvrIpAddr = "";
            S2C.prototype.trdSvrIpAddr = "";
            S2C.prototype.connID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.marketHK != null && Object.hasOwnProperty.call(m, "marketHK"))
                    w.uint32(8).int32(m.marketHK);
                if (m.marketUS != null && Object.hasOwnProperty.call(m, "marketUS"))
                    w.uint32(16).int32(m.marketUS);
                if (m.marketSH != null && Object.hasOwnProperty.call(m, "marketSH"))
                    w.uint32(24).int32(m.marketSH);
                if (m.marketSZ != null && Object.hasOwnProperty.call(m, "marketSZ"))
                    w.uint32(32).int32(m.marketSZ);
                if (m.marketHKFuture != null && Object.hasOwnProperty.call(m, "marketHKFuture"))
                    w.uint32(40).int32(m.marketHKFuture);
                if (m.qotLogined != null && Object.hasOwnProperty.call(m, "qotLogined"))
                    w.uint32(48).bool(m.qotLogined);
                if (m.trdLogined != null && Object.hasOwnProperty.call(m, "trdLogined"))
                    w.uint32(56).bool(m.trdLogined);
                if (m.serverVer != null && Object.hasOwnProperty.call(m, "serverVer"))
                    w.uint32(64).int32(m.serverVer);
                if (m.serverBuildNo != null && Object.hasOwnProperty.call(m, "serverBuildNo"))
                    w.uint32(72).int32(m.serverBuildNo);
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(80).int64(m.time);
                if (m.localTime != null && Object.hasOwnProperty.call(m, "localTime"))
                    w.uint32(89).double(m.localTime);
                if (m.programStatus != null && Object.hasOwnProperty.call(m, "programStatus"))
                    $root.Common.ProgramStatus.encode(m.programStatus, w.uint32(98).fork()).ldelim();
                if (m.qotSvrIpAddr != null && Object.hasOwnProperty.call(m, "qotSvrIpAddr"))
                    w.uint32(106).string(m.qotSvrIpAddr);
                if (m.trdSvrIpAddr != null && Object.hasOwnProperty.call(m, "trdSvrIpAddr"))
                    w.uint32(114).string(m.trdSvrIpAddr);
                if (m.marketUSFuture != null && Object.hasOwnProperty.call(m, "marketUSFuture"))
                    w.uint32(120).int32(m.marketUSFuture);
                if (m.connID != null && Object.hasOwnProperty.call(m, "connID"))
                    w.uint32(128).uint64(m.connID);
                if (m.marketSGFuture != null && Object.hasOwnProperty.call(m, "marketSGFuture"))
                    w.uint32(136).int32(m.marketSGFuture);
                if (m.marketJPFuture != null && Object.hasOwnProperty.call(m, "marketJPFuture"))
                    w.uint32(144).int32(m.marketJPFuture);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.GetGlobalState.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.marketHK = r.int32();
                            break;
                        }
                    case 2: {
                            m.marketUS = r.int32();
                            break;
                        }
                    case 3: {
                            m.marketSH = r.int32();
                            break;
                        }
                    case 4: {
                            m.marketSZ = r.int32();
                            break;
                        }
                    case 5: {
                            m.marketHKFuture = r.int32();
                            break;
                        }
                    case 15: {
                            m.marketUSFuture = r.int32();
                            break;
                        }
                    case 17: {
                            m.marketSGFuture = r.int32();
                            break;
                        }
                    case 18: {
                            m.marketJPFuture = r.int32();
                            break;
                        }
                    case 6: {
                            m.qotLogined = r.bool();
                            break;
                        }
                    case 7: {
                            m.trdLogined = r.bool();
                            break;
                        }
                    case 8: {
                            m.serverVer = r.int32();
                            break;
                        }
                    case 9: {
                            m.serverBuildNo = r.int32();
                            break;
                        }
                    case 10: {
                            m.time = r.int64();
                            break;
                        }
                    case 11: {
                            m.localTime = r.double();
                            break;
                        }
                    case 12: {
                            m.programStatus = $root.Common.ProgramStatus.decode(r, r.uint32());
                            break;
                        }
                    case 13: {
                            m.qotSvrIpAddr = r.string();
                            break;
                        }
                    case 14: {
                            m.trdSvrIpAddr = r.string();
                            break;
                        }
                    case 16: {
                            m.connID = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        GetGlobalState.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.GetGlobalState.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.GetGlobalState.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.GetGlobalState.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        GetGlobalState.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.GetGlobalState.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.GetGlobalState.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.GetGlobalState.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return GetGlobalState;
    })();
    
    $root.InitConnect = (function() {
    
        var InitConnect = {};
    
        InitConnect.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.clientVer = 0;
            C2S.prototype.clientID = "";
            C2S.prototype.recvNotify = false;
            C2S.prototype.packetEncAlgo = 0;
            C2S.prototype.pushProtoFmt = 0;
            C2S.prototype.programmingLanguage = "";
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.clientVer != null && Object.hasOwnProperty.call(m, "clientVer"))
                    w.uint32(8).int32(m.clientVer);
                if (m.clientID != null && Object.hasOwnProperty.call(m, "clientID"))
                    w.uint32(18).string(m.clientID);
                if (m.recvNotify != null && Object.hasOwnProperty.call(m, "recvNotify"))
                    w.uint32(24).bool(m.recvNotify);
                if (m.packetEncAlgo != null && Object.hasOwnProperty.call(m, "packetEncAlgo"))
                    w.uint32(32).int32(m.packetEncAlgo);
                if (m.pushProtoFmt != null && Object.hasOwnProperty.call(m, "pushProtoFmt"))
                    w.uint32(40).int32(m.pushProtoFmt);
                if (m.programmingLanguage != null && Object.hasOwnProperty.call(m, "programmingLanguage"))
                    w.uint32(50).string(m.programmingLanguage);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitConnect.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.clientVer = r.int32();
                            break;
                        }
                    case 2: {
                            m.clientID = r.string();
                            break;
                        }
                    case 3: {
                            m.recvNotify = r.bool();
                            break;
                        }
                    case 4: {
                            m.packetEncAlgo = r.int32();
                            break;
                        }
                    case 5: {
                            m.pushProtoFmt = r.int32();
                            break;
                        }
                    case 6: {
                            m.programmingLanguage = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        InitConnect.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.serverVer = 0;
            S2C.prototype.loginUserID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            S2C.prototype.connID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            S2C.prototype.connAESKey = "";
            S2C.prototype.keepAliveInterval = 0;
            S2C.prototype.aesCBCiv = "";
            S2C.prototype.userAttribution = 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.serverVer != null && Object.hasOwnProperty.call(m, "serverVer"))
                    w.uint32(8).int32(m.serverVer);
                if (m.loginUserID != null && Object.hasOwnProperty.call(m, "loginUserID"))
                    w.uint32(16).uint64(m.loginUserID);
                if (m.connID != null && Object.hasOwnProperty.call(m, "connID"))
                    w.uint32(24).uint64(m.connID);
                if (m.connAESKey != null && Object.hasOwnProperty.call(m, "connAESKey"))
                    w.uint32(34).string(m.connAESKey);
                if (m.keepAliveInterval != null && Object.hasOwnProperty.call(m, "keepAliveInterval"))
                    w.uint32(40).int32(m.keepAliveInterval);
                if (m.aesCBCiv != null && Object.hasOwnProperty.call(m, "aesCBCiv"))
                    w.uint32(50).string(m.aesCBCiv);
                if (m.userAttribution != null && Object.hasOwnProperty.call(m, "userAttribution"))
                    w.uint32(56).int32(m.userAttribution);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitConnect.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.serverVer = r.int32();
                            break;
                        }
                    case 2: {
                            m.loginUserID = r.uint64();
                            break;
                        }
                    case 3: {
                            m.connID = r.uint64();
                            break;
                        }
                    case 4: {
                            m.connAESKey = r.string();
                            break;
                        }
                    case 5: {
                            m.keepAliveInterval = r.int32();
                            break;
                        }
                    case 6: {
                            m.aesCBCiv = r.string();
                            break;
                        }
                    case 7: {
                            m.userAttribution = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        InitConnect.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.InitConnect.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitConnect.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.InitConnect.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        InitConnect.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.InitConnect.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitConnect.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.InitConnect.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return InitConnect;
    })();
    
    $root.InitWebSocket = (function() {
    
        var InitWebSocket = {};
    
        InitWebSocket.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.IP = "";
            C2S.prototype.Port = 0;
            C2S.prototype.RSAPrivateKey = "";
            C2S.prototype.websocketKey = "";
            C2S.prototype.clientID = "";
            C2S.prototype.programmingLanguage = "";
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.IP != null && Object.hasOwnProperty.call(m, "IP"))
                    w.uint32(10).string(m.IP);
                if (m.Port != null && Object.hasOwnProperty.call(m, "Port"))
                    w.uint32(16).int32(m.Port);
                if (m.RSAPrivateKey != null && Object.hasOwnProperty.call(m, "RSAPrivateKey"))
                    w.uint32(26).string(m.RSAPrivateKey);
                if (m.websocketKey != null && Object.hasOwnProperty.call(m, "websocketKey"))
                    w.uint32(34).string(m.websocketKey);
                if (m.clientID != null && Object.hasOwnProperty.call(m, "clientID"))
                    w.uint32(42).string(m.clientID);
                if (m.programmingLanguage != null && Object.hasOwnProperty.call(m, "programmingLanguage"))
                    w.uint32(50).string(m.programmingLanguage);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitWebSocket.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.IP = r.string();
                            break;
                        }
                    case 2: {
                            m.Port = r.int32();
                            break;
                        }
                    case 3: {
                            m.RSAPrivateKey = r.string();
                            break;
                        }
                    case 4: {
                            m.websocketKey = r.string();
                            break;
                        }
                    case 5: {
                            m.clientID = r.string();
                            break;
                        }
                    case 6: {
                            m.programmingLanguage = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        InitWebSocket.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            S2C.prototype.connID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.serverTime != null && Object.hasOwnProperty.call(m, "serverTime"))
                    w.uint32(8).int64(m.serverTime);
                if (m.connID != null && Object.hasOwnProperty.call(m, "connID"))
                    w.uint32(16).uint64(m.connID);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitWebSocket.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.serverTime = r.int64();
                            break;
                        }
                    case 2: {
                            m.connID = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        InitWebSocket.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.InitWebSocket.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitWebSocket.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.InitWebSocket.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        InitWebSocket.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.InitWebSocket.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.InitWebSocket.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.InitWebSocket.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return InitWebSocket;
    })();
    
    $root.KeepAlive = (function() {
    
        var KeepAlive = {};
    
        KeepAlive.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(8).int64(m.time);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.KeepAlive.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.time = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        KeepAlive.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(8).int64(m.time);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.KeepAlive.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.time = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        KeepAlive.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.KeepAlive.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.KeepAlive.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.KeepAlive.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        KeepAlive.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.KeepAlive.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.KeepAlive.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.KeepAlive.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return KeepAlive;
    })();
    
    $root.Notify = (function() {
    
        var Notify = {};
    
        Notify.NotifyType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NotifyType_None"] = 0;
            values[valuesById[1] = "NotifyType_GtwEvent"] = 1;
            values[valuesById[2] = "NotifyType_ProgramStatus"] = 2;
            values[valuesById[3] = "NotifyType_ConnStatus"] = 3;
            values[valuesById[4] = "NotifyType_QotRight"] = 4;
            values[valuesById[5] = "NotifyType_APILevel"] = 5;
            values[valuesById[6] = "NotifyType_APIQuota"] = 6;
            values[valuesById[7] = "NotifyType_UsedQuota"] = 7;
            return values;
        })();
    
        Notify.GtwEventType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GtwEventType_None"] = 0;
            values[valuesById[1] = "GtwEventType_LocalCfgLoadFailed"] = 1;
            values[valuesById[2] = "GtwEventType_APISvrRunFailed"] = 2;
            values[valuesById[3] = "GtwEventType_ForceUpdate"] = 3;
            values[valuesById[4] = "GtwEventType_LoginFailed"] = 4;
            values[valuesById[5] = "GtwEventType_UnAgreeDisclaimer"] = 5;
            values[valuesById[6] = "GtwEventType_NetCfgMissing"] = 6;
            values[valuesById[7] = "GtwEventType_KickedOut"] = 7;
            values[valuesById[8] = "GtwEventType_LoginPwdChanged"] = 8;
            values[valuesById[9] = "GtwEventType_BanLogin"] = 9;
            values[valuesById[10] = "GtwEventType_NeedPicVerifyCode"] = 10;
            values[valuesById[11] = "GtwEventType_NeedPhoneVerifyCode"] = 11;
            values[valuesById[12] = "GtwEventType_AppDataNotExist"] = 12;
            values[valuesById[13] = "GtwEventType_NessaryDataMissing"] = 13;
            values[valuesById[14] = "GtwEventType_TradePwdChanged"] = 14;
            values[valuesById[15] = "GtwEventType_EnableDeviceLock"] = 15;
            return values;
        })();
    
        Notify.GtwEvent = (function() {
    
            function GtwEvent(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            GtwEvent.prototype.eventType = 0;
            GtwEvent.prototype.desc = "";
    
            GtwEvent.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.eventType != null && Object.hasOwnProperty.call(m, "eventType"))
                    w.uint32(8).int32(m.eventType);
                if (m.desc != null && Object.hasOwnProperty.call(m, "desc"))
                    w.uint32(18).string(m.desc);
                return w;
            };
    
            GtwEvent.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.GtwEvent();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.eventType = r.int32();
                            break;
                        }
                    case 2: {
                            m.desc = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return GtwEvent;
        })();
    
        Notify.ProgramStatus = (function() {
    
            function ProgramStatus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            ProgramStatus.prototype.programStatus = null;
    
            ProgramStatus.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.programStatus != null && Object.hasOwnProperty.call(m, "programStatus"))
                    $root.Common.ProgramStatus.encode(m.programStatus, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            ProgramStatus.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.ProgramStatus();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.programStatus = $root.Common.ProgramStatus.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return ProgramStatus;
        })();
    
        Notify.ConnectStatus = (function() {
    
            function ConnectStatus(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            ConnectStatus.prototype.qotLogined = false;
            ConnectStatus.prototype.trdLogined = false;
    
            ConnectStatus.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.qotLogined != null && Object.hasOwnProperty.call(m, "qotLogined"))
                    w.uint32(8).bool(m.qotLogined);
                if (m.trdLogined != null && Object.hasOwnProperty.call(m, "trdLogined"))
                    w.uint32(16).bool(m.trdLogined);
                return w;
            };
    
            ConnectStatus.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.ConnectStatus();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.qotLogined = r.bool();
                            break;
                        }
                    case 2: {
                            m.trdLogined = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return ConnectStatus;
        })();
    
        Notify.QotRight = (function() {
    
            function QotRight(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            QotRight.prototype.hkQotRight = 0;
            QotRight.prototype.usQotRight = 0;
            QotRight.prototype.cnQotRight = 0;
            QotRight.prototype.hkOptionQotRight = 0;
            QotRight.prototype.hasUSOptionQotRight = false;
            QotRight.prototype.hkFutureQotRight = 0;
            QotRight.prototype.usFutureQotRight = 0;
            QotRight.prototype.usOptionQotRight = 0;
            QotRight.prototype.usIndexQotRight = 0;
            QotRight.prototype.usOtcQotRight = 0;
            QotRight.prototype.sgFutureQotRight = 0;
            QotRight.prototype.jpFutureQotRight = 0;
            QotRight.prototype.usCMEFutureQotRight = 0;
            QotRight.prototype.usCBOTFutureQotRight = 0;
            QotRight.prototype.usNYMEXFutureQotRight = 0;
            QotRight.prototype.usCOMEXFutureQotRight = 0;
            QotRight.prototype.usCBOEFutureQotRight = 0;
            QotRight.prototype.shQotRight = 0;
            QotRight.prototype.szQotRight = 0;
    
            QotRight.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.hkQotRight != null && Object.hasOwnProperty.call(m, "hkQotRight"))
                    w.uint32(32).int32(m.hkQotRight);
                if (m.usQotRight != null && Object.hasOwnProperty.call(m, "usQotRight"))
                    w.uint32(40).int32(m.usQotRight);
                if (m.cnQotRight != null && Object.hasOwnProperty.call(m, "cnQotRight"))
                    w.uint32(48).int32(m.cnQotRight);
                if (m.hkOptionQotRight != null && Object.hasOwnProperty.call(m, "hkOptionQotRight"))
                    w.uint32(56).int32(m.hkOptionQotRight);
                if (m.hasUSOptionQotRight != null && Object.hasOwnProperty.call(m, "hasUSOptionQotRight"))
                    w.uint32(64).bool(m.hasUSOptionQotRight);
                if (m.hkFutureQotRight != null && Object.hasOwnProperty.call(m, "hkFutureQotRight"))
                    w.uint32(72).int32(m.hkFutureQotRight);
                if (m.usFutureQotRight != null && Object.hasOwnProperty.call(m, "usFutureQotRight"))
                    w.uint32(80).int32(m.usFutureQotRight);
                if (m.usOptionQotRight != null && Object.hasOwnProperty.call(m, "usOptionQotRight"))
                    w.uint32(88).int32(m.usOptionQotRight);
                if (m.usIndexQotRight != null && Object.hasOwnProperty.call(m, "usIndexQotRight"))
                    w.uint32(96).int32(m.usIndexQotRight);
                if (m.usOtcQotRight != null && Object.hasOwnProperty.call(m, "usOtcQotRight"))
                    w.uint32(104).int32(m.usOtcQotRight);
                if (m.sgFutureQotRight != null && Object.hasOwnProperty.call(m, "sgFutureQotRight"))
                    w.uint32(112).int32(m.sgFutureQotRight);
                if (m.jpFutureQotRight != null && Object.hasOwnProperty.call(m, "jpFutureQotRight"))
                    w.uint32(120).int32(m.jpFutureQotRight);
                if (m.usCMEFutureQotRight != null && Object.hasOwnProperty.call(m, "usCMEFutureQotRight"))
                    w.uint32(128).int32(m.usCMEFutureQotRight);
                if (m.usCBOTFutureQotRight != null && Object.hasOwnProperty.call(m, "usCBOTFutureQotRight"))
                    w.uint32(136).int32(m.usCBOTFutureQotRight);
                if (m.usNYMEXFutureQotRight != null && Object.hasOwnProperty.call(m, "usNYMEXFutureQotRight"))
                    w.uint32(144).int32(m.usNYMEXFutureQotRight);
                if (m.usCOMEXFutureQotRight != null && Object.hasOwnProperty.call(m, "usCOMEXFutureQotRight"))
                    w.uint32(152).int32(m.usCOMEXFutureQotRight);
                if (m.usCBOEFutureQotRight != null && Object.hasOwnProperty.call(m, "usCBOEFutureQotRight"))
                    w.uint32(160).int32(m.usCBOEFutureQotRight);
                if (m.shQotRight != null && Object.hasOwnProperty.call(m, "shQotRight"))
                    w.uint32(168).int32(m.shQotRight);
                if (m.szQotRight != null && Object.hasOwnProperty.call(m, "szQotRight"))
                    w.uint32(176).int32(m.szQotRight);
                return w;
            };
    
            QotRight.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.QotRight();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 4: {
                            m.hkQotRight = r.int32();
                            break;
                        }
                    case 5: {
                            m.usQotRight = r.int32();
                            break;
                        }
                    case 6: {
                            m.cnQotRight = r.int32();
                            break;
                        }
                    case 7: {
                            m.hkOptionQotRight = r.int32();
                            break;
                        }
                    case 8: {
                            m.hasUSOptionQotRight = r.bool();
                            break;
                        }
                    case 9: {
                            m.hkFutureQotRight = r.int32();
                            break;
                        }
                    case 10: {
                            m.usFutureQotRight = r.int32();
                            break;
                        }
                    case 11: {
                            m.usOptionQotRight = r.int32();
                            break;
                        }
                    case 12: {
                            m.usIndexQotRight = r.int32();
                            break;
                        }
                    case 13: {
                            m.usOtcQotRight = r.int32();
                            break;
                        }
                    case 14: {
                            m.sgFutureQotRight = r.int32();
                            break;
                        }
                    case 15: {
                            m.jpFutureQotRight = r.int32();
                            break;
                        }
                    case 16: {
                            m.usCMEFutureQotRight = r.int32();
                            break;
                        }
                    case 17: {
                            m.usCBOTFutureQotRight = r.int32();
                            break;
                        }
                    case 18: {
                            m.usNYMEXFutureQotRight = r.int32();
                            break;
                        }
                    case 19: {
                            m.usCOMEXFutureQotRight = r.int32();
                            break;
                        }
                    case 20: {
                            m.usCBOEFutureQotRight = r.int32();
                            break;
                        }
                    case 21: {
                            m.shQotRight = r.int32();
                            break;
                        }
                    case 22: {
                            m.szQotRight = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return QotRight;
        })();
    
        Notify.APILevel = (function() {
    
            function APILevel(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            APILevel.prototype.apiLevel = "";
    
            APILevel.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.apiLevel != null && Object.hasOwnProperty.call(m, "apiLevel"))
                    w.uint32(26).string(m.apiLevel);
                return w;
            };
    
            APILevel.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.APILevel();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 3: {
                            m.apiLevel = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return APILevel;
        })();
    
        Notify.APIQuota = (function() {
    
            function APIQuota(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            APIQuota.prototype.subQuota = 0;
            APIQuota.prototype.historyKLQuota = 0;
    
            APIQuota.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.subQuota != null && Object.hasOwnProperty.call(m, "subQuota"))
                    w.uint32(8).int32(m.subQuota);
                if (m.historyKLQuota != null && Object.hasOwnProperty.call(m, "historyKLQuota"))
                    w.uint32(16).int32(m.historyKLQuota);
                return w;
            };
    
            APIQuota.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.APIQuota();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.subQuota = r.int32();
                            break;
                        }
                    case 2: {
                            m.historyKLQuota = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return APIQuota;
        })();
    
        Notify.UsedQuota = (function() {
    
            function UsedQuota(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            UsedQuota.prototype.usedSubQuota = 0;
            UsedQuota.prototype.usedKLineQuota = 0;
    
            UsedQuota.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.usedSubQuota != null && Object.hasOwnProperty.call(m, "usedSubQuota"))
                    w.uint32(8).int32(m.usedSubQuota);
                if (m.usedKLineQuota != null && Object.hasOwnProperty.call(m, "usedKLineQuota"))
                    w.uint32(16).int32(m.usedKLineQuota);
                return w;
            };
    
            UsedQuota.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.UsedQuota();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.usedSubQuota = r.int32();
                            break;
                        }
                    case 2: {
                            m.usedKLineQuota = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return UsedQuota;
        })();
    
        Notify.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.type = 0;
            S2C.prototype.event = null;
            S2C.prototype.programStatus = null;
            S2C.prototype.connectStatus = null;
            S2C.prototype.qotRight = null;
            S2C.prototype.apiLevel = null;
            S2C.prototype.apiQuota = null;
            S2C.prototype.usedQuota = null;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.event != null && Object.hasOwnProperty.call(m, "event"))
                    $root.Notify.GtwEvent.encode(m.event, w.uint32(18).fork()).ldelim();
                if (m.programStatus != null && Object.hasOwnProperty.call(m, "programStatus"))
                    $root.Notify.ProgramStatus.encode(m.programStatus, w.uint32(26).fork()).ldelim();
                if (m.connectStatus != null && Object.hasOwnProperty.call(m, "connectStatus"))
                    $root.Notify.ConnectStatus.encode(m.connectStatus, w.uint32(34).fork()).ldelim();
                if (m.qotRight != null && Object.hasOwnProperty.call(m, "qotRight"))
                    $root.Notify.QotRight.encode(m.qotRight, w.uint32(42).fork()).ldelim();
                if (m.apiLevel != null && Object.hasOwnProperty.call(m, "apiLevel"))
                    $root.Notify.APILevel.encode(m.apiLevel, w.uint32(50).fork()).ldelim();
                if (m.apiQuota != null && Object.hasOwnProperty.call(m, "apiQuota"))
                    $root.Notify.APIQuota.encode(m.apiQuota, w.uint32(58).fork()).ldelim();
                if (m.usedQuota != null && Object.hasOwnProperty.call(m, "usedQuota"))
                    $root.Notify.UsedQuota.encode(m.usedQuota, w.uint32(66).fork()).ldelim();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.type = r.int32();
                            break;
                        }
                    case 2: {
                            m.event = $root.Notify.GtwEvent.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.programStatus = $root.Notify.ProgramStatus.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.connectStatus = $root.Notify.ConnectStatus.decode(r, r.uint32());
                            break;
                        }
                    case 5: {
                            m.qotRight = $root.Notify.QotRight.decode(r, r.uint32());
                            break;
                        }
                    case 6: {
                            m.apiLevel = $root.Notify.APILevel.decode(r, r.uint32());
                            break;
                        }
                    case 7: {
                            m.apiQuota = $root.Notify.APIQuota.decode(r, r.uint32());
                            break;
                        }
                    case 8: {
                            m.usedQuota = $root.Notify.UsedQuota.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Notify.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Notify.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Notify.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Notify.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Notify;
    })();
    
    $root.Qot_Common = (function() {
    
        var Qot_Common = {};
    
        Qot_Common.QotMarket = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "QotMarket_Unknown"] = 0;
            values[valuesById[1] = "QotMarket_HK_Security"] = 1;
            values[valuesById[2] = "QotMarket_HK_Future"] = 2;
            values[valuesById[11] = "QotMarket_US_Security"] = 11;
            values[valuesById[21] = "QotMarket_CNSH_Security"] = 21;
            values[valuesById[22] = "QotMarket_CNSZ_Security"] = 22;
            values[valuesById[31] = "QotMarket_SG_Security"] = 31;
            values[valuesById[41] = "QotMarket_JP_Security"] = 41;
            values[valuesById[51] = "QotMarket_AU_Security"] = 51;
            values[valuesById[61] = "QotMarket_MY_Security"] = 61;
            values[valuesById[71] = "QotMarket_CA_Security"] = 71;
            values[valuesById[81] = "QotMarket_FX_Security"] = 81;
            return values;
        })();
    
        Qot_Common.SecurityType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SecurityType_Unknown"] = 0;
            values[valuesById[1] = "SecurityType_Bond"] = 1;
            values[valuesById[2] = "SecurityType_Bwrt"] = 2;
            values[valuesById[3] = "SecurityType_Eqty"] = 3;
            values[valuesById[4] = "SecurityType_Trust"] = 4;
            values[valuesById[5] = "SecurityType_Warrant"] = 5;
            values[valuesById[6] = "SecurityType_Index"] = 6;
            values[valuesById[7] = "SecurityType_Plate"] = 7;
            values[valuesById[8] = "SecurityType_Drvt"] = 8;
            values[valuesById[9] = "SecurityType_PlateSet"] = 9;
            values[valuesById[10] = "SecurityType_Future"] = 10;
            values[valuesById[11] = "SecurityType_Forex"] = 11;
            values[valuesById[12] = "SecurityType_WealthManageFund"] = 12;
            values[valuesById[13] = "SecurityType_ExchangeFund"] = 13;
            values[valuesById[14] = "SecurityType_Crypto"] = 14;
            values[valuesById[15] = "SecurityType_OTCBond"] = 15;
            values[valuesById[16] = "SecurityType_OTCStructNotes"] = 16;
            return values;
        })();
    
        Qot_Common.PlateSetType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PlateSetType_All"] = 0;
            values[valuesById[1] = "PlateSetType_Industry"] = 1;
            values[valuesById[2] = "PlateSetType_Region"] = 2;
            values[valuesById[3] = "PlateSetType_Concept"] = 3;
            values[valuesById[4] = "PlateSetType_Other"] = 4;
            return values;
        })();
    
        Qot_Common.WarrantType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WarrantType_Unknown"] = 0;
            values[valuesById[1] = "WarrantType_Buy"] = 1;
            values[valuesById[2] = "WarrantType_Sell"] = 2;
            values[valuesById[3] = "WarrantType_Bull"] = 3;
            values[valuesById[4] = "WarrantType_Bear"] = 4;
            values[valuesById[5] = "WarrantType_InLine"] = 5;
            return values;
        })();
    
        Qot_Common.OptionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OptionType_Unknown"] = 0;
            values[valuesById[1] = "OptionType_Call"] = 1;
            values[valuesById[2] = "OptionType_Put"] = 2;
            return values;
        })();
    
        Qot_Common.IndexOptionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IndexOptionType_Unknown"] = 0;
            values[valuesById[1] = "IndexOptionType_Normal"] = 1;
            values[valuesById[2] = "IndexOptionType_Small"] = 2;
            return values;
        })();
    
        Qot_Common.OptionAreaType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OptionAreaType_Unknown"] = 0;
            values[valuesById[1] = "OptionAreaType_American"] = 1;
            values[valuesById[2] = "OptionAreaType_European"] = 2;
            values[valuesById[3] = "OptionAreaType_Bermuda"] = 3;
            return values;
        })();
    
        Qot_Common.QotMarketState = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "QotMarketState_None"] = 0;
            values[valuesById[1] = "QotMarketState_Auction"] = 1;
            values[valuesById[2] = "QotMarketState_WaitingOpen"] = 2;
            values[valuesById[3] = "QotMarketState_Morning"] = 3;
            values[valuesById[4] = "QotMarketState_Rest"] = 4;
            values[valuesById[5] = "QotMarketState_Afternoon"] = 5;
            values[valuesById[6] = "QotMarketState_Closed"] = 6;
            values[valuesById[8] = "QotMarketState_PreMarketBegin"] = 8;
            values[valuesById[9] = "QotMarketState_PreMarketEnd"] = 9;
            values[valuesById[10] = "QotMarketState_AfterHoursBegin"] = 10;
            values[valuesById[11] = "QotMarketState_AfterHoursEnd"] = 11;
            values[valuesById[12] = "QotMarketState_FUTU_SWITCH_DATE"] = 12;
            values[valuesById[13] = "QotMarketState_NightOpen"] = 13;
            values[valuesById[14] = "QotMarketState_NightEnd"] = 14;
            values[valuesById[15] = "QotMarketState_FutureDayOpen"] = 15;
            values[valuesById[16] = "QotMarketState_FutureDayBreak"] = 16;
            values[valuesById[17] = "QotMarketState_FutureDayClose"] = 17;
            values[valuesById[18] = "QotMarketState_FutureDayWaitForOpen"] = 18;
            values[valuesById[19] = "QotMarketState_HkCas"] = 19;
            values[valuesById[20] = "QotMarketState_FutureNightWait"] = 20;
            values[valuesById[21] = "QotMarketState_FutureAfternoon"] = 21;
            values[valuesById[22] = "QotMarketState_FutureSwitchDate"] = 22;
            values[valuesById[23] = "QotMarketState_FutureOpen"] = 23;
            values[valuesById[24] = "QotMarketState_FutureBreak"] = 24;
            values[valuesById[25] = "QotMarketState_FutureBreakOver"] = 25;
            values[valuesById[26] = "QotMarketState_FutureClose"] = 26;
            values[valuesById[27] = "QotMarketState_StibAfterHoursWait"] = 27;
            values[valuesById[28] = "QotMarketState_StibAfterHoursBegin"] = 28;
            values[valuesById[29] = "QotMarketState_StibAfterHoursEnd"] = 29;
            values[valuesById[30] = "QotMarketState_CLOSE_AUCTION"] = 30;
            values[valuesById[31] = "QotMarketState_AFTERNOON_END"] = 31;
            values[valuesById[32] = "QotMarketState_NIGHT"] = 32;
            values[valuesById[33] = "QotMarketState_OVERNIGHT_BEGIN"] = 33;
            values[valuesById[34] = "QotMarketState_OVERNIGHT_END"] = 34;
            values[valuesById[35] = "QotMarketState_TRADE_AT_LAST"] = 35;
            values[valuesById[36] = "QotMarketState_TRADE_AUCTION"] = 36;
            values[valuesById[37] = "QotMarketState_OVERNIGHT"] = 37;
            return values;
        })();
    
        Qot_Common.TradeDateMarket = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TradeDateMarket_Unknown"] = 0;
            values[valuesById[1] = "TradeDateMarket_HK"] = 1;
            values[valuesById[2] = "TradeDateMarket_US"] = 2;
            values[valuesById[3] = "TradeDateMarket_CN"] = 3;
            values[valuesById[4] = "TradeDateMarket_NT"] = 4;
            values[valuesById[5] = "TradeDateMarket_ST"] = 5;
            values[valuesById[6] = "TradeDateMarket_JP_Future"] = 6;
            values[valuesById[7] = "TradeDateMarket_SG_Future"] = 7;
            return values;
        })();
    
        Qot_Common.TradeDateType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TradeDateType_Whole"] = 0;
            values[valuesById[1] = "TradeDateType_Morning"] = 1;
            values[valuesById[2] = "TradeDateType_Afternoon"] = 2;
            return values;
        })();
    
        Qot_Common.RehabType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RehabType_None"] = 0;
            values[valuesById[1] = "RehabType_Forward"] = 1;
            values[valuesById[2] = "RehabType_Backward"] = 2;
            return values;
        })();
    
        Qot_Common.KLType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "KLType_Unknown"] = 0;
            values[valuesById[1] = "KLType_1Min"] = 1;
            values[valuesById[2] = "KLType_Day"] = 2;
            values[valuesById[3] = "KLType_Week"] = 3;
            values[valuesById[4] = "KLType_Month"] = 4;
            values[valuesById[5] = "KLType_Year"] = 5;
            values[valuesById[6] = "KLType_5Min"] = 6;
            values[valuesById[7] = "KLType_15Min"] = 7;
            values[valuesById[8] = "KLType_30Min"] = 8;
            values[valuesById[9] = "KLType_60Min"] = 9;
            values[valuesById[10] = "KLType_3Min"] = 10;
            values[valuesById[11] = "KLType_Quarter"] = 11;
            return values;
        })();
    
        Qot_Common.KLFields = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "KLFields_None"] = 0;
            values[valuesById[1] = "KLFields_High"] = 1;
            values[valuesById[2] = "KLFields_Open"] = 2;
            values[valuesById[4] = "KLFields_Low"] = 4;
            values[valuesById[8] = "KLFields_Close"] = 8;
            values[valuesById[16] = "KLFields_LastClose"] = 16;
            values[valuesById[32] = "KLFields_Volume"] = 32;
            values[valuesById[64] = "KLFields_Turnover"] = 64;
            values[valuesById[128] = "KLFields_TurnoverRate"] = 128;
            values[valuesById[256] = "KLFields_PE"] = 256;
            values[valuesById[512] = "KLFields_ChangeRate"] = 512;
            return values;
        })();
    
        Qot_Common.SubType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SubType_None"] = 0;
            values[valuesById[1] = "SubType_Basic"] = 1;
            values[valuesById[2] = "SubType_OrderBook"] = 2;
            values[valuesById[4] = "SubType_Ticker"] = 4;
            values[valuesById[5] = "SubType_RT"] = 5;
            values[valuesById[6] = "SubType_KL_Day"] = 6;
            values[valuesById[7] = "SubType_KL_5Min"] = 7;
            values[valuesById[8] = "SubType_KL_15Min"] = 8;
            values[valuesById[9] = "SubType_KL_30Min"] = 9;
            values[valuesById[10] = "SubType_KL_60Min"] = 10;
            values[valuesById[11] = "SubType_KL_1Min"] = 11;
            values[valuesById[12] = "SubType_KL_Week"] = 12;
            values[valuesById[13] = "SubType_KL_Month"] = 13;
            values[valuesById[14] = "SubType_Broker"] = 14;
            values[valuesById[15] = "SubType_KL_Qurater"] = 15;
            values[valuesById[16] = "SubType_KL_Year"] = 16;
            values[valuesById[17] = "SubType_KL_3Min"] = 17;
            return values;
        })();
    
        Qot_Common.TickerDirection = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TickerDirection_Unknown"] = 0;
            values[valuesById[1] = "TickerDirection_Bid"] = 1;
            values[valuesById[2] = "TickerDirection_Ask"] = 2;
            values[valuesById[3] = "TickerDirection_Neutral"] = 3;
            return values;
        })();
    
        Qot_Common.TickerType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TickerType_Unknown"] = 0;
            values[valuesById[1] = "TickerType_Automatch"] = 1;
            values[valuesById[2] = "TickerType_Late"] = 2;
            values[valuesById[3] = "TickerType_NoneAutomatch"] = 3;
            values[valuesById[4] = "TickerType_InterAutomatch"] = 4;
            values[valuesById[5] = "TickerType_InterNoneAutomatch"] = 5;
            values[valuesById[6] = "TickerType_OddLot"] = 6;
            values[valuesById[7] = "TickerType_Auction"] = 7;
            values[valuesById[8] = "TickerType_Bulk"] = 8;
            values[valuesById[9] = "TickerType_Crash"] = 9;
            values[valuesById[10] = "TickerType_CrossMarket"] = 10;
            values[valuesById[11] = "TickerType_BulkSold"] = 11;
            values[valuesById[12] = "TickerType_FreeOnBoard"] = 12;
            values[valuesById[13] = "TickerType_Rule127Or155"] = 13;
            values[valuesById[14] = "TickerType_Delay"] = 14;
            values[valuesById[15] = "TickerType_MarketCenterClosePrice"] = 15;
            values[valuesById[16] = "TickerType_NextDay"] = 16;
            values[valuesById[17] = "TickerType_MarketCenterOpening"] = 17;
            values[valuesById[18] = "TickerType_PriorReferencePrice"] = 18;
            values[valuesById[19] = "TickerType_MarketCenterOpenPrice"] = 19;
            values[valuesById[20] = "TickerType_Seller"] = 20;
            values[valuesById[21] = "TickerType_T"] = 21;
            values[valuesById[22] = "TickerType_ExtendedTradingHours"] = 22;
            values[valuesById[23] = "TickerType_Contingent"] = 23;
            values[valuesById[24] = "TickerType_AvgPrice"] = 24;
            values[valuesById[25] = "TickerType_OTCSold"] = 25;
            values[valuesById[26] = "TickerType_OddLotCrossMarket"] = 26;
            values[valuesById[27] = "TickerType_DerivativelyPriced"] = 27;
            values[valuesById[28] = "TickerType_ReOpeningPriced"] = 28;
            values[valuesById[29] = "TickerType_ClosingPriced"] = 29;
            values[valuesById[30] = "TickerType_ComprehensiveDelayPrice"] = 30;
            values[valuesById[31] = "TickerType_Overseas"] = 31;
            return values;
        })();
    
        Qot_Common.DarkStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DarkStatus_None"] = 0;
            values[valuesById[1] = "DarkStatus_Trading"] = 1;
            values[valuesById[2] = "DarkStatus_End"] = 2;
            return values;
        })();
    
        Qot_Common.SecurityStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SecurityStatus_Unknown"] = 0;
            values[valuesById[1] = "SecurityStatus_Normal"] = 1;
            values[valuesById[2] = "SecurityStatus_Listing"] = 2;
            values[valuesById[3] = "SecurityStatus_Purchasing"] = 3;
            values[valuesById[4] = "SecurityStatus_Subscribing"] = 4;
            values[valuesById[5] = "SecurityStatus_BeforeDrakTradeOpening"] = 5;
            values[valuesById[6] = "SecurityStatus_DrakTrading"] = 6;
            values[valuesById[7] = "SecurityStatus_DrakTradeEnd"] = 7;
            values[valuesById[8] = "SecurityStatus_ToBeOpen"] = 8;
            values[valuesById[9] = "SecurityStatus_Suspended"] = 9;
            values[valuesById[10] = "SecurityStatus_Called"] = 10;
            values[valuesById[11] = "SecurityStatus_ExpiredLastTradingDate"] = 11;
            values[valuesById[12] = "SecurityStatus_Expired"] = 12;
            values[valuesById[13] = "SecurityStatus_Delisted"] = 13;
            values[valuesById[14] = "SecurityStatus_ChangeToTemporaryCode"] = 14;
            values[valuesById[15] = "SecurityStatus_TemporaryCodeTradeEnd"] = 15;
            values[valuesById[16] = "SecurityStatus_ChangedPlateTradeEnd"] = 16;
            values[valuesById[17] = "SecurityStatus_ChangedCodeTradeEnd"] = 17;
            values[valuesById[18] = "SecurityStatus_RecoverableCircuitBreaker"] = 18;
            values[valuesById[19] = "SecurityStatus_UnRecoverableCircuitBreaker"] = 19;
            values[valuesById[20] = "SecurityStatus_AfterCombination"] = 20;
            values[valuesById[21] = "SecurityStatus_AfterTransation"] = 21;
            return values;
        })();
    
        Qot_Common.HolderCategory = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "HolderCategory_Unknow"] = 0;
            values[valuesById[1] = "HolderCategory_Agency"] = 1;
            values[valuesById[2] = "HolderCategory_Fund"] = 2;
            values[valuesById[3] = "HolderCategory_SeniorManager"] = 3;
            return values;
        })();
    
        Qot_Common.PushDataType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PushDataType_Unknow"] = 0;
            values[valuesById[1] = "PushDataType_Realtime"] = 1;
            values[valuesById[2] = "PushDataType_ByDisConn"] = 2;
            values[valuesById[3] = "PushDataType_Cache"] = 3;
            return values;
        })();
    
        Qot_Common.SortField = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SortField_Unknow"] = 0;
            values[valuesById[1] = "SortField_Code"] = 1;
            values[valuesById[2] = "SortField_CurPrice"] = 2;
            values[valuesById[3] = "SortField_PriceChangeVal"] = 3;
            values[valuesById[4] = "SortField_ChangeRate"] = 4;
            values[valuesById[5] = "SortField_Status"] = 5;
            values[valuesById[6] = "SortField_BidPrice"] = 6;
            values[valuesById[7] = "SortField_AskPrice"] = 7;
            values[valuesById[8] = "SortField_BidVol"] = 8;
            values[valuesById[9] = "SortField_AskVol"] = 9;
            values[valuesById[10] = "SortField_Volume"] = 10;
            values[valuesById[11] = "SortField_Turnover"] = 11;
            values[valuesById[30] = "SortField_Amplitude"] = 30;
            values[valuesById[12] = "SortField_Score"] = 12;
            values[valuesById[13] = "SortField_Premium"] = 13;
            values[valuesById[14] = "SortField_EffectiveLeverage"] = 14;
            values[valuesById[15] = "SortField_Delta"] = 15;
            values[valuesById[16] = "SortField_ImpliedVolatility"] = 16;
            values[valuesById[17] = "SortField_Type"] = 17;
            values[valuesById[18] = "SortField_StrikePrice"] = 18;
            values[valuesById[19] = "SortField_BreakEvenPoint"] = 19;
            values[valuesById[20] = "SortField_MaturityTime"] = 20;
            values[valuesById[21] = "SortField_ListTime"] = 21;
            values[valuesById[22] = "SortField_LastTradeTime"] = 22;
            values[valuesById[23] = "SortField_Leverage"] = 23;
            values[valuesById[24] = "SortField_InOutMoney"] = 24;
            values[valuesById[25] = "SortField_RecoveryPrice"] = 25;
            values[valuesById[26] = "SortField_ChangePrice"] = 26;
            values[valuesById[27] = "SortField_Change"] = 27;
            values[valuesById[28] = "SortField_StreetRate"] = 28;
            values[valuesById[29] = "SortField_StreetVol"] = 29;
            values[valuesById[31] = "SortField_WarrantName"] = 31;
            values[valuesById[32] = "SortField_Issuer"] = 32;
            values[valuesById[33] = "SortField_LotSize"] = 33;
            values[valuesById[34] = "SortField_IssueSize"] = 34;
            values[valuesById[45] = "SortField_UpperStrikePrice"] = 45;
            values[valuesById[46] = "SortField_LowerStrikePrice"] = 46;
            values[valuesById[47] = "SortField_InLinePriceStatus"] = 47;
            values[valuesById[35] = "SortField_PreCurPrice"] = 35;
            values[valuesById[36] = "SortField_AfterCurPrice"] = 36;
            values[valuesById[37] = "SortField_PrePriceChangeVal"] = 37;
            values[valuesById[38] = "SortField_AfterPriceChangeVal"] = 38;
            values[valuesById[39] = "SortField_PreChangeRate"] = 39;
            values[valuesById[40] = "SortField_AfterChangeRate"] = 40;
            values[valuesById[41] = "SortField_PreAmplitude"] = 41;
            values[valuesById[42] = "SortField_AfterAmplitude"] = 42;
            values[valuesById[43] = "SortField_PreTurnover"] = 43;
            values[valuesById[44] = "SortField_AfterTurnover"] = 44;
            values[valuesById[48] = "SortField_LastSettlePrice"] = 48;
            values[valuesById[49] = "SortField_Position"] = 49;
            values[valuesById[50] = "SortField_PositionChange"] = 50;
            return values;
        })();
    
        Qot_Common.Issuer = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Issuer_Unknow"] = 0;
            values[valuesById[1] = "Issuer_SG"] = 1;
            values[valuesById[2] = "Issuer_BP"] = 2;
            values[valuesById[3] = "Issuer_CS"] = 3;
            values[valuesById[4] = "Issuer_CT"] = 4;
            values[valuesById[5] = "Issuer_EA"] = 5;
            values[valuesById[6] = "Issuer_GS"] = 6;
            values[valuesById[7] = "Issuer_HS"] = 7;
            values[valuesById[8] = "Issuer_JP"] = 8;
            values[valuesById[9] = "Issuer_MB"] = 9;
            values[valuesById[10] = "Issuer_SC"] = 10;
            values[valuesById[11] = "Issuer_UB"] = 11;
            values[valuesById[12] = "Issuer_BI"] = 12;
            values[valuesById[13] = "Issuer_DB"] = 13;
            values[valuesById[14] = "Issuer_DC"] = 14;
            values[valuesById[15] = "Issuer_ML"] = 15;
            values[valuesById[16] = "Issuer_NM"] = 16;
            values[valuesById[17] = "Issuer_RB"] = 17;
            values[valuesById[18] = "Issuer_RS"] = 18;
            values[valuesById[19] = "Issuer_BC"] = 19;
            values[valuesById[20] = "Issuer_HT"] = 20;
            values[valuesById[21] = "Issuer_VT"] = 21;
            values[valuesById[22] = "Issuer_KC"] = 22;
            values[valuesById[23] = "Issuer_MS"] = 23;
            values[valuesById[24] = "Issuer_GJ"] = 24;
            values[valuesById[25] = "Issuer_XZ"] = 25;
            values[valuesById[26] = "Issuer_HU"] = 26;
            values[valuesById[27] = "Issuer_KS"] = 27;
            values[valuesById[28] = "Issuer_CI"] = 28;
            return values;
        })();
    
        Qot_Common.IpoPeriod = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IpoPeriod_Unknow"] = 0;
            values[valuesById[1] = "IpoPeriod_Today"] = 1;
            values[valuesById[2] = "IpoPeriod_Tomorrow"] = 2;
            values[valuesById[3] = "IpoPeriod_Nextweek"] = 3;
            values[valuesById[4] = "IpoPeriod_Lastweek"] = 4;
            values[valuesById[5] = "IpoPeriod_Lastmonth"] = 5;
            return values;
        })();
    
        Qot_Common.PriceType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PriceType_Unknow"] = 0;
            values[valuesById[1] = "PriceType_Outside"] = 1;
            values[valuesById[2] = "PriceType_WithIn"] = 2;
            return values;
        })();
    
        Qot_Common.WarrantStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WarrantStatus_Unknow"] = 0;
            values[valuesById[1] = "WarrantStatus_Normal"] = 1;
            values[valuesById[2] = "WarrantStatus_Suspend"] = 2;
            values[valuesById[3] = "WarrantStatus_StopTrade"] = 3;
            values[valuesById[4] = "WarrantStatus_PendingListing"] = 4;
            return values;
        })();
    
        Qot_Common.CompanyAct = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CompanyAct_None"] = 0;
            values[valuesById[1] = "CompanyAct_Split"] = 1;
            values[valuesById[2] = "CompanyAct_Join"] = 2;
            values[valuesById[4] = "CompanyAct_Bonus"] = 4;
            values[valuesById[8] = "CompanyAct_Transfer"] = 8;
            values[valuesById[16] = "CompanyAct_Allot"] = 16;
            values[valuesById[32] = "CompanyAct_Add"] = 32;
            values[valuesById[64] = "CompanyAct_Dividend"] = 64;
            values[valuesById[128] = "CompanyAct_SPDividend"] = 128;
            return values;
        })();
    
        Qot_Common.QotRight = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "QotRight_Unknow"] = 0;
            values[valuesById[1] = "QotRight_Bmp"] = 1;
            values[valuesById[2] = "QotRight_Level1"] = 2;
            values[valuesById[3] = "QotRight_Level2"] = 3;
            values[valuesById[4] = "QotRight_SF"] = 4;
            values[valuesById[5] = "QotRight_No"] = 5;
            return values;
        })();
    
        Qot_Common.PriceReminderType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PriceReminderType_Unknown"] = 0;
            values[valuesById[1] = "PriceReminderType_PriceUp"] = 1;
            values[valuesById[2] = "PriceReminderType_PriceDown"] = 2;
            values[valuesById[3] = "PriceReminderType_ChangeRateUp"] = 3;
            values[valuesById[4] = "PriceReminderType_ChangeRateDown"] = 4;
            values[valuesById[5] = "PriceReminderType_5MinChangeRateUp"] = 5;
            values[valuesById[6] = "PriceReminderType_5MinChangeRateDown"] = 6;
            values[valuesById[7] = "PriceReminderType_VolumeUp"] = 7;
            values[valuesById[8] = "PriceReminderType_TurnoverUp"] = 8;
            values[valuesById[9] = "PriceReminderType_TurnoverRateUp"] = 9;
            values[valuesById[10] = "PriceReminderType_BidPriceUp"] = 10;
            values[valuesById[11] = "PriceReminderType_AskPriceDown"] = 11;
            values[valuesById[12] = "PriceReminderType_BidVolUp"] = 12;
            values[valuesById[13] = "PriceReminderType_AskVolUp"] = 13;
            values[valuesById[14] = "PriceReminderType_3MinChangeRateUp"] = 14;
            values[valuesById[15] = "PriceReminderType_3MinChangeRateDown"] = 15;
            return values;
        })();
    
        Qot_Common.PriceReminderFreq = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PriceReminderFreq_Unknown"] = 0;
            values[valuesById[1] = "PriceReminderFreq_Always"] = 1;
            values[valuesById[2] = "PriceReminderFreq_OnceADay"] = 2;
            values[valuesById[3] = "PriceReminderFreq_OnlyOnce"] = 3;
            return values;
        })();
    
        Qot_Common.AssetClass = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AssetClass_Unknow"] = 0;
            values[valuesById[1] = "AssetClass_Stock"] = 1;
            values[valuesById[2] = "AssetClass_Bond"] = 2;
            values[valuesById[3] = "AssetClass_Commodity"] = 3;
            values[valuesById[4] = "AssetClass_CurrencyMarket"] = 4;
            values[valuesById[5] = "AssetClass_Future"] = 5;
            values[valuesById[6] = "AssetClass_Swap"] = 6;
            return values;
        })();
    
        Qot_Common.ExpirationCycle = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ExpirationCycle_Unknown"] = 0;
            values[valuesById[1] = "ExpirationCycle_Week"] = 1;
            values[valuesById[2] = "ExpirationCycle_Month"] = 2;
            values[valuesById[3] = "ExpirationCycle_MonthEnd"] = 3;
            values[valuesById[4] = "ExpirationCycle_Quarter"] = 4;
            values[valuesById[11] = "ExpirationCycle_WeekMon"] = 11;
            values[valuesById[12] = "ExpirationCycle_WeekTue"] = 12;
            values[valuesById[13] = "ExpirationCycle_WeekWed"] = 13;
            values[valuesById[14] = "ExpirationCycle_WeekThu"] = 14;
            values[valuesById[15] = "ExpirationCycle_WeekFri"] = 15;
            return values;
        })();
    
        Qot_Common.OptionStandardType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OptionStandardType_Unknown"] = 0;
            values[valuesById[1] = "OptionStandardType_Standard"] = 1;
            values[valuesById[2] = "OptionStandardType_NonStandard"] = 2;
            return values;
        })();
    
        Qot_Common.OptionSettlementMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OptionSettlementMode_Unknown"] = 0;
            values[valuesById[1] = "OptionSettlementMode_AM"] = 1;
            values[valuesById[2] = "OptionSettlementMode_PM"] = 2;
            return values;
        })();
    
        Qot_Common.ExchType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ExchType_Unknown"] = 0;
            values[valuesById[1] = "ExchType_HK_MainBoard"] = 1;
            values[valuesById[2] = "ExchType_HK_GEMBoard"] = 2;
            values[valuesById[3] = "ExchType_HK_HKEX"] = 3;
            values[valuesById[4] = "ExchType_US_NYSE"] = 4;
            values[valuesById[5] = "ExchType_US_Nasdaq"] = 5;
            values[valuesById[6] = "ExchType_US_Pink"] = 6;
            values[valuesById[7] = "ExchType_US_AMEX"] = 7;
            values[valuesById[8] = "ExchType_US_Option"] = 8;
            values[valuesById[9] = "ExchType_US_NYMEX"] = 9;
            values[valuesById[10] = "ExchType_US_COMEX"] = 10;
            values[valuesById[11] = "ExchType_US_CBOT"] = 11;
            values[valuesById[12] = "ExchType_US_CME"] = 12;
            values[valuesById[13] = "ExchType_US_CBOE"] = 13;
            values[valuesById[14] = "ExchType_CN_SH"] = 14;
            values[valuesById[15] = "ExchType_CN_SZ"] = 15;
            values[valuesById[16] = "ExchType_CN_STIB"] = 16;
            values[valuesById[17] = "ExchType_SG_SGX"] = 17;
            values[valuesById[18] = "ExchType_JP_OSE"] = 18;
            return values;
        })();
    
        Qot_Common.PeriodType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PeriodType_Unknown"] = 0;
            values[valuesById[1] = "PeriodType_INTRADAY"] = 1;
            values[valuesById[2] = "PeriodType_DAY"] = 2;
            values[valuesById[3] = "PeriodType_WEEK"] = 3;
            values[valuesById[4] = "PeriodType_MONTH"] = 4;
            return values;
        })();
    
        Qot_Common.PriceReminderMarketStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PriceReminderMarketStatus_Unknow"] = 0;
            values[valuesById[1] = "PriceReminderMarketStatus_Open"] = 1;
            values[valuesById[2] = "PriceReminderMarketStatus_USPre"] = 2;
            values[valuesById[3] = "PriceReminderMarketStatus_USAfter"] = 3;
            values[valuesById[4] = "PriceReminderMarketStatus_USOverNight"] = 4;
            return values;
        })();
    
        Qot_Common.Security = (function() {
    
            function Security(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Security.prototype.market = 0;
            Security.prototype.code = "";
    
            Security.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(8).int32(m.market);
                if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                    w.uint32(18).string(m.code);
                return w;
            };
    
            Security.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.Security();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.market = r.int32();
                            break;
                        }
                    case 2: {
                            m.code = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Security;
        })();
    
        Qot_Common.KLine = (function() {
    
            function KLine(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            KLine.prototype.time = "";
            KLine.prototype.isBlank = false;
            KLine.prototype.highPrice = 0;
            KLine.prototype.openPrice = 0;
            KLine.prototype.lowPrice = 0;
            KLine.prototype.closePrice = 0;
            KLine.prototype.lastClosePrice = 0;
            KLine.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            KLine.prototype.turnover = 0;
            KLine.prototype.turnoverRate = 0;
            KLine.prototype.pe = 0;
            KLine.prototype.changeRate = 0;
            KLine.prototype.timestamp = 0;
    
            KLine.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(10).string(m.time);
                if (m.isBlank != null && Object.hasOwnProperty.call(m, "isBlank"))
                    w.uint32(16).bool(m.isBlank);
                if (m.highPrice != null && Object.hasOwnProperty.call(m, "highPrice"))
                    w.uint32(25).double(m.highPrice);
                if (m.openPrice != null && Object.hasOwnProperty.call(m, "openPrice"))
                    w.uint32(33).double(m.openPrice);
                if (m.lowPrice != null && Object.hasOwnProperty.call(m, "lowPrice"))
                    w.uint32(41).double(m.lowPrice);
                if (m.closePrice != null && Object.hasOwnProperty.call(m, "closePrice"))
                    w.uint32(49).double(m.closePrice);
                if (m.lastClosePrice != null && Object.hasOwnProperty.call(m, "lastClosePrice"))
                    w.uint32(57).double(m.lastClosePrice);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(64).int64(m.volume);
                if (m.turnover != null && Object.hasOwnProperty.call(m, "turnover"))
                    w.uint32(73).double(m.turnover);
                if (m.turnoverRate != null && Object.hasOwnProperty.call(m, "turnoverRate"))
                    w.uint32(81).double(m.turnoverRate);
                if (m.pe != null && Object.hasOwnProperty.call(m, "pe"))
                    w.uint32(89).double(m.pe);
                if (m.changeRate != null && Object.hasOwnProperty.call(m, "changeRate"))
                    w.uint32(97).double(m.changeRate);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(105).double(m.timestamp);
                return w;
            };
    
            KLine.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.KLine();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.time = r.string();
                            break;
                        }
                    case 2: {
                            m.isBlank = r.bool();
                            break;
                        }
                    case 3: {
                            m.highPrice = r.double();
                            break;
                        }
                    case 4: {
                            m.openPrice = r.double();
                            break;
                        }
                    case 5: {
                            m.lowPrice = r.double();
                            break;
                        }
                    case 6: {
                            m.closePrice = r.double();
                            break;
                        }
                    case 7: {
                            m.lastClosePrice = r.double();
                            break;
                        }
                    case 8: {
                            m.volume = r.int64();
                            break;
                        }
                    case 9: {
                            m.turnover = r.double();
                            break;
                        }
                    case 10: {
                            m.turnoverRate = r.double();
                            break;
                        }
                    case 11: {
                            m.pe = r.double();
                            break;
                        }
                    case 12: {
                            m.changeRate = r.double();
                            break;
                        }
                    case 13: {
                            m.timestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return KLine;
        })();
    
        Qot_Common.OptionBasicQotExData = (function() {
    
            function OptionBasicQotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OptionBasicQotExData.prototype.strikePrice = 0;
            OptionBasicQotExData.prototype.contractSize = 0;
            OptionBasicQotExData.prototype.contractSizeFloat = 0;
            OptionBasicQotExData.prototype.openInterest = 0;
            OptionBasicQotExData.prototype.impliedVolatility = 0;
            OptionBasicQotExData.prototype.premium = 0;
            OptionBasicQotExData.prototype.delta = 0;
            OptionBasicQotExData.prototype.gamma = 0;
            OptionBasicQotExData.prototype.vega = 0;
            OptionBasicQotExData.prototype.theta = 0;
            OptionBasicQotExData.prototype.rho = 0;
            OptionBasicQotExData.prototype.netOpenInterest = 0;
            OptionBasicQotExData.prototype.expiryDateDistance = 0;
            OptionBasicQotExData.prototype.contractNominalValue = 0;
            OptionBasicQotExData.prototype.ownerLotMultiplier = 0;
            OptionBasicQotExData.prototype.optionAreaType = 0;
            OptionBasicQotExData.prototype.contractMultiplier = 0;
            OptionBasicQotExData.prototype.indexOptionType = 0;
    
            OptionBasicQotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.strikePrice != null && Object.hasOwnProperty.call(m, "strikePrice"))
                    w.uint32(9).double(m.strikePrice);
                if (m.contractSize != null && Object.hasOwnProperty.call(m, "contractSize"))
                    w.uint32(16).int32(m.contractSize);
                if (m.openInterest != null && Object.hasOwnProperty.call(m, "openInterest"))
                    w.uint32(24).int32(m.openInterest);
                if (m.impliedVolatility != null && Object.hasOwnProperty.call(m, "impliedVolatility"))
                    w.uint32(33).double(m.impliedVolatility);
                if (m.premium != null && Object.hasOwnProperty.call(m, "premium"))
                    w.uint32(41).double(m.premium);
                if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
                    w.uint32(49).double(m.delta);
                if (m.gamma != null && Object.hasOwnProperty.call(m, "gamma"))
                    w.uint32(57).double(m.gamma);
                if (m.vega != null && Object.hasOwnProperty.call(m, "vega"))
                    w.uint32(65).double(m.vega);
                if (m.theta != null && Object.hasOwnProperty.call(m, "theta"))
                    w.uint32(73).double(m.theta);
                if (m.rho != null && Object.hasOwnProperty.call(m, "rho"))
                    w.uint32(81).double(m.rho);
                if (m.netOpenInterest != null && Object.hasOwnProperty.call(m, "netOpenInterest"))
                    w.uint32(88).int32(m.netOpenInterest);
                if (m.expiryDateDistance != null && Object.hasOwnProperty.call(m, "expiryDateDistance"))
                    w.uint32(96).int32(m.expiryDateDistance);
                if (m.contractNominalValue != null && Object.hasOwnProperty.call(m, "contractNominalValue"))
                    w.uint32(105).double(m.contractNominalValue);
                if (m.ownerLotMultiplier != null && Object.hasOwnProperty.call(m, "ownerLotMultiplier"))
                    w.uint32(113).double(m.ownerLotMultiplier);
                if (m.optionAreaType != null && Object.hasOwnProperty.call(m, "optionAreaType"))
                    w.uint32(120).int32(m.optionAreaType);
                if (m.contractMultiplier != null && Object.hasOwnProperty.call(m, "contractMultiplier"))
                    w.uint32(129).double(m.contractMultiplier);
                if (m.contractSizeFloat != null && Object.hasOwnProperty.call(m, "contractSizeFloat"))
                    w.uint32(137).double(m.contractSizeFloat);
                if (m.indexOptionType != null && Object.hasOwnProperty.call(m, "indexOptionType"))
                    w.uint32(144).int32(m.indexOptionType);
                return w;
            };
    
            OptionBasicQotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.OptionBasicQotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.strikePrice = r.double();
                            break;
                        }
                    case 2: {
                            m.contractSize = r.int32();
                            break;
                        }
                    case 17: {
                            m.contractSizeFloat = r.double();
                            break;
                        }
                    case 3: {
                            m.openInterest = r.int32();
                            break;
                        }
                    case 4: {
                            m.impliedVolatility = r.double();
                            break;
                        }
                    case 5: {
                            m.premium = r.double();
                            break;
                        }
                    case 6: {
                            m.delta = r.double();
                            break;
                        }
                    case 7: {
                            m.gamma = r.double();
                            break;
                        }
                    case 8: {
                            m.vega = r.double();
                            break;
                        }
                    case 9: {
                            m.theta = r.double();
                            break;
                        }
                    case 10: {
                            m.rho = r.double();
                            break;
                        }
                    case 11: {
                            m.netOpenInterest = r.int32();
                            break;
                        }
                    case 12: {
                            m.expiryDateDistance = r.int32();
                            break;
                        }
                    case 13: {
                            m.contractNominalValue = r.double();
                            break;
                        }
                    case 14: {
                            m.ownerLotMultiplier = r.double();
                            break;
                        }
                    case 15: {
                            m.optionAreaType = r.int32();
                            break;
                        }
                    case 16: {
                            m.contractMultiplier = r.double();
                            break;
                        }
                    case 18: {
                            m.indexOptionType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OptionBasicQotExData;
        })();
    
        Qot_Common.PreAfterMarketData = (function() {
    
            function PreAfterMarketData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            PreAfterMarketData.prototype.price = 0;
            PreAfterMarketData.prototype.highPrice = 0;
            PreAfterMarketData.prototype.lowPrice = 0;
            PreAfterMarketData.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            PreAfterMarketData.prototype.turnover = 0;
            PreAfterMarketData.prototype.changeVal = 0;
            PreAfterMarketData.prototype.changeRate = 0;
            PreAfterMarketData.prototype.amplitude = 0;
    
            PreAfterMarketData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(9).double(m.price);
                if (m.highPrice != null && Object.hasOwnProperty.call(m, "highPrice"))
                    w.uint32(17).double(m.highPrice);
                if (m.lowPrice != null && Object.hasOwnProperty.call(m, "lowPrice"))
                    w.uint32(25).double(m.lowPrice);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(32).int64(m.volume);
                if (m.turnover != null && Object.hasOwnProperty.call(m, "turnover"))
                    w.uint32(41).double(m.turnover);
                if (m.changeVal != null && Object.hasOwnProperty.call(m, "changeVal"))
                    w.uint32(49).double(m.changeVal);
                if (m.changeRate != null && Object.hasOwnProperty.call(m, "changeRate"))
                    w.uint32(57).double(m.changeRate);
                if (m.amplitude != null && Object.hasOwnProperty.call(m, "amplitude"))
                    w.uint32(65).double(m.amplitude);
                return w;
            };
    
            PreAfterMarketData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.PreAfterMarketData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.price = r.double();
                            break;
                        }
                    case 2: {
                            m.highPrice = r.double();
                            break;
                        }
                    case 3: {
                            m.lowPrice = r.double();
                            break;
                        }
                    case 4: {
                            m.volume = r.int64();
                            break;
                        }
                    case 5: {
                            m.turnover = r.double();
                            break;
                        }
                    case 6: {
                            m.changeVal = r.double();
                            break;
                        }
                    case 7: {
                            m.changeRate = r.double();
                            break;
                        }
                    case 8: {
                            m.amplitude = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return PreAfterMarketData;
        })();
    
        Qot_Common.FutureBasicQotExData = (function() {
    
            function FutureBasicQotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            FutureBasicQotExData.prototype.lastSettlePrice = 0;
            FutureBasicQotExData.prototype.position = 0;
            FutureBasicQotExData.prototype.positionChange = 0;
            FutureBasicQotExData.prototype.expiryDateDistance = 0;
    
            FutureBasicQotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.lastSettlePrice != null && Object.hasOwnProperty.call(m, "lastSettlePrice"))
                    w.uint32(9).double(m.lastSettlePrice);
                if (m.position != null && Object.hasOwnProperty.call(m, "position"))
                    w.uint32(16).int32(m.position);
                if (m.positionChange != null && Object.hasOwnProperty.call(m, "positionChange"))
                    w.uint32(24).int32(m.positionChange);
                if (m.expiryDateDistance != null && Object.hasOwnProperty.call(m, "expiryDateDistance"))
                    w.uint32(32).int32(m.expiryDateDistance);
                return w;
            };
    
            FutureBasicQotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.FutureBasicQotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.lastSettlePrice = r.double();
                            break;
                        }
                    case 2: {
                            m.position = r.int32();
                            break;
                        }
                    case 3: {
                            m.positionChange = r.int32();
                            break;
                        }
                    case 4: {
                            m.expiryDateDistance = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return FutureBasicQotExData;
        })();
    
        Qot_Common.WarrantBasicQotExData = (function() {
    
            function WarrantBasicQotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            WarrantBasicQotExData.prototype.delta = 0;
            WarrantBasicQotExData.prototype.impliedVolatility = 0;
            WarrantBasicQotExData.prototype.premium = 0;
    
            WarrantBasicQotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
                    w.uint32(9).double(m.delta);
                if (m.impliedVolatility != null && Object.hasOwnProperty.call(m, "impliedVolatility"))
                    w.uint32(17).double(m.impliedVolatility);
                if (m.premium != null && Object.hasOwnProperty.call(m, "premium"))
                    w.uint32(25).double(m.premium);
                return w;
            };
    
            WarrantBasicQotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.WarrantBasicQotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.delta = r.double();
                            break;
                        }
                    case 2: {
                            m.impliedVolatility = r.double();
                            break;
                        }
                    case 3: {
                            m.premium = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return WarrantBasicQotExData;
        })();
    
        Qot_Common.BasicQot = (function() {
    
            function BasicQot(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            BasicQot.prototype.security = null;
            BasicQot.prototype.name = "";
            BasicQot.prototype.isSuspended = false;
            BasicQot.prototype.listTime = "";
            BasicQot.prototype.priceSpread = 0;
            BasicQot.prototype.updateTime = "";
            BasicQot.prototype.highPrice = 0;
            BasicQot.prototype.openPrice = 0;
            BasicQot.prototype.lowPrice = 0;
            BasicQot.prototype.curPrice = 0;
            BasicQot.prototype.lastClosePrice = 0;
            BasicQot.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            BasicQot.prototype.turnover = 0;
            BasicQot.prototype.turnoverRate = 0;
            BasicQot.prototype.amplitude = 0;
            BasicQot.prototype.darkStatus = 0;
            BasicQot.prototype.optionExData = null;
            BasicQot.prototype.listTimestamp = 0;
            BasicQot.prototype.updateTimestamp = 0;
            BasicQot.prototype.preMarket = null;
            BasicQot.prototype.afterMarket = null;
            BasicQot.prototype.secStatus = 0;
            BasicQot.prototype.futureExData = null;
            BasicQot.prototype.warrantExData = null;
            BasicQot.prototype.overnight = null;
    
            BasicQot.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.isSuspended != null && Object.hasOwnProperty.call(m, "isSuspended"))
                    w.uint32(16).bool(m.isSuspended);
                if (m.listTime != null && Object.hasOwnProperty.call(m, "listTime"))
                    w.uint32(26).string(m.listTime);
                if (m.priceSpread != null && Object.hasOwnProperty.call(m, "priceSpread"))
                    w.uint32(33).double(m.priceSpread);
                if (m.updateTime != null && Object.hasOwnProperty.call(m, "updateTime"))
                    w.uint32(42).string(m.updateTime);
                if (m.highPrice != null && Object.hasOwnProperty.call(m, "highPrice"))
                    w.uint32(49).double(m.highPrice);
                if (m.openPrice != null && Object.hasOwnProperty.call(m, "openPrice"))
                    w.uint32(57).double(m.openPrice);
                if (m.lowPrice != null && Object.hasOwnProperty.call(m, "lowPrice"))
                    w.uint32(65).double(m.lowPrice);
                if (m.curPrice != null && Object.hasOwnProperty.call(m, "curPrice"))
                    w.uint32(73).double(m.curPrice);
                if (m.lastClosePrice != null && Object.hasOwnProperty.call(m, "lastClosePrice"))
                    w.uint32(81).double(m.lastClosePrice);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(88).int64(m.volume);
                if (m.turnover != null && Object.hasOwnProperty.call(m, "turnover"))
                    w.uint32(97).double(m.turnover);
                if (m.turnoverRate != null && Object.hasOwnProperty.call(m, "turnoverRate"))
                    w.uint32(105).double(m.turnoverRate);
                if (m.amplitude != null && Object.hasOwnProperty.call(m, "amplitude"))
                    w.uint32(113).double(m.amplitude);
                if (m.darkStatus != null && Object.hasOwnProperty.call(m, "darkStatus"))
                    w.uint32(120).int32(m.darkStatus);
                if (m.optionExData != null && Object.hasOwnProperty.call(m, "optionExData"))
                    $root.Qot_Common.OptionBasicQotExData.encode(m.optionExData, w.uint32(130).fork()).ldelim();
                if (m.listTimestamp != null && Object.hasOwnProperty.call(m, "listTimestamp"))
                    w.uint32(137).double(m.listTimestamp);
                if (m.updateTimestamp != null && Object.hasOwnProperty.call(m, "updateTimestamp"))
                    w.uint32(145).double(m.updateTimestamp);
                if (m.preMarket != null && Object.hasOwnProperty.call(m, "preMarket"))
                    $root.Qot_Common.PreAfterMarketData.encode(m.preMarket, w.uint32(154).fork()).ldelim();
                if (m.afterMarket != null && Object.hasOwnProperty.call(m, "afterMarket"))
                    $root.Qot_Common.PreAfterMarketData.encode(m.afterMarket, w.uint32(162).fork()).ldelim();
                if (m.secStatus != null && Object.hasOwnProperty.call(m, "secStatus"))
                    w.uint32(168).int32(m.secStatus);
                if (m.futureExData != null && Object.hasOwnProperty.call(m, "futureExData"))
                    $root.Qot_Common.FutureBasicQotExData.encode(m.futureExData, w.uint32(178).fork()).ldelim();
                if (m.warrantExData != null && Object.hasOwnProperty.call(m, "warrantExData"))
                    $root.Qot_Common.WarrantBasicQotExData.encode(m.warrantExData, w.uint32(186).fork()).ldelim();
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(194).string(m.name);
                if (m.overnight != null && Object.hasOwnProperty.call(m, "overnight"))
                    $root.Qot_Common.PreAfterMarketData.encode(m.overnight, w.uint32(202).fork()).ldelim();
                return w;
            };
    
            BasicQot.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.BasicQot();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 24: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            m.isSuspended = r.bool();
                            break;
                        }
                    case 3: {
                            m.listTime = r.string();
                            break;
                        }
                    case 4: {
                            m.priceSpread = r.double();
                            break;
                        }
                    case 5: {
                            m.updateTime = r.string();
                            break;
                        }
                    case 6: {
                            m.highPrice = r.double();
                            break;
                        }
                    case 7: {
                            m.openPrice = r.double();
                            break;
                        }
                    case 8: {
                            m.lowPrice = r.double();
                            break;
                        }
                    case 9: {
                            m.curPrice = r.double();
                            break;
                        }
                    case 10: {
                            m.lastClosePrice = r.double();
                            break;
                        }
                    case 11: {
                            m.volume = r.int64();
                            break;
                        }
                    case 12: {
                            m.turnover = r.double();
                            break;
                        }
                    case 13: {
                            m.turnoverRate = r.double();
                            break;
                        }
                    case 14: {
                            m.amplitude = r.double();
                            break;
                        }
                    case 15: {
                            m.darkStatus = r.int32();
                            break;
                        }
                    case 16: {
                            m.optionExData = $root.Qot_Common.OptionBasicQotExData.decode(r, r.uint32());
                            break;
                        }
                    case 17: {
                            m.listTimestamp = r.double();
                            break;
                        }
                    case 18: {
                            m.updateTimestamp = r.double();
                            break;
                        }
                    case 19: {
                            m.preMarket = $root.Qot_Common.PreAfterMarketData.decode(r, r.uint32());
                            break;
                        }
                    case 20: {
                            m.afterMarket = $root.Qot_Common.PreAfterMarketData.decode(r, r.uint32());
                            break;
                        }
                    case 21: {
                            m.secStatus = r.int32();
                            break;
                        }
                    case 22: {
                            m.futureExData = $root.Qot_Common.FutureBasicQotExData.decode(r, r.uint32());
                            break;
                        }
                    case 23: {
                            m.warrantExData = $root.Qot_Common.WarrantBasicQotExData.decode(r, r.uint32());
                            break;
                        }
                    case 25: {
                            m.overnight = $root.Qot_Common.PreAfterMarketData.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return BasicQot;
        })();
    
        Qot_Common.TimeShare = (function() {
    
            function TimeShare(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            TimeShare.prototype.time = "";
            TimeShare.prototype.minute = 0;
            TimeShare.prototype.isBlank = false;
            TimeShare.prototype.price = 0;
            TimeShare.prototype.lastClosePrice = 0;
            TimeShare.prototype.avgPrice = 0;
            TimeShare.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            TimeShare.prototype.turnover = 0;
            TimeShare.prototype.timestamp = 0;
    
            TimeShare.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(10).string(m.time);
                if (m.minute != null && Object.hasOwnProperty.call(m, "minute"))
                    w.uint32(16).int32(m.minute);
                if (m.isBlank != null && Object.hasOwnProperty.call(m, "isBlank"))
                    w.uint32(24).bool(m.isBlank);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(33).double(m.price);
                if (m.lastClosePrice != null && Object.hasOwnProperty.call(m, "lastClosePrice"))
                    w.uint32(41).double(m.lastClosePrice);
                if (m.avgPrice != null && Object.hasOwnProperty.call(m, "avgPrice"))
                    w.uint32(49).double(m.avgPrice);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(56).int64(m.volume);
                if (m.turnover != null && Object.hasOwnProperty.call(m, "turnover"))
                    w.uint32(65).double(m.turnover);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(73).double(m.timestamp);
                return w;
            };
    
            TimeShare.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.TimeShare();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.time = r.string();
                            break;
                        }
                    case 2: {
                            m.minute = r.int32();
                            break;
                        }
                    case 3: {
                            m.isBlank = r.bool();
                            break;
                        }
                    case 4: {
                            m.price = r.double();
                            break;
                        }
                    case 5: {
                            m.lastClosePrice = r.double();
                            break;
                        }
                    case 6: {
                            m.avgPrice = r.double();
                            break;
                        }
                    case 7: {
                            m.volume = r.int64();
                            break;
                        }
                    case 8: {
                            m.turnover = r.double();
                            break;
                        }
                    case 9: {
                            m.timestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return TimeShare;
        })();
    
        Qot_Common.SecurityStaticBasic = (function() {
    
            function SecurityStaticBasic(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            SecurityStaticBasic.prototype.security = null;
            SecurityStaticBasic.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            SecurityStaticBasic.prototype.lotSize = 0;
            SecurityStaticBasic.prototype.secType = 0;
            SecurityStaticBasic.prototype.name = "";
            SecurityStaticBasic.prototype.listTime = "";
            SecurityStaticBasic.prototype.delisting = false;
            SecurityStaticBasic.prototype.listTimestamp = 0;
            SecurityStaticBasic.prototype.exchType = 0;
    
            SecurityStaticBasic.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                    w.uint32(16).int64(m.id);
                if (m.lotSize != null && Object.hasOwnProperty.call(m, "lotSize"))
                    w.uint32(24).int32(m.lotSize);
                if (m.secType != null && Object.hasOwnProperty.call(m, "secType"))
                    w.uint32(32).int32(m.secType);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(42).string(m.name);
                if (m.listTime != null && Object.hasOwnProperty.call(m, "listTime"))
                    w.uint32(50).string(m.listTime);
                if (m.delisting != null && Object.hasOwnProperty.call(m, "delisting"))
                    w.uint32(56).bool(m.delisting);
                if (m.listTimestamp != null && Object.hasOwnProperty.call(m, "listTimestamp"))
                    w.uint32(65).double(m.listTimestamp);
                if (m.exchType != null && Object.hasOwnProperty.call(m, "exchType"))
                    w.uint32(72).int32(m.exchType);
                return w;
            };
    
            SecurityStaticBasic.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.SecurityStaticBasic();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.id = r.int64();
                            break;
                        }
                    case 3: {
                            m.lotSize = r.int32();
                            break;
                        }
                    case 4: {
                            m.secType = r.int32();
                            break;
                        }
                    case 5: {
                            m.name = r.string();
                            break;
                        }
                    case 6: {
                            m.listTime = r.string();
                            break;
                        }
                    case 7: {
                            m.delisting = r.bool();
                            break;
                        }
                    case 8: {
                            m.listTimestamp = r.double();
                            break;
                        }
                    case 9: {
                            m.exchType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return SecurityStaticBasic;
        })();
    
        Qot_Common.WarrantStaticExData = (function() {
    
            function WarrantStaticExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            WarrantStaticExData.prototype.type = 0;
            WarrantStaticExData.prototype.owner = null;
    
            WarrantStaticExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(18).fork()).ldelim();
                return w;
            };
    
            WarrantStaticExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.WarrantStaticExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.type = r.int32();
                            break;
                        }
                    case 2: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return WarrantStaticExData;
        })();
    
        Qot_Common.OptionStaticExData = (function() {
    
            function OptionStaticExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OptionStaticExData.prototype.type = 0;
            OptionStaticExData.prototype.owner = null;
            OptionStaticExData.prototype.strikeTime = "";
            OptionStaticExData.prototype.strikePrice = 0;
            OptionStaticExData.prototype.suspend = false;
            OptionStaticExData.prototype.market = "";
            OptionStaticExData.prototype.strikeTimestamp = 0;
            OptionStaticExData.prototype.indexOptionType = 0;
            OptionStaticExData.prototype.expirationCycle = 0;
            OptionStaticExData.prototype.optionStandardType = 0;
            OptionStaticExData.prototype.optionSettlementMode = 0;
    
            OptionStaticExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(18).fork()).ldelim();
                if (m.strikeTime != null && Object.hasOwnProperty.call(m, "strikeTime"))
                    w.uint32(26).string(m.strikeTime);
                if (m.strikePrice != null && Object.hasOwnProperty.call(m, "strikePrice"))
                    w.uint32(33).double(m.strikePrice);
                if (m.suspend != null && Object.hasOwnProperty.call(m, "suspend"))
                    w.uint32(40).bool(m.suspend);
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(50).string(m.market);
                if (m.strikeTimestamp != null && Object.hasOwnProperty.call(m, "strikeTimestamp"))
                    w.uint32(57).double(m.strikeTimestamp);
                if (m.indexOptionType != null && Object.hasOwnProperty.call(m, "indexOptionType"))
                    w.uint32(64).int32(m.indexOptionType);
                if (m.expirationCycle != null && Object.hasOwnProperty.call(m, "expirationCycle"))
                    w.uint32(72).int32(m.expirationCycle);
                if (m.optionStandardType != null && Object.hasOwnProperty.call(m, "optionStandardType"))
                    w.uint32(80).int32(m.optionStandardType);
                if (m.optionSettlementMode != null && Object.hasOwnProperty.call(m, "optionSettlementMode"))
                    w.uint32(88).int32(m.optionSettlementMode);
                return w;
            };
    
            OptionStaticExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.OptionStaticExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.type = r.int32();
                            break;
                        }
                    case 2: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.strikeTime = r.string();
                            break;
                        }
                    case 4: {
                            m.strikePrice = r.double();
                            break;
                        }
                    case 5: {
                            m.suspend = r.bool();
                            break;
                        }
                    case 6: {
                            m.market = r.string();
                            break;
                        }
                    case 7: {
                            m.strikeTimestamp = r.double();
                            break;
                        }
                    case 8: {
                            m.indexOptionType = r.int32();
                            break;
                        }
                    case 9: {
                            m.expirationCycle = r.int32();
                            break;
                        }
                    case 10: {
                            m.optionStandardType = r.int32();
                            break;
                        }
                    case 11: {
                            m.optionSettlementMode = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OptionStaticExData;
        })();
    
        Qot_Common.FutureStaticExData = (function() {
    
            function FutureStaticExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            FutureStaticExData.prototype.lastTradeTime = "";
            FutureStaticExData.prototype.lastTradeTimestamp = 0;
            FutureStaticExData.prototype.isMainContract = false;
    
            FutureStaticExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.lastTradeTime != null && Object.hasOwnProperty.call(m, "lastTradeTime"))
                    w.uint32(10).string(m.lastTradeTime);
                if (m.lastTradeTimestamp != null && Object.hasOwnProperty.call(m, "lastTradeTimestamp"))
                    w.uint32(17).double(m.lastTradeTimestamp);
                if (m.isMainContract != null && Object.hasOwnProperty.call(m, "isMainContract"))
                    w.uint32(24).bool(m.isMainContract);
                return w;
            };
    
            FutureStaticExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.FutureStaticExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.lastTradeTime = r.string();
                            break;
                        }
                    case 2: {
                            m.lastTradeTimestamp = r.double();
                            break;
                        }
                    case 3: {
                            m.isMainContract = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return FutureStaticExData;
        })();
    
        Qot_Common.SecurityStaticInfo = (function() {
    
            function SecurityStaticInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            SecurityStaticInfo.prototype.basic = null;
            SecurityStaticInfo.prototype.warrantExData = null;
            SecurityStaticInfo.prototype.optionExData = null;
            SecurityStaticInfo.prototype.futureExData = null;
    
            SecurityStaticInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.basic != null && Object.hasOwnProperty.call(m, "basic"))
                    $root.Qot_Common.SecurityStaticBasic.encode(m.basic, w.uint32(10).fork()).ldelim();
                if (m.warrantExData != null && Object.hasOwnProperty.call(m, "warrantExData"))
                    $root.Qot_Common.WarrantStaticExData.encode(m.warrantExData, w.uint32(18).fork()).ldelim();
                if (m.optionExData != null && Object.hasOwnProperty.call(m, "optionExData"))
                    $root.Qot_Common.OptionStaticExData.encode(m.optionExData, w.uint32(26).fork()).ldelim();
                if (m.futureExData != null && Object.hasOwnProperty.call(m, "futureExData"))
                    $root.Qot_Common.FutureStaticExData.encode(m.futureExData, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            SecurityStaticInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.SecurityStaticInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.basic = $root.Qot_Common.SecurityStaticBasic.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.warrantExData = $root.Qot_Common.WarrantStaticExData.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.optionExData = $root.Qot_Common.OptionStaticExData.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.futureExData = $root.Qot_Common.FutureStaticExData.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return SecurityStaticInfo;
        })();
    
        Qot_Common.Broker = (function() {
    
            function Broker(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Broker.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Broker.prototype.name = "";
            Broker.prototype.pos = 0;
            Broker.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Broker.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            Broker.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                    w.uint32(8).int64(m.id);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(18).string(m.name);
                if (m.pos != null && Object.hasOwnProperty.call(m, "pos"))
                    w.uint32(24).int32(m.pos);
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(32).int64(m.orderID);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(40).int64(m.volume);
                return w;
            };
    
            Broker.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.Broker();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.id = r.int64();
                            break;
                        }
                    case 2: {
                            m.name = r.string();
                            break;
                        }
                    case 3: {
                            m.pos = r.int32();
                            break;
                        }
                    case 4: {
                            m.orderID = r.int64();
                            break;
                        }
                    case 5: {
                            m.volume = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Broker;
        })();
    
        Qot_Common.Ticker = (function() {
    
            function Ticker(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Ticker.prototype.time = "";
            Ticker.prototype.sequence = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Ticker.prototype.dir = 0;
            Ticker.prototype.price = 0;
            Ticker.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Ticker.prototype.turnover = 0;
            Ticker.prototype.recvTime = 0;
            Ticker.prototype.type = 0;
            Ticker.prototype.typeSign = 0;
            Ticker.prototype.pushDataType = 0;
            Ticker.prototype.timestamp = 0;
    
            Ticker.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(10).string(m.time);
                if (m.sequence != null && Object.hasOwnProperty.call(m, "sequence"))
                    w.uint32(16).int64(m.sequence);
                if (m.dir != null && Object.hasOwnProperty.call(m, "dir"))
                    w.uint32(24).int32(m.dir);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(33).double(m.price);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(40).int64(m.volume);
                if (m.turnover != null && Object.hasOwnProperty.call(m, "turnover"))
                    w.uint32(49).double(m.turnover);
                if (m.recvTime != null && Object.hasOwnProperty.call(m, "recvTime"))
                    w.uint32(57).double(m.recvTime);
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(64).int32(m.type);
                if (m.typeSign != null && Object.hasOwnProperty.call(m, "typeSign"))
                    w.uint32(72).int32(m.typeSign);
                if (m.pushDataType != null && Object.hasOwnProperty.call(m, "pushDataType"))
                    w.uint32(80).int32(m.pushDataType);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(89).double(m.timestamp);
                return w;
            };
    
            Ticker.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.Ticker();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.time = r.string();
                            break;
                        }
                    case 2: {
                            m.sequence = r.int64();
                            break;
                        }
                    case 3: {
                            m.dir = r.int32();
                            break;
                        }
                    case 4: {
                            m.price = r.double();
                            break;
                        }
                    case 5: {
                            m.volume = r.int64();
                            break;
                        }
                    case 6: {
                            m.turnover = r.double();
                            break;
                        }
                    case 7: {
                            m.recvTime = r.double();
                            break;
                        }
                    case 8: {
                            m.type = r.int32();
                            break;
                        }
                    case 9: {
                            m.typeSign = r.int32();
                            break;
                        }
                    case 10: {
                            m.pushDataType = r.int32();
                            break;
                        }
                    case 11: {
                            m.timestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Ticker;
        })();
    
        Qot_Common.OrderBookDetail = (function() {
    
            function OrderBookDetail(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OrderBookDetail.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            OrderBookDetail.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            OrderBookDetail.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(8).int64(m.orderID);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(16).int64(m.volume);
                return w;
            };
    
            OrderBookDetail.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.OrderBookDetail();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.orderID = r.int64();
                            break;
                        }
                    case 2: {
                            m.volume = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OrderBookDetail;
        })();
    
        Qot_Common.OrderBook = (function() {
    
            function OrderBook(p) {
                this.detailList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OrderBook.prototype.price = 0;
            OrderBook.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            OrderBook.prototype.orederCount = 0;
            OrderBook.prototype.detailList = $util.emptyArray;
    
            OrderBook.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(9).double(m.price);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(16).int64(m.volume);
                if (m.orederCount != null && Object.hasOwnProperty.call(m, "orederCount"))
                    w.uint32(24).int32(m.orederCount);
                if (m.detailList != null && m.detailList.length) {
                    for (var i = 0; i < m.detailList.length; ++i)
                        $root.Qot_Common.OrderBookDetail.encode(m.detailList[i], w.uint32(34).fork()).ldelim();
                }
                return w;
            };
    
            OrderBook.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.OrderBook();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.price = r.double();
                            break;
                        }
                    case 2: {
                            m.volume = r.int64();
                            break;
                        }
                    case 3: {
                            m.orederCount = r.int32();
                            break;
                        }
                    case 4: {
                            if (!(m.detailList && m.detailList.length))
                                m.detailList = [];
                            m.detailList.push($root.Qot_Common.OrderBookDetail.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OrderBook;
        })();
    
        Qot_Common.ShareHoldingChange = (function() {
    
            function ShareHoldingChange(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            ShareHoldingChange.prototype.holderName = "";
            ShareHoldingChange.prototype.holdingQty = 0;
            ShareHoldingChange.prototype.holdingRatio = 0;
            ShareHoldingChange.prototype.changeQty = 0;
            ShareHoldingChange.prototype.changeRatio = 0;
            ShareHoldingChange.prototype.time = "";
            ShareHoldingChange.prototype.timestamp = 0;
    
            ShareHoldingChange.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.holderName != null && Object.hasOwnProperty.call(m, "holderName"))
                    w.uint32(10).string(m.holderName);
                if (m.holdingQty != null && Object.hasOwnProperty.call(m, "holdingQty"))
                    w.uint32(17).double(m.holdingQty);
                if (m.holdingRatio != null && Object.hasOwnProperty.call(m, "holdingRatio"))
                    w.uint32(25).double(m.holdingRatio);
                if (m.changeQty != null && Object.hasOwnProperty.call(m, "changeQty"))
                    w.uint32(33).double(m.changeQty);
                if (m.changeRatio != null && Object.hasOwnProperty.call(m, "changeRatio"))
                    w.uint32(41).double(m.changeRatio);
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(50).string(m.time);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(57).double(m.timestamp);
                return w;
            };
    
            ShareHoldingChange.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.ShareHoldingChange();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.holderName = r.string();
                            break;
                        }
                    case 2: {
                            m.holdingQty = r.double();
                            break;
                        }
                    case 3: {
                            m.holdingRatio = r.double();
                            break;
                        }
                    case 4: {
                            m.changeQty = r.double();
                            break;
                        }
                    case 5: {
                            m.changeRatio = r.double();
                            break;
                        }
                    case 6: {
                            m.time = r.string();
                            break;
                        }
                    case 7: {
                            m.timestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return ShareHoldingChange;
        })();
    
        Qot_Common.SubInfo = (function() {
    
            function SubInfo(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            SubInfo.prototype.subType = 0;
            SubInfo.prototype.securityList = $util.emptyArray;
    
            SubInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.subType != null && Object.hasOwnProperty.call(m, "subType"))
                    w.uint32(8).int32(m.subType);
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            SubInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.SubInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.subType = r.int32();
                            break;
                        }
                    case 2: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return SubInfo;
        })();
    
        Qot_Common.ConnSubInfo = (function() {
    
            function ConnSubInfo(p) {
                this.subInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            ConnSubInfo.prototype.subInfoList = $util.emptyArray;
            ConnSubInfo.prototype.usedQuota = 0;
            ConnSubInfo.prototype.isOwnConnData = false;
    
            ConnSubInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.subInfoList != null && m.subInfoList.length) {
                    for (var i = 0; i < m.subInfoList.length; ++i)
                        $root.Qot_Common.SubInfo.encode(m.subInfoList[i], w.uint32(10).fork()).ldelim();
                }
                if (m.usedQuota != null && Object.hasOwnProperty.call(m, "usedQuota"))
                    w.uint32(16).int32(m.usedQuota);
                if (m.isOwnConnData != null && Object.hasOwnProperty.call(m, "isOwnConnData"))
                    w.uint32(24).bool(m.isOwnConnData);
                return w;
            };
    
            ConnSubInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.ConnSubInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.subInfoList && m.subInfoList.length))
                                m.subInfoList = [];
                            m.subInfoList.push($root.Qot_Common.SubInfo.decode(r, r.uint32()));
                            break;
                        }
                    case 2: {
                            m.usedQuota = r.int32();
                            break;
                        }
                    case 3: {
                            m.isOwnConnData = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return ConnSubInfo;
        })();
    
        Qot_Common.PlateInfo = (function() {
    
            function PlateInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            PlateInfo.prototype.plate = null;
            PlateInfo.prototype.name = "";
            PlateInfo.prototype.plateType = 0;
    
            PlateInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.plate != null && Object.hasOwnProperty.call(m, "plate"))
                    $root.Qot_Common.Security.encode(m.plate, w.uint32(10).fork()).ldelim();
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(18).string(m.name);
                if (m.plateType != null && Object.hasOwnProperty.call(m, "plateType"))
                    w.uint32(24).int32(m.plateType);
                return w;
            };
    
            PlateInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.PlateInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.plate = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.name = r.string();
                            break;
                        }
                    case 3: {
                            m.plateType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return PlateInfo;
        })();
    
        Qot_Common.Rehab = (function() {
    
            function Rehab(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Rehab.prototype.time = "";
            Rehab.prototype.companyActFlag = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Rehab.prototype.fwdFactorA = 0;
            Rehab.prototype.fwdFactorB = 0;
            Rehab.prototype.bwdFactorA = 0;
            Rehab.prototype.bwdFactorB = 0;
            Rehab.prototype.splitBase = 0;
            Rehab.prototype.splitErt = 0;
            Rehab.prototype.joinBase = 0;
            Rehab.prototype.joinErt = 0;
            Rehab.prototype.bonusBase = 0;
            Rehab.prototype.bonusErt = 0;
            Rehab.prototype.transferBase = 0;
            Rehab.prototype.transferErt = 0;
            Rehab.prototype.allotBase = 0;
            Rehab.prototype.allotErt = 0;
            Rehab.prototype.allotPrice = 0;
            Rehab.prototype.addBase = 0;
            Rehab.prototype.addErt = 0;
            Rehab.prototype.addPrice = 0;
            Rehab.prototype.dividend = 0;
            Rehab.prototype.spDividend = 0;
            Rehab.prototype.timestamp = 0;
    
            Rehab.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(10).string(m.time);
                if (m.companyActFlag != null && Object.hasOwnProperty.call(m, "companyActFlag"))
                    w.uint32(16).int64(m.companyActFlag);
                if (m.fwdFactorA != null && Object.hasOwnProperty.call(m, "fwdFactorA"))
                    w.uint32(25).double(m.fwdFactorA);
                if (m.fwdFactorB != null && Object.hasOwnProperty.call(m, "fwdFactorB"))
                    w.uint32(33).double(m.fwdFactorB);
                if (m.bwdFactorA != null && Object.hasOwnProperty.call(m, "bwdFactorA"))
                    w.uint32(41).double(m.bwdFactorA);
                if (m.bwdFactorB != null && Object.hasOwnProperty.call(m, "bwdFactorB"))
                    w.uint32(49).double(m.bwdFactorB);
                if (m.splitBase != null && Object.hasOwnProperty.call(m, "splitBase"))
                    w.uint32(56).int32(m.splitBase);
                if (m.splitErt != null && Object.hasOwnProperty.call(m, "splitErt"))
                    w.uint32(64).int32(m.splitErt);
                if (m.joinBase != null && Object.hasOwnProperty.call(m, "joinBase"))
                    w.uint32(72).int32(m.joinBase);
                if (m.joinErt != null && Object.hasOwnProperty.call(m, "joinErt"))
                    w.uint32(80).int32(m.joinErt);
                if (m.bonusBase != null && Object.hasOwnProperty.call(m, "bonusBase"))
                    w.uint32(88).int32(m.bonusBase);
                if (m.bonusErt != null && Object.hasOwnProperty.call(m, "bonusErt"))
                    w.uint32(96).int32(m.bonusErt);
                if (m.transferBase != null && Object.hasOwnProperty.call(m, "transferBase"))
                    w.uint32(104).int32(m.transferBase);
                if (m.transferErt != null && Object.hasOwnProperty.call(m, "transferErt"))
                    w.uint32(112).int32(m.transferErt);
                if (m.allotBase != null && Object.hasOwnProperty.call(m, "allotBase"))
                    w.uint32(120).int32(m.allotBase);
                if (m.allotErt != null && Object.hasOwnProperty.call(m, "allotErt"))
                    w.uint32(128).int32(m.allotErt);
                if (m.allotPrice != null && Object.hasOwnProperty.call(m, "allotPrice"))
                    w.uint32(137).double(m.allotPrice);
                if (m.addBase != null && Object.hasOwnProperty.call(m, "addBase"))
                    w.uint32(144).int32(m.addBase);
                if (m.addErt != null && Object.hasOwnProperty.call(m, "addErt"))
                    w.uint32(152).int32(m.addErt);
                if (m.addPrice != null && Object.hasOwnProperty.call(m, "addPrice"))
                    w.uint32(161).double(m.addPrice);
                if (m.dividend != null && Object.hasOwnProperty.call(m, "dividend"))
                    w.uint32(169).double(m.dividend);
                if (m.spDividend != null && Object.hasOwnProperty.call(m, "spDividend"))
                    w.uint32(177).double(m.spDividend);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(185).double(m.timestamp);
                return w;
            };
    
            Rehab.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Common.Rehab();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.time = r.string();
                            break;
                        }
                    case 2: {
                            m.companyActFlag = r.int64();
                            break;
                        }
                    case 3: {
                            m.fwdFactorA = r.double();
                            break;
                        }
                    case 4: {
                            m.fwdFactorB = r.double();
                            break;
                        }
                    case 5: {
                            m.bwdFactorA = r.double();
                            break;
                        }
                    case 6: {
                            m.bwdFactorB = r.double();
                            break;
                        }
                    case 7: {
                            m.splitBase = r.int32();
                            break;
                        }
                    case 8: {
                            m.splitErt = r.int32();
                            break;
                        }
                    case 9: {
                            m.joinBase = r.int32();
                            break;
                        }
                    case 10: {
                            m.joinErt = r.int32();
                            break;
                        }
                    case 11: {
                            m.bonusBase = r.int32();
                            break;
                        }
                    case 12: {
                            m.bonusErt = r.int32();
                            break;
                        }
                    case 13: {
                            m.transferBase = r.int32();
                            break;
                        }
                    case 14: {
                            m.transferErt = r.int32();
                            break;
                        }
                    case 15: {
                            m.allotBase = r.int32();
                            break;
                        }
                    case 16: {
                            m.allotErt = r.int32();
                            break;
                        }
                    case 17: {
                            m.allotPrice = r.double();
                            break;
                        }
                    case 18: {
                            m.addBase = r.int32();
                            break;
                        }
                    case 19: {
                            m.addErt = r.int32();
                            break;
                        }
                    case 20: {
                            m.addPrice = r.double();
                            break;
                        }
                    case 21: {
                            m.dividend = r.double();
                            break;
                        }
                    case 22: {
                            m.spDividend = r.double();
                            break;
                        }
                    case 23: {
                            m.timestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Rehab;
        })();
    
        return Qot_Common;
    })();
    
    $root.Qot_GetBasicQot = (function() {
    
        var Qot_GetBasicQot = {};
    
        Qot_GetBasicQot.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBasicQot.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetBasicQot.S2C = (function() {
    
            function S2C(p) {
                this.basicQotList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.basicQotList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.basicQotList != null && m.basicQotList.length) {
                    for (var i = 0; i < m.basicQotList.length; ++i)
                        $root.Qot_Common.BasicQot.encode(m.basicQotList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBasicQot.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.basicQotList && m.basicQotList.length))
                                m.basicQotList = [];
                            m.basicQotList.push($root.Qot_Common.BasicQot.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetBasicQot.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetBasicQot.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBasicQot.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetBasicQot.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetBasicQot.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetBasicQot.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBasicQot.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetBasicQot.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetBasicQot;
    })();
    
    $root.Qot_GetBroker = (function() {
    
        var Qot_GetBroker = {};
    
        Qot_GetBroker.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBroker.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetBroker.S2C = (function() {
    
            function S2C(p) {
                this.brokerAskList = [];
                this.brokerBidList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.brokerAskList = $util.emptyArray;
            S2C.prototype.brokerBidList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.brokerAskList != null && m.brokerAskList.length) {
                    for (var i = 0; i < m.brokerAskList.length; ++i)
                        $root.Qot_Common.Broker.encode(m.brokerAskList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.brokerBidList != null && m.brokerBidList.length) {
                    for (var i = 0; i < m.brokerBidList.length; ++i)
                        $root.Qot_Common.Broker.encode(m.brokerBidList[i], w.uint32(26).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(34).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBroker.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.brokerAskList && m.brokerAskList.length))
                                m.brokerAskList = [];
                            m.brokerAskList.push($root.Qot_Common.Broker.decode(r, r.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(m.brokerBidList && m.brokerBidList.length))
                                m.brokerBidList = [];
                            m.brokerBidList.push($root.Qot_Common.Broker.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetBroker.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetBroker.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBroker.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetBroker.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetBroker.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetBroker.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetBroker.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetBroker.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetBroker;
    })();
    
    $root.Qot_GetCapitalDistribution = (function() {
    
        var Qot_GetCapitalDistribution = {};
    
        Qot_GetCapitalDistribution.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalDistribution.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetCapitalDistribution.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.capitalInSuper = 0;
            S2C.prototype.capitalInBig = 0;
            S2C.prototype.capitalInMid = 0;
            S2C.prototype.capitalInSmall = 0;
            S2C.prototype.capitalOutSuper = 0;
            S2C.prototype.capitalOutBig = 0;
            S2C.prototype.capitalOutMid = 0;
            S2C.prototype.capitalOutSmall = 0;
            S2C.prototype.updateTime = "";
            S2C.prototype.updateTimestamp = 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.capitalInBig != null && Object.hasOwnProperty.call(m, "capitalInBig"))
                    w.uint32(9).double(m.capitalInBig);
                if (m.capitalInMid != null && Object.hasOwnProperty.call(m, "capitalInMid"))
                    w.uint32(17).double(m.capitalInMid);
                if (m.capitalInSmall != null && Object.hasOwnProperty.call(m, "capitalInSmall"))
                    w.uint32(25).double(m.capitalInSmall);
                if (m.capitalOutBig != null && Object.hasOwnProperty.call(m, "capitalOutBig"))
                    w.uint32(33).double(m.capitalOutBig);
                if (m.capitalOutMid != null && Object.hasOwnProperty.call(m, "capitalOutMid"))
                    w.uint32(41).double(m.capitalOutMid);
                if (m.capitalOutSmall != null && Object.hasOwnProperty.call(m, "capitalOutSmall"))
                    w.uint32(49).double(m.capitalOutSmall);
                if (m.updateTime != null && Object.hasOwnProperty.call(m, "updateTime"))
                    w.uint32(58).string(m.updateTime);
                if (m.updateTimestamp != null && Object.hasOwnProperty.call(m, "updateTimestamp"))
                    w.uint32(65).double(m.updateTimestamp);
                if (m.capitalInSuper != null && Object.hasOwnProperty.call(m, "capitalInSuper"))
                    w.uint32(73).double(m.capitalInSuper);
                if (m.capitalOutSuper != null && Object.hasOwnProperty.call(m, "capitalOutSuper"))
                    w.uint32(81).double(m.capitalOutSuper);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalDistribution.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 9: {
                            m.capitalInSuper = r.double();
                            break;
                        }
                    case 1: {
                            m.capitalInBig = r.double();
                            break;
                        }
                    case 2: {
                            m.capitalInMid = r.double();
                            break;
                        }
                    case 3: {
                            m.capitalInSmall = r.double();
                            break;
                        }
                    case 10: {
                            m.capitalOutSuper = r.double();
                            break;
                        }
                    case 4: {
                            m.capitalOutBig = r.double();
                            break;
                        }
                    case 5: {
                            m.capitalOutMid = r.double();
                            break;
                        }
                    case 6: {
                            m.capitalOutSmall = r.double();
                            break;
                        }
                    case 7: {
                            m.updateTime = r.string();
                            break;
                        }
                    case 8: {
                            m.updateTimestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetCapitalDistribution.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetCapitalDistribution.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalDistribution.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetCapitalDistribution.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetCapitalDistribution.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetCapitalDistribution.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalDistribution.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetCapitalDistribution.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetCapitalDistribution;
    })();
    
    $root.Qot_GetCapitalFlow = (function() {
    
        var Qot_GetCapitalFlow = {};
    
        Qot_GetCapitalFlow.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
            C2S.prototype.periodType = 0;
            C2S.prototype.beginTime = "";
            C2S.prototype.endTime = "";
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.periodType != null && Object.hasOwnProperty.call(m, "periodType"))
                    w.uint32(16).int32(m.periodType);
                if (m.beginTime != null && Object.hasOwnProperty.call(m, "beginTime"))
                    w.uint32(26).string(m.beginTime);
                if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                    w.uint32(34).string(m.endTime);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalFlow.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.periodType = r.int32();
                            break;
                        }
                    case 3: {
                            m.beginTime = r.string();
                            break;
                        }
                    case 4: {
                            m.endTime = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetCapitalFlow.CapitalFlowItem = (function() {
    
            function CapitalFlowItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            CapitalFlowItem.prototype.inFlow = 0;
            CapitalFlowItem.prototype.time = "";
            CapitalFlowItem.prototype.timestamp = 0;
            CapitalFlowItem.prototype.mainInFlow = 0;
            CapitalFlowItem.prototype.superInFlow = 0;
            CapitalFlowItem.prototype.bigInFlow = 0;
            CapitalFlowItem.prototype.midInFlow = 0;
            CapitalFlowItem.prototype.smlInFlow = 0;
    
            CapitalFlowItem.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.inFlow != null && Object.hasOwnProperty.call(m, "inFlow"))
                    w.uint32(9).double(m.inFlow);
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(18).string(m.time);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(25).double(m.timestamp);
                if (m.mainInFlow != null && Object.hasOwnProperty.call(m, "mainInFlow"))
                    w.uint32(33).double(m.mainInFlow);
                if (m.superInFlow != null && Object.hasOwnProperty.call(m, "superInFlow"))
                    w.uint32(41).double(m.superInFlow);
                if (m.bigInFlow != null && Object.hasOwnProperty.call(m, "bigInFlow"))
                    w.uint32(49).double(m.bigInFlow);
                if (m.midInFlow != null && Object.hasOwnProperty.call(m, "midInFlow"))
                    w.uint32(57).double(m.midInFlow);
                if (m.smlInFlow != null && Object.hasOwnProperty.call(m, "smlInFlow"))
                    w.uint32(65).double(m.smlInFlow);
                return w;
            };
    
            CapitalFlowItem.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalFlow.CapitalFlowItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.inFlow = r.double();
                            break;
                        }
                    case 2: {
                            m.time = r.string();
                            break;
                        }
                    case 3: {
                            m.timestamp = r.double();
                            break;
                        }
                    case 4: {
                            m.mainInFlow = r.double();
                            break;
                        }
                    case 5: {
                            m.superInFlow = r.double();
                            break;
                        }
                    case 6: {
                            m.bigInFlow = r.double();
                            break;
                        }
                    case 7: {
                            m.midInFlow = r.double();
                            break;
                        }
                    case 8: {
                            m.smlInFlow = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return CapitalFlowItem;
        })();
    
        Qot_GetCapitalFlow.S2C = (function() {
    
            function S2C(p) {
                this.flowItemList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.flowItemList = $util.emptyArray;
            S2C.prototype.lastValidTime = "";
            S2C.prototype.lastValidTimestamp = 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.flowItemList != null && m.flowItemList.length) {
                    for (var i = 0; i < m.flowItemList.length; ++i)
                        $root.Qot_GetCapitalFlow.CapitalFlowItem.encode(m.flowItemList[i], w.uint32(10).fork()).ldelim();
                }
                if (m.lastValidTime != null && Object.hasOwnProperty.call(m, "lastValidTime"))
                    w.uint32(18).string(m.lastValidTime);
                if (m.lastValidTimestamp != null && Object.hasOwnProperty.call(m, "lastValidTimestamp"))
                    w.uint32(25).double(m.lastValidTimestamp);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalFlow.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.flowItemList && m.flowItemList.length))
                                m.flowItemList = [];
                            m.flowItemList.push($root.Qot_GetCapitalFlow.CapitalFlowItem.decode(r, r.uint32()));
                            break;
                        }
                    case 2: {
                            m.lastValidTime = r.string();
                            break;
                        }
                    case 3: {
                            m.lastValidTimestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetCapitalFlow.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetCapitalFlow.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalFlow.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetCapitalFlow.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetCapitalFlow.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetCapitalFlow.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetCapitalFlow.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetCapitalFlow.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetCapitalFlow;
    })();
    
    $root.Qot_GetFutureInfo = (function() {
    
        var Qot_GetFutureInfo = {};
    
        Qot_GetFutureInfo.TradeTime = (function() {
    
            function TradeTime(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            TradeTime.prototype.begin = 0;
            TradeTime.prototype.end = 0;
    
            TradeTime.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.begin != null && Object.hasOwnProperty.call(m, "begin"))
                    w.uint32(9).double(m.begin);
                if (m.end != null && Object.hasOwnProperty.call(m, "end"))
                    w.uint32(17).double(m.end);
                return w;
            };
    
            TradeTime.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetFutureInfo.TradeTime();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.begin = r.double();
                            break;
                        }
                    case 2: {
                            m.end = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return TradeTime;
        })();
    
        Qot_GetFutureInfo.FutureInfo = (function() {
    
            function FutureInfo(p) {
                this.tradeTime = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            FutureInfo.prototype.name = "";
            FutureInfo.prototype.security = null;
            FutureInfo.prototype.lastTradeTime = "";
            FutureInfo.prototype.lastTradeTimestamp = 0;
            FutureInfo.prototype.owner = null;
            FutureInfo.prototype.ownerOther = "";
            FutureInfo.prototype.exchange = "";
            FutureInfo.prototype.contractType = "";
            FutureInfo.prototype.contractSize = 0;
            FutureInfo.prototype.contractSizeUnit = "";
            FutureInfo.prototype.quoteCurrency = "";
            FutureInfo.prototype.minVar = 0;
            FutureInfo.prototype.minVarUnit = "";
            FutureInfo.prototype.quoteUnit = "";
            FutureInfo.prototype.tradeTime = $util.emptyArray;
            FutureInfo.prototype.timeZone = "";
            FutureInfo.prototype.exchangeFormatUrl = "";
            FutureInfo.prototype.origin = null;
    
            FutureInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(10).string(m.name);
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(18).fork()).ldelim();
                if (m.lastTradeTime != null && Object.hasOwnProperty.call(m, "lastTradeTime"))
                    w.uint32(26).string(m.lastTradeTime);
                if (m.lastTradeTimestamp != null && Object.hasOwnProperty.call(m, "lastTradeTimestamp"))
                    w.uint32(33).double(m.lastTradeTimestamp);
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(42).fork()).ldelim();
                if (m.ownerOther != null && Object.hasOwnProperty.call(m, "ownerOther"))
                    w.uint32(50).string(m.ownerOther);
                if (m.exchange != null && Object.hasOwnProperty.call(m, "exchange"))
                    w.uint32(58).string(m.exchange);
                if (m.contractType != null && Object.hasOwnProperty.call(m, "contractType"))
                    w.uint32(66).string(m.contractType);
                if (m.contractSize != null && Object.hasOwnProperty.call(m, "contractSize"))
                    w.uint32(73).double(m.contractSize);
                if (m.contractSizeUnit != null && Object.hasOwnProperty.call(m, "contractSizeUnit"))
                    w.uint32(82).string(m.contractSizeUnit);
                if (m.quoteCurrency != null && Object.hasOwnProperty.call(m, "quoteCurrency"))
                    w.uint32(90).string(m.quoteCurrency);
                if (m.minVar != null && Object.hasOwnProperty.call(m, "minVar"))
                    w.uint32(97).double(m.minVar);
                if (m.minVarUnit != null && Object.hasOwnProperty.call(m, "minVarUnit"))
                    w.uint32(106).string(m.minVarUnit);
                if (m.quoteUnit != null && Object.hasOwnProperty.call(m, "quoteUnit"))
                    w.uint32(114).string(m.quoteUnit);
                if (m.tradeTime != null && m.tradeTime.length) {
                    for (var i = 0; i < m.tradeTime.length; ++i)
                        $root.Qot_GetFutureInfo.TradeTime.encode(m.tradeTime[i], w.uint32(122).fork()).ldelim();
                }
                if (m.timeZone != null && Object.hasOwnProperty.call(m, "timeZone"))
                    w.uint32(130).string(m.timeZone);
                if (m.exchangeFormatUrl != null && Object.hasOwnProperty.call(m, "exchangeFormatUrl"))
                    w.uint32(138).string(m.exchangeFormatUrl);
                if (m.origin != null && Object.hasOwnProperty.call(m, "origin"))
                    $root.Qot_Common.Security.encode(m.origin, w.uint32(146).fork()).ldelim();
                return w;
            };
    
            FutureInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetFutureInfo.FutureInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.lastTradeTime = r.string();
                            break;
                        }
                    case 4: {
                            m.lastTradeTimestamp = r.double();
                            break;
                        }
                    case 5: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 6: {
                            m.ownerOther = r.string();
                            break;
                        }
                    case 7: {
                            m.exchange = r.string();
                            break;
                        }
                    case 8: {
                            m.contractType = r.string();
                            break;
                        }
                    case 9: {
                            m.contractSize = r.double();
                            break;
                        }
                    case 10: {
                            m.contractSizeUnit = r.string();
                            break;
                        }
                    case 11: {
                            m.quoteCurrency = r.string();
                            break;
                        }
                    case 12: {
                            m.minVar = r.double();
                            break;
                        }
                    case 13: {
                            m.minVarUnit = r.string();
                            break;
                        }
                    case 14: {
                            m.quoteUnit = r.string();
                            break;
                        }
                    case 15: {
                            if (!(m.tradeTime && m.tradeTime.length))
                                m.tradeTime = [];
                            m.tradeTime.push($root.Qot_GetFutureInfo.TradeTime.decode(r, r.uint32()));
                            break;
                        }
                    case 16: {
                            m.timeZone = r.string();
                            break;
                        }
                    case 17: {
                            m.exchangeFormatUrl = r.string();
                            break;
                        }
                    case 18: {
                            m.origin = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return FutureInfo;
        })();
    
        Qot_GetFutureInfo.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetFutureInfo.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetFutureInfo.S2C = (function() {
    
            function S2C(p) {
                this.futureInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.futureInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.futureInfoList != null && m.futureInfoList.length) {
                    for (var i = 0; i < m.futureInfoList.length; ++i)
                        $root.Qot_GetFutureInfo.FutureInfo.encode(m.futureInfoList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetFutureInfo.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.futureInfoList && m.futureInfoList.length))
                                m.futureInfoList = [];
                            m.futureInfoList.push($root.Qot_GetFutureInfo.FutureInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetFutureInfo.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetFutureInfo.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetFutureInfo.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetFutureInfo.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetFutureInfo.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetFutureInfo.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetFutureInfo.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetFutureInfo.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetFutureInfo;
    })();
    
    $root.Qot_GetIpoList = (function() {
    
        var Qot_GetIpoList = {};
    
        Qot_GetIpoList.BasicIpoData = (function() {
    
            function BasicIpoData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            BasicIpoData.prototype.security = null;
            BasicIpoData.prototype.name = "";
            BasicIpoData.prototype.listTime = "";
            BasicIpoData.prototype.listTimestamp = 0;
    
            BasicIpoData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(18).string(m.name);
                if (m.listTime != null && Object.hasOwnProperty.call(m, "listTime"))
                    w.uint32(26).string(m.listTime);
                if (m.listTimestamp != null && Object.hasOwnProperty.call(m, "listTimestamp"))
                    w.uint32(33).double(m.listTimestamp);
                return w;
            };
    
            BasicIpoData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.BasicIpoData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.name = r.string();
                            break;
                        }
                    case 3: {
                            m.listTime = r.string();
                            break;
                        }
                    case 4: {
                            m.listTimestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return BasicIpoData;
        })();
    
        Qot_GetIpoList.CNIpoExData = (function() {
    
            function CNIpoExData(p) {
                this.winningNumData = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            CNIpoExData.prototype.applyCode = "";
            CNIpoExData.prototype.issueSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            CNIpoExData.prototype.onlineIssueSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            CNIpoExData.prototype.applyUpperLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            CNIpoExData.prototype.applyLimitMarketValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            CNIpoExData.prototype.isEstimateIpoPrice = false;
            CNIpoExData.prototype.ipoPrice = 0;
            CNIpoExData.prototype.industryPeRate = 0;
            CNIpoExData.prototype.isEstimateWinningRatio = false;
            CNIpoExData.prototype.winningRatio = 0;
            CNIpoExData.prototype.issuePeRate = 0;
            CNIpoExData.prototype.applyTime = "";
            CNIpoExData.prototype.applyTimestamp = 0;
            CNIpoExData.prototype.winningTime = "";
            CNIpoExData.prototype.winningTimestamp = 0;
            CNIpoExData.prototype.isHasWon = false;
            CNIpoExData.prototype.winningNumData = $util.emptyArray;
    
            CNIpoExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.applyCode != null && Object.hasOwnProperty.call(m, "applyCode"))
                    w.uint32(10).string(m.applyCode);
                if (m.issueSize != null && Object.hasOwnProperty.call(m, "issueSize"))
                    w.uint32(16).int64(m.issueSize);
                if (m.onlineIssueSize != null && Object.hasOwnProperty.call(m, "onlineIssueSize"))
                    w.uint32(24).int64(m.onlineIssueSize);
                if (m.applyUpperLimit != null && Object.hasOwnProperty.call(m, "applyUpperLimit"))
                    w.uint32(32).int64(m.applyUpperLimit);
                if (m.applyLimitMarketValue != null && Object.hasOwnProperty.call(m, "applyLimitMarketValue"))
                    w.uint32(40).int64(m.applyLimitMarketValue);
                if (m.isEstimateIpoPrice != null && Object.hasOwnProperty.call(m, "isEstimateIpoPrice"))
                    w.uint32(48).bool(m.isEstimateIpoPrice);
                if (m.ipoPrice != null && Object.hasOwnProperty.call(m, "ipoPrice"))
                    w.uint32(57).double(m.ipoPrice);
                if (m.industryPeRate != null && Object.hasOwnProperty.call(m, "industryPeRate"))
                    w.uint32(65).double(m.industryPeRate);
                if (m.isEstimateWinningRatio != null && Object.hasOwnProperty.call(m, "isEstimateWinningRatio"))
                    w.uint32(72).bool(m.isEstimateWinningRatio);
                if (m.winningRatio != null && Object.hasOwnProperty.call(m, "winningRatio"))
                    w.uint32(81).double(m.winningRatio);
                if (m.issuePeRate != null && Object.hasOwnProperty.call(m, "issuePeRate"))
                    w.uint32(89).double(m.issuePeRate);
                if (m.applyTime != null && Object.hasOwnProperty.call(m, "applyTime"))
                    w.uint32(98).string(m.applyTime);
                if (m.applyTimestamp != null && Object.hasOwnProperty.call(m, "applyTimestamp"))
                    w.uint32(105).double(m.applyTimestamp);
                if (m.winningTime != null && Object.hasOwnProperty.call(m, "winningTime"))
                    w.uint32(114).string(m.winningTime);
                if (m.winningTimestamp != null && Object.hasOwnProperty.call(m, "winningTimestamp"))
                    w.uint32(121).double(m.winningTimestamp);
                if (m.isHasWon != null && Object.hasOwnProperty.call(m, "isHasWon"))
                    w.uint32(128).bool(m.isHasWon);
                if (m.winningNumData != null && m.winningNumData.length) {
                    for (var i = 0; i < m.winningNumData.length; ++i)
                        $root.Qot_GetIpoList.WinningNumData.encode(m.winningNumData[i], w.uint32(138).fork()).ldelim();
                }
                return w;
            };
    
            CNIpoExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.CNIpoExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.applyCode = r.string();
                            break;
                        }
                    case 2: {
                            m.issueSize = r.int64();
                            break;
                        }
                    case 3: {
                            m.onlineIssueSize = r.int64();
                            break;
                        }
                    case 4: {
                            m.applyUpperLimit = r.int64();
                            break;
                        }
                    case 5: {
                            m.applyLimitMarketValue = r.int64();
                            break;
                        }
                    case 6: {
                            m.isEstimateIpoPrice = r.bool();
                            break;
                        }
                    case 7: {
                            m.ipoPrice = r.double();
                            break;
                        }
                    case 8: {
                            m.industryPeRate = r.double();
                            break;
                        }
                    case 9: {
                            m.isEstimateWinningRatio = r.bool();
                            break;
                        }
                    case 10: {
                            m.winningRatio = r.double();
                            break;
                        }
                    case 11: {
                            m.issuePeRate = r.double();
                            break;
                        }
                    case 12: {
                            m.applyTime = r.string();
                            break;
                        }
                    case 13: {
                            m.applyTimestamp = r.double();
                            break;
                        }
                    case 14: {
                            m.winningTime = r.string();
                            break;
                        }
                    case 15: {
                            m.winningTimestamp = r.double();
                            break;
                        }
                    case 16: {
                            m.isHasWon = r.bool();
                            break;
                        }
                    case 17: {
                            if (!(m.winningNumData && m.winningNumData.length))
                                m.winningNumData = [];
                            m.winningNumData.push($root.Qot_GetIpoList.WinningNumData.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return CNIpoExData;
        })();
    
        Qot_GetIpoList.WinningNumData = (function() {
    
            function WinningNumData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            WinningNumData.prototype.winningName = "";
            WinningNumData.prototype.winningInfo = "";
    
            WinningNumData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.winningName != null && Object.hasOwnProperty.call(m, "winningName"))
                    w.uint32(10).string(m.winningName);
                if (m.winningInfo != null && Object.hasOwnProperty.call(m, "winningInfo"))
                    w.uint32(18).string(m.winningInfo);
                return w;
            };
    
            WinningNumData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.WinningNumData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.winningName = r.string();
                            break;
                        }
                    case 2: {
                            m.winningInfo = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return WinningNumData;
        })();
    
        Qot_GetIpoList.HKIpoExData = (function() {
    
            function HKIpoExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            HKIpoExData.prototype.ipoPriceMin = 0;
            HKIpoExData.prototype.ipoPriceMax = 0;
            HKIpoExData.prototype.listPrice = 0;
            HKIpoExData.prototype.lotSize = 0;
            HKIpoExData.prototype.entrancePrice = 0;
            HKIpoExData.prototype.isSubscribeStatus = false;
            HKIpoExData.prototype.applyEndTime = "";
            HKIpoExData.prototype.applyEndTimestamp = 0;
    
            HKIpoExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ipoPriceMin != null && Object.hasOwnProperty.call(m, "ipoPriceMin"))
                    w.uint32(9).double(m.ipoPriceMin);
                if (m.ipoPriceMax != null && Object.hasOwnProperty.call(m, "ipoPriceMax"))
                    w.uint32(17).double(m.ipoPriceMax);
                if (m.listPrice != null && Object.hasOwnProperty.call(m, "listPrice"))
                    w.uint32(25).double(m.listPrice);
                if (m.lotSize != null && Object.hasOwnProperty.call(m, "lotSize"))
                    w.uint32(32).int32(m.lotSize);
                if (m.entrancePrice != null && Object.hasOwnProperty.call(m, "entrancePrice"))
                    w.uint32(41).double(m.entrancePrice);
                if (m.isSubscribeStatus != null && Object.hasOwnProperty.call(m, "isSubscribeStatus"))
                    w.uint32(48).bool(m.isSubscribeStatus);
                if (m.applyEndTime != null && Object.hasOwnProperty.call(m, "applyEndTime"))
                    w.uint32(58).string(m.applyEndTime);
                if (m.applyEndTimestamp != null && Object.hasOwnProperty.call(m, "applyEndTimestamp"))
                    w.uint32(65).double(m.applyEndTimestamp);
                return w;
            };
    
            HKIpoExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.HKIpoExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.ipoPriceMin = r.double();
                            break;
                        }
                    case 2: {
                            m.ipoPriceMax = r.double();
                            break;
                        }
                    case 3: {
                            m.listPrice = r.double();
                            break;
                        }
                    case 4: {
                            m.lotSize = r.int32();
                            break;
                        }
                    case 5: {
                            m.entrancePrice = r.double();
                            break;
                        }
                    case 6: {
                            m.isSubscribeStatus = r.bool();
                            break;
                        }
                    case 7: {
                            m.applyEndTime = r.string();
                            break;
                        }
                    case 8: {
                            m.applyEndTimestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return HKIpoExData;
        })();
    
        Qot_GetIpoList.USIpoExData = (function() {
    
            function USIpoExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            USIpoExData.prototype.ipoPriceMin = 0;
            USIpoExData.prototype.ipoPriceMax = 0;
            USIpoExData.prototype.issueSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            USIpoExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ipoPriceMin != null && Object.hasOwnProperty.call(m, "ipoPriceMin"))
                    w.uint32(9).double(m.ipoPriceMin);
                if (m.ipoPriceMax != null && Object.hasOwnProperty.call(m, "ipoPriceMax"))
                    w.uint32(17).double(m.ipoPriceMax);
                if (m.issueSize != null && Object.hasOwnProperty.call(m, "issueSize"))
                    w.uint32(24).int64(m.issueSize);
                return w;
            };
    
            USIpoExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.USIpoExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.ipoPriceMin = r.double();
                            break;
                        }
                    case 2: {
                            m.ipoPriceMax = r.double();
                            break;
                        }
                    case 3: {
                            m.issueSize = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return USIpoExData;
        })();
    
        Qot_GetIpoList.IpoData = (function() {
    
            function IpoData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            IpoData.prototype.basic = null;
            IpoData.prototype.cnExData = null;
            IpoData.prototype.hkExData = null;
            IpoData.prototype.usExData = null;
    
            IpoData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.basic != null && Object.hasOwnProperty.call(m, "basic"))
                    $root.Qot_GetIpoList.BasicIpoData.encode(m.basic, w.uint32(10).fork()).ldelim();
                if (m.cnExData != null && Object.hasOwnProperty.call(m, "cnExData"))
                    $root.Qot_GetIpoList.CNIpoExData.encode(m.cnExData, w.uint32(18).fork()).ldelim();
                if (m.hkExData != null && Object.hasOwnProperty.call(m, "hkExData"))
                    $root.Qot_GetIpoList.HKIpoExData.encode(m.hkExData, w.uint32(26).fork()).ldelim();
                if (m.usExData != null && Object.hasOwnProperty.call(m, "usExData"))
                    $root.Qot_GetIpoList.USIpoExData.encode(m.usExData, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            IpoData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.IpoData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.basic = $root.Qot_GetIpoList.BasicIpoData.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.cnExData = $root.Qot_GetIpoList.CNIpoExData.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.hkExData = $root.Qot_GetIpoList.HKIpoExData.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.usExData = $root.Qot_GetIpoList.USIpoExData.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return IpoData;
        })();
    
        Qot_GetIpoList.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.market = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(8).int32(m.market);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.market = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetIpoList.S2C = (function() {
    
            function S2C(p) {
                this.ipoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.ipoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ipoList != null && m.ipoList.length) {
                    for (var i = 0; i < m.ipoList.length; ++i)
                        $root.Qot_GetIpoList.IpoData.encode(m.ipoList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.ipoList && m.ipoList.length))
                                m.ipoList = [];
                            m.ipoList.push($root.Qot_GetIpoList.IpoData.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetIpoList.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetIpoList.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetIpoList.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetIpoList.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetIpoList.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetIpoList.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetIpoList.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetIpoList;
    })();
    
    $root.Qot_GetKL = (function() {
    
        var Qot_GetKL = {};
    
        Qot_GetKL.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.rehabType = 0;
            C2S.prototype.klType = 0;
            C2S.prototype.security = null;
            C2S.prototype.reqNum = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.rehabType != null && Object.hasOwnProperty.call(m, "rehabType"))
                    w.uint32(8).int32(m.rehabType);
                if (m.klType != null && Object.hasOwnProperty.call(m, "klType"))
                    w.uint32(16).int32(m.klType);
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(26).fork()).ldelim();
                if (m.reqNum != null && Object.hasOwnProperty.call(m, "reqNum"))
                    w.uint32(32).int32(m.reqNum);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetKL.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.rehabType = r.int32();
                            break;
                        }
                    case 2: {
                            m.klType = r.int32();
                            break;
                        }
                    case 3: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.reqNum = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetKL.S2C = (function() {
    
            function S2C(p) {
                this.klList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.klList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.klList != null && m.klList.length) {
                    for (var i = 0; i < m.klList.length; ++i)
                        $root.Qot_Common.KLine.encode(m.klList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetKL.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.klList && m.klList.length))
                                m.klList = [];
                            m.klList.push($root.Qot_Common.KLine.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetKL.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetKL.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetKL.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetKL.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetKL.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetKL.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetKL.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetKL.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetKL;
    })();
    
    $root.Qot_GetMarketState = (function() {
    
        var Qot_GetMarketState = {};
    
        Qot_GetMarketState.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetMarketState.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetMarketState.MarketInfo = (function() {
    
            function MarketInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            MarketInfo.prototype.security = null;
            MarketInfo.prototype.name = "";
            MarketInfo.prototype.marketState = 0;
    
            MarketInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(18).string(m.name);
                if (m.marketState != null && Object.hasOwnProperty.call(m, "marketState"))
                    w.uint32(24).int32(m.marketState);
                return w;
            };
    
            MarketInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetMarketState.MarketInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.name = r.string();
                            break;
                        }
                    case 3: {
                            m.marketState = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return MarketInfo;
        })();
    
        Qot_GetMarketState.S2C = (function() {
    
            function S2C(p) {
                this.marketInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.marketInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.marketInfoList != null && m.marketInfoList.length) {
                    for (var i = 0; i < m.marketInfoList.length; ++i)
                        $root.Qot_GetMarketState.MarketInfo.encode(m.marketInfoList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetMarketState.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.marketInfoList && m.marketInfoList.length))
                                m.marketInfoList = [];
                            m.marketInfoList.push($root.Qot_GetMarketState.MarketInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetMarketState.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetMarketState.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetMarketState.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetMarketState.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetMarketState.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetMarketState.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetMarketState.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetMarketState.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetMarketState;
    })();
    
    $root.Qot_GetOptionChain = (function() {
    
        var Qot_GetOptionChain = {};
    
        Qot_GetOptionChain.OptionCondType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OptionCondType_Unknow"] = 0;
            values[valuesById[1] = "OptionCondType_WithIn"] = 1;
            values[valuesById[2] = "OptionCondType_Outside"] = 2;
            return values;
        })();
    
        Qot_GetOptionChain.DataFilter = (function() {
    
            function DataFilter(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            DataFilter.prototype.impliedVolatilityMin = 0;
            DataFilter.prototype.impliedVolatilityMax = 0;
            DataFilter.prototype.deltaMin = 0;
            DataFilter.prototype.deltaMax = 0;
            DataFilter.prototype.gammaMin = 0;
            DataFilter.prototype.gammaMax = 0;
            DataFilter.prototype.vegaMin = 0;
            DataFilter.prototype.vegaMax = 0;
            DataFilter.prototype.thetaMin = 0;
            DataFilter.prototype.thetaMax = 0;
            DataFilter.prototype.rhoMin = 0;
            DataFilter.prototype.rhoMax = 0;
            DataFilter.prototype.netOpenInterestMin = 0;
            DataFilter.prototype.netOpenInterestMax = 0;
            DataFilter.prototype.openInterestMin = 0;
            DataFilter.prototype.openInterestMax = 0;
            DataFilter.prototype.volMin = 0;
            DataFilter.prototype.volMax = 0;
    
            DataFilter.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.impliedVolatilityMin != null && Object.hasOwnProperty.call(m, "impliedVolatilityMin"))
                    w.uint32(9).double(m.impliedVolatilityMin);
                if (m.impliedVolatilityMax != null && Object.hasOwnProperty.call(m, "impliedVolatilityMax"))
                    w.uint32(17).double(m.impliedVolatilityMax);
                if (m.deltaMin != null && Object.hasOwnProperty.call(m, "deltaMin"))
                    w.uint32(25).double(m.deltaMin);
                if (m.deltaMax != null && Object.hasOwnProperty.call(m, "deltaMax"))
                    w.uint32(33).double(m.deltaMax);
                if (m.gammaMin != null && Object.hasOwnProperty.call(m, "gammaMin"))
                    w.uint32(41).double(m.gammaMin);
                if (m.gammaMax != null && Object.hasOwnProperty.call(m, "gammaMax"))
                    w.uint32(49).double(m.gammaMax);
                if (m.vegaMin != null && Object.hasOwnProperty.call(m, "vegaMin"))
                    w.uint32(57).double(m.vegaMin);
                if (m.vegaMax != null && Object.hasOwnProperty.call(m, "vegaMax"))
                    w.uint32(65).double(m.vegaMax);
                if (m.thetaMin != null && Object.hasOwnProperty.call(m, "thetaMin"))
                    w.uint32(73).double(m.thetaMin);
                if (m.thetaMax != null && Object.hasOwnProperty.call(m, "thetaMax"))
                    w.uint32(81).double(m.thetaMax);
                if (m.rhoMin != null && Object.hasOwnProperty.call(m, "rhoMin"))
                    w.uint32(89).double(m.rhoMin);
                if (m.rhoMax != null && Object.hasOwnProperty.call(m, "rhoMax"))
                    w.uint32(97).double(m.rhoMax);
                if (m.netOpenInterestMin != null && Object.hasOwnProperty.call(m, "netOpenInterestMin"))
                    w.uint32(105).double(m.netOpenInterestMin);
                if (m.netOpenInterestMax != null && Object.hasOwnProperty.call(m, "netOpenInterestMax"))
                    w.uint32(113).double(m.netOpenInterestMax);
                if (m.openInterestMin != null && Object.hasOwnProperty.call(m, "openInterestMin"))
                    w.uint32(121).double(m.openInterestMin);
                if (m.openInterestMax != null && Object.hasOwnProperty.call(m, "openInterestMax"))
                    w.uint32(129).double(m.openInterestMax);
                if (m.volMin != null && Object.hasOwnProperty.call(m, "volMin"))
                    w.uint32(137).double(m.volMin);
                if (m.volMax != null && Object.hasOwnProperty.call(m, "volMax"))
                    w.uint32(145).double(m.volMax);
                return w;
            };
    
            DataFilter.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionChain.DataFilter();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.impliedVolatilityMin = r.double();
                            break;
                        }
                    case 2: {
                            m.impliedVolatilityMax = r.double();
                            break;
                        }
                    case 3: {
                            m.deltaMin = r.double();
                            break;
                        }
                    case 4: {
                            m.deltaMax = r.double();
                            break;
                        }
                    case 5: {
                            m.gammaMin = r.double();
                            break;
                        }
                    case 6: {
                            m.gammaMax = r.double();
                            break;
                        }
                    case 7: {
                            m.vegaMin = r.double();
                            break;
                        }
                    case 8: {
                            m.vegaMax = r.double();
                            break;
                        }
                    case 9: {
                            m.thetaMin = r.double();
                            break;
                        }
                    case 10: {
                            m.thetaMax = r.double();
                            break;
                        }
                    case 11: {
                            m.rhoMin = r.double();
                            break;
                        }
                    case 12: {
                            m.rhoMax = r.double();
                            break;
                        }
                    case 13: {
                            m.netOpenInterestMin = r.double();
                            break;
                        }
                    case 14: {
                            m.netOpenInterestMax = r.double();
                            break;
                        }
                    case 15: {
                            m.openInterestMin = r.double();
                            break;
                        }
                    case 16: {
                            m.openInterestMax = r.double();
                            break;
                        }
                    case 17: {
                            m.volMin = r.double();
                            break;
                        }
                    case 18: {
                            m.volMax = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return DataFilter;
        })();
    
        Qot_GetOptionChain.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.owner = null;
            C2S.prototype.indexOptionType = 0;
            C2S.prototype.type = 0;
            C2S.prototype.condition = 0;
            C2S.prototype.beginTime = "";
            C2S.prototype.endTime = "";
            C2S.prototype.dataFilter = null;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(10).fork()).ldelim();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(16).int32(m.type);
                if (m.condition != null && Object.hasOwnProperty.call(m, "condition"))
                    w.uint32(24).int32(m.condition);
                if (m.beginTime != null && Object.hasOwnProperty.call(m, "beginTime"))
                    w.uint32(34).string(m.beginTime);
                if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                    w.uint32(42).string(m.endTime);
                if (m.indexOptionType != null && Object.hasOwnProperty.call(m, "indexOptionType"))
                    w.uint32(48).int32(m.indexOptionType);
                if (m.dataFilter != null && Object.hasOwnProperty.call(m, "dataFilter"))
                    $root.Qot_GetOptionChain.DataFilter.encode(m.dataFilter, w.uint32(58).fork()).ldelim();
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionChain.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 6: {
                            m.indexOptionType = r.int32();
                            break;
                        }
                    case 2: {
                            m.type = r.int32();
                            break;
                        }
                    case 3: {
                            m.condition = r.int32();
                            break;
                        }
                    case 4: {
                            m.beginTime = r.string();
                            break;
                        }
                    case 5: {
                            m.endTime = r.string();
                            break;
                        }
                    case 7: {
                            m.dataFilter = $root.Qot_GetOptionChain.DataFilter.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetOptionChain.OptionItem = (function() {
    
            function OptionItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OptionItem.prototype.call = null;
            OptionItem.prototype.put = null;
    
            OptionItem.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.call != null && Object.hasOwnProperty.call(m, "call"))
                    $root.Qot_Common.SecurityStaticInfo.encode(m.call, w.uint32(10).fork()).ldelim();
                if (m.put != null && Object.hasOwnProperty.call(m, "put"))
                    $root.Qot_Common.SecurityStaticInfo.encode(m.put, w.uint32(18).fork()).ldelim();
                return w;
            };
    
            OptionItem.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionChain.OptionItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.call = $root.Qot_Common.SecurityStaticInfo.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.put = $root.Qot_Common.SecurityStaticInfo.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OptionItem;
        })();
    
        Qot_GetOptionChain.OptionChain = (function() {
    
            function OptionChain(p) {
                this.option = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OptionChain.prototype.strikeTime = "";
            OptionChain.prototype.option = $util.emptyArray;
            OptionChain.prototype.strikeTimestamp = 0;
    
            OptionChain.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.strikeTime != null && Object.hasOwnProperty.call(m, "strikeTime"))
                    w.uint32(10).string(m.strikeTime);
                if (m.option != null && m.option.length) {
                    for (var i = 0; i < m.option.length; ++i)
                        $root.Qot_GetOptionChain.OptionItem.encode(m.option[i], w.uint32(18).fork()).ldelim();
                }
                if (m.strikeTimestamp != null && Object.hasOwnProperty.call(m, "strikeTimestamp"))
                    w.uint32(25).double(m.strikeTimestamp);
                return w;
            };
    
            OptionChain.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionChain.OptionChain();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.strikeTime = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.option && m.option.length))
                                m.option = [];
                            m.option.push($root.Qot_GetOptionChain.OptionItem.decode(r, r.uint32()));
                            break;
                        }
                    case 3: {
                            m.strikeTimestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OptionChain;
        })();
    
        Qot_GetOptionChain.S2C = (function() {
    
            function S2C(p) {
                this.optionChain = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.optionChain = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.optionChain != null && m.optionChain.length) {
                    for (var i = 0; i < m.optionChain.length; ++i)
                        $root.Qot_GetOptionChain.OptionChain.encode(m.optionChain[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionChain.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.optionChain && m.optionChain.length))
                                m.optionChain = [];
                            m.optionChain.push($root.Qot_GetOptionChain.OptionChain.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetOptionChain.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetOptionChain.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionChain.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetOptionChain.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetOptionChain.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetOptionChain.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionChain.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetOptionChain.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetOptionChain;
    })();
    
    $root.Qot_GetOptionExpirationDate = (function() {
    
        var Qot_GetOptionExpirationDate = {};
    
        Qot_GetOptionExpirationDate.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.owner = null;
            C2S.prototype.indexOptionType = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(10).fork()).ldelim();
                if (m.indexOptionType != null && Object.hasOwnProperty.call(m, "indexOptionType"))
                    w.uint32(16).int32(m.indexOptionType);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionExpirationDate.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.indexOptionType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetOptionExpirationDate.OptionExpirationDate = (function() {
    
            function OptionExpirationDate(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OptionExpirationDate.prototype.strikeTime = "";
            OptionExpirationDate.prototype.strikeTimestamp = 0;
            OptionExpirationDate.prototype.optionExpiryDateDistance = 0;
            OptionExpirationDate.prototype.cycle = 0;
    
            OptionExpirationDate.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.strikeTime != null && Object.hasOwnProperty.call(m, "strikeTime"))
                    w.uint32(10).string(m.strikeTime);
                if (m.strikeTimestamp != null && Object.hasOwnProperty.call(m, "strikeTimestamp"))
                    w.uint32(17).double(m.strikeTimestamp);
                if (m.optionExpiryDateDistance != null && Object.hasOwnProperty.call(m, "optionExpiryDateDistance"))
                    w.uint32(24).int32(m.optionExpiryDateDistance);
                if (m.cycle != null && Object.hasOwnProperty.call(m, "cycle"))
                    w.uint32(32).int32(m.cycle);
                return w;
            };
    
            OptionExpirationDate.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionExpirationDate.OptionExpirationDate();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.strikeTime = r.string();
                            break;
                        }
                    case 2: {
                            m.strikeTimestamp = r.double();
                            break;
                        }
                    case 3: {
                            m.optionExpiryDateDistance = r.int32();
                            break;
                        }
                    case 4: {
                            m.cycle = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OptionExpirationDate;
        })();
    
        Qot_GetOptionExpirationDate.S2C = (function() {
    
            function S2C(p) {
                this.dateList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.dateList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.dateList != null && m.dateList.length) {
                    for (var i = 0; i < m.dateList.length; ++i)
                        $root.Qot_GetOptionExpirationDate.OptionExpirationDate.encode(m.dateList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionExpirationDate.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.dateList && m.dateList.length))
                                m.dateList = [];
                            m.dateList.push($root.Qot_GetOptionExpirationDate.OptionExpirationDate.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetOptionExpirationDate.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetOptionExpirationDate.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionExpirationDate.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetOptionExpirationDate.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetOptionExpirationDate.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetOptionExpirationDate.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOptionExpirationDate.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetOptionExpirationDate.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetOptionExpirationDate;
    })();
    
    $root.Qot_GetOrderBook = (function() {
    
        var Qot_GetOrderBook = {};
    
        Qot_GetOrderBook.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
            C2S.prototype.num = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                    w.uint32(16).int32(m.num);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOrderBook.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.num = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetOrderBook.S2C = (function() {
    
            function S2C(p) {
                this.orderBookAskList = [];
                this.orderBookBidList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.orderBookAskList = $util.emptyArray;
            S2C.prototype.orderBookBidList = $util.emptyArray;
            S2C.prototype.svrRecvTimeBid = "";
            S2C.prototype.svrRecvTimeBidTimestamp = 0;
            S2C.prototype.svrRecvTimeAsk = "";
            S2C.prototype.svrRecvTimeAskTimestamp = 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.orderBookAskList != null && m.orderBookAskList.length) {
                    for (var i = 0; i < m.orderBookAskList.length; ++i)
                        $root.Qot_Common.OrderBook.encode(m.orderBookAskList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.orderBookBidList != null && m.orderBookBidList.length) {
                    for (var i = 0; i < m.orderBookBidList.length; ++i)
                        $root.Qot_Common.OrderBook.encode(m.orderBookBidList[i], w.uint32(26).fork()).ldelim();
                }
                if (m.svrRecvTimeBid != null && Object.hasOwnProperty.call(m, "svrRecvTimeBid"))
                    w.uint32(34).string(m.svrRecvTimeBid);
                if (m.svrRecvTimeBidTimestamp != null && Object.hasOwnProperty.call(m, "svrRecvTimeBidTimestamp"))
                    w.uint32(41).double(m.svrRecvTimeBidTimestamp);
                if (m.svrRecvTimeAsk != null && Object.hasOwnProperty.call(m, "svrRecvTimeAsk"))
                    w.uint32(50).string(m.svrRecvTimeAsk);
                if (m.svrRecvTimeAskTimestamp != null && Object.hasOwnProperty.call(m, "svrRecvTimeAskTimestamp"))
                    w.uint32(57).double(m.svrRecvTimeAskTimestamp);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(66).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOrderBook.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 8: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.orderBookAskList && m.orderBookAskList.length))
                                m.orderBookAskList = [];
                            m.orderBookAskList.push($root.Qot_Common.OrderBook.decode(r, r.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(m.orderBookBidList && m.orderBookBidList.length))
                                m.orderBookBidList = [];
                            m.orderBookBidList.push($root.Qot_Common.OrderBook.decode(r, r.uint32()));
                            break;
                        }
                    case 4: {
                            m.svrRecvTimeBid = r.string();
                            break;
                        }
                    case 5: {
                            m.svrRecvTimeBidTimestamp = r.double();
                            break;
                        }
                    case 6: {
                            m.svrRecvTimeAsk = r.string();
                            break;
                        }
                    case 7: {
                            m.svrRecvTimeAskTimestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetOrderBook.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetOrderBook.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOrderBook.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetOrderBook.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetOrderBook.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetOrderBook.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOrderBook.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetOrderBook.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetOrderBook;
    })();
    
    $root.Qot_GetOwnerPlate = (function() {
    
        var Qot_GetOwnerPlate = {};
    
        Qot_GetOwnerPlate.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOwnerPlate.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetOwnerPlate.SecurityOwnerPlate = (function() {
    
            function SecurityOwnerPlate(p) {
                this.plateInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            SecurityOwnerPlate.prototype.security = null;
            SecurityOwnerPlate.prototype.name = "";
            SecurityOwnerPlate.prototype.plateInfoList = $util.emptyArray;
    
            SecurityOwnerPlate.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.plateInfoList != null && m.plateInfoList.length) {
                    for (var i = 0; i < m.plateInfoList.length; ++i)
                        $root.Qot_Common.PlateInfo.encode(m.plateInfoList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                return w;
            };
    
            SecurityOwnerPlate.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOwnerPlate.SecurityOwnerPlate();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.plateInfoList && m.plateInfoList.length))
                                m.plateInfoList = [];
                            m.plateInfoList.push($root.Qot_Common.PlateInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return SecurityOwnerPlate;
        })();
    
        Qot_GetOwnerPlate.S2C = (function() {
    
            function S2C(p) {
                this.ownerPlateList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.ownerPlateList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.ownerPlateList != null && m.ownerPlateList.length) {
                    for (var i = 0; i < m.ownerPlateList.length; ++i)
                        $root.Qot_GetOwnerPlate.SecurityOwnerPlate.encode(m.ownerPlateList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOwnerPlate.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.ownerPlateList && m.ownerPlateList.length))
                                m.ownerPlateList = [];
                            m.ownerPlateList.push($root.Qot_GetOwnerPlate.SecurityOwnerPlate.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetOwnerPlate.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetOwnerPlate.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOwnerPlate.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetOwnerPlate.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetOwnerPlate.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetOwnerPlate.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetOwnerPlate.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetOwnerPlate.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetOwnerPlate;
    })();
    
    $root.Qot_GetPlateSecurity = (function() {
    
        var Qot_GetPlateSecurity = {};
    
        Qot_GetPlateSecurity.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.plate = null;
            C2S.prototype.sortField = 0;
            C2S.prototype.ascend = false;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.plate != null && Object.hasOwnProperty.call(m, "plate"))
                    $root.Qot_Common.Security.encode(m.plate, w.uint32(10).fork()).ldelim();
                if (m.sortField != null && Object.hasOwnProperty.call(m, "sortField"))
                    w.uint32(16).int32(m.sortField);
                if (m.ascend != null && Object.hasOwnProperty.call(m, "ascend"))
                    w.uint32(24).bool(m.ascend);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSecurity.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.plate = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.sortField = r.int32();
                            break;
                        }
                    case 3: {
                            m.ascend = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetPlateSecurity.S2C = (function() {
    
            function S2C(p) {
                this.staticInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.staticInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.staticInfoList != null && m.staticInfoList.length) {
                    for (var i = 0; i < m.staticInfoList.length; ++i)
                        $root.Qot_Common.SecurityStaticInfo.encode(m.staticInfoList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSecurity.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.staticInfoList && m.staticInfoList.length))
                                m.staticInfoList = [];
                            m.staticInfoList.push($root.Qot_Common.SecurityStaticInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetPlateSecurity.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetPlateSecurity.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSecurity.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetPlateSecurity.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetPlateSecurity.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetPlateSecurity.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSecurity.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetPlateSecurity.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetPlateSecurity;
    })();
    
    $root.Qot_GetPlateSet = (function() {
    
        var Qot_GetPlateSet = {};
    
        Qot_GetPlateSet.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.market = 0;
            C2S.prototype.plateSetType = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(8).int32(m.market);
                if (m.plateSetType != null && Object.hasOwnProperty.call(m, "plateSetType"))
                    w.uint32(16).int32(m.plateSetType);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSet.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.market = r.int32();
                            break;
                        }
                    case 2: {
                            m.plateSetType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetPlateSet.S2C = (function() {
    
            function S2C(p) {
                this.plateInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.plateInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.plateInfoList != null && m.plateInfoList.length) {
                    for (var i = 0; i < m.plateInfoList.length; ++i)
                        $root.Qot_Common.PlateInfo.encode(m.plateInfoList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSet.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.plateInfoList && m.plateInfoList.length))
                                m.plateInfoList = [];
                            m.plateInfoList.push($root.Qot_Common.PlateInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetPlateSet.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetPlateSet.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSet.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetPlateSet.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetPlateSet.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetPlateSet.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPlateSet.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetPlateSet.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetPlateSet;
    })();
    
    $root.Qot_GetPriceReminder = (function() {
    
        var Qot_GetPriceReminder = {};
    
        Qot_GetPriceReminder.PriceReminderItem = (function() {
    
            function PriceReminderItem(p) {
                this.reminderSessionList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            PriceReminderItem.prototype.key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            PriceReminderItem.prototype.type = 0;
            PriceReminderItem.prototype.value = 0;
            PriceReminderItem.prototype.note = "";
            PriceReminderItem.prototype.freq = 0;
            PriceReminderItem.prototype.isEnable = false;
            PriceReminderItem.prototype.reminderSessionList = $util.emptyArray;
    
            PriceReminderItem.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(8).int64(m.key);
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(16).int32(m.type);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(25).double(m.value);
                if (m.note != null && Object.hasOwnProperty.call(m, "note"))
                    w.uint32(34).string(m.note);
                if (m.freq != null && Object.hasOwnProperty.call(m, "freq"))
                    w.uint32(40).int32(m.freq);
                if (m.isEnable != null && Object.hasOwnProperty.call(m, "isEnable"))
                    w.uint32(48).bool(m.isEnable);
                if (m.reminderSessionList != null && m.reminderSessionList.length) {
                    w.uint32(58).fork();
                    for (var i = 0; i < m.reminderSessionList.length; ++i)
                        w.int32(m.reminderSessionList[i]);
                    w.ldelim();
                }
                return w;
            };
    
            PriceReminderItem.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPriceReminder.PriceReminderItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.key = r.int64();
                            break;
                        }
                    case 2: {
                            m.type = r.int32();
                            break;
                        }
                    case 3: {
                            m.value = r.double();
                            break;
                        }
                    case 4: {
                            m.note = r.string();
                            break;
                        }
                    case 5: {
                            m.freq = r.int32();
                            break;
                        }
                    case 6: {
                            m.isEnable = r.bool();
                            break;
                        }
                    case 7: {
                            if (!(m.reminderSessionList && m.reminderSessionList.length))
                                m.reminderSessionList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.reminderSessionList.push(r.int32());
                            } else
                                m.reminderSessionList.push(r.int32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return PriceReminderItem;
        })();
    
        Qot_GetPriceReminder.PriceReminder = (function() {
    
            function PriceReminder(p) {
                this.itemList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            PriceReminder.prototype.security = null;
            PriceReminder.prototype.name = "";
            PriceReminder.prototype.itemList = $util.emptyArray;
    
            PriceReminder.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.itemList != null && m.itemList.length) {
                    for (var i = 0; i < m.itemList.length; ++i)
                        $root.Qot_GetPriceReminder.PriceReminderItem.encode(m.itemList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                return w;
            };
    
            PriceReminder.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPriceReminder.PriceReminder();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.itemList && m.itemList.length))
                                m.itemList = [];
                            m.itemList.push($root.Qot_GetPriceReminder.PriceReminderItem.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return PriceReminder;
        })();
    
        Qot_GetPriceReminder.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
            C2S.prototype.market = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(16).int32(m.market);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPriceReminder.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.market = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetPriceReminder.S2C = (function() {
    
            function S2C(p) {
                this.priceReminderList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.priceReminderList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.priceReminderList != null && m.priceReminderList.length) {
                    for (var i = 0; i < m.priceReminderList.length; ++i)
                        $root.Qot_GetPriceReminder.PriceReminder.encode(m.priceReminderList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPriceReminder.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.priceReminderList && m.priceReminderList.length))
                                m.priceReminderList = [];
                            m.priceReminderList.push($root.Qot_GetPriceReminder.PriceReminder.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetPriceReminder.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetPriceReminder.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPriceReminder.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetPriceReminder.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetPriceReminder.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetPriceReminder.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetPriceReminder.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetPriceReminder.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetPriceReminder;
    })();
    
    $root.Qot_GetReference = (function() {
    
        var Qot_GetReference = {};
    
        Qot_GetReference.ReferenceType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ReferenceType_Unknow"] = 0;
            values[valuesById[1] = "ReferenceType_Warrant"] = 1;
            values[valuesById[2] = "ReferenceType_Future"] = 2;
            return values;
        })();
    
        Qot_GetReference.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
            C2S.prototype.referenceType = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.referenceType != null && Object.hasOwnProperty.call(m, "referenceType"))
                    w.uint32(16).int32(m.referenceType);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetReference.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.referenceType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetReference.S2C = (function() {
    
            function S2C(p) {
                this.staticInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.staticInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.staticInfoList != null && m.staticInfoList.length) {
                    for (var i = 0; i < m.staticInfoList.length; ++i)
                        $root.Qot_Common.SecurityStaticInfo.encode(m.staticInfoList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetReference.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 2: {
                            if (!(m.staticInfoList && m.staticInfoList.length))
                                m.staticInfoList = [];
                            m.staticInfoList.push($root.Qot_Common.SecurityStaticInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetReference.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetReference.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetReference.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetReference.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetReference.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetReference.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetReference.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetReference.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetReference;
    })();
    
    $root.Qot_GetRT = (function() {
    
        var Qot_GetRT = {};
    
        Qot_GetRT.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetRT.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetRT.S2C = (function() {
    
            function S2C(p) {
                this.rtList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.rtList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.rtList != null && m.rtList.length) {
                    for (var i = 0; i < m.rtList.length; ++i)
                        $root.Qot_Common.TimeShare.encode(m.rtList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetRT.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.rtList && m.rtList.length))
                                m.rtList = [];
                            m.rtList.push($root.Qot_Common.TimeShare.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetRT.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetRT.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetRT.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetRT.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetRT.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetRT.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetRT.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetRT.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetRT;
    })();
    
    $root.Qot_GetSecuritySnapshot = (function() {
    
        var Qot_GetSecuritySnapshot = {};
    
        Qot_GetSecuritySnapshot.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetSecuritySnapshot.EquitySnapshotExData = (function() {
    
            function EquitySnapshotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            EquitySnapshotExData.prototype.issuedShares = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            EquitySnapshotExData.prototype.issuedMarketVal = 0;
            EquitySnapshotExData.prototype.netAsset = 0;
            EquitySnapshotExData.prototype.netProfit = 0;
            EquitySnapshotExData.prototype.earningsPershare = 0;
            EquitySnapshotExData.prototype.outstandingShares = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            EquitySnapshotExData.prototype.outstandingMarketVal = 0;
            EquitySnapshotExData.prototype.netAssetPershare = 0;
            EquitySnapshotExData.prototype.eyRate = 0;
            EquitySnapshotExData.prototype.peRate = 0;
            EquitySnapshotExData.prototype.pbRate = 0;
            EquitySnapshotExData.prototype.peTTMRate = 0;
            EquitySnapshotExData.prototype.dividendTTM = 0;
            EquitySnapshotExData.prototype.dividendRatioTTM = 0;
            EquitySnapshotExData.prototype.dividendLFY = 0;
            EquitySnapshotExData.prototype.dividendLFYRatio = 0;
    
            EquitySnapshotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.issuedShares != null && Object.hasOwnProperty.call(m, "issuedShares"))
                    w.uint32(8).int64(m.issuedShares);
                if (m.issuedMarketVal != null && Object.hasOwnProperty.call(m, "issuedMarketVal"))
                    w.uint32(17).double(m.issuedMarketVal);
                if (m.netAsset != null && Object.hasOwnProperty.call(m, "netAsset"))
                    w.uint32(25).double(m.netAsset);
                if (m.netProfit != null && Object.hasOwnProperty.call(m, "netProfit"))
                    w.uint32(33).double(m.netProfit);
                if (m.earningsPershare != null && Object.hasOwnProperty.call(m, "earningsPershare"))
                    w.uint32(41).double(m.earningsPershare);
                if (m.outstandingShares != null && Object.hasOwnProperty.call(m, "outstandingShares"))
                    w.uint32(48).int64(m.outstandingShares);
                if (m.outstandingMarketVal != null && Object.hasOwnProperty.call(m, "outstandingMarketVal"))
                    w.uint32(57).double(m.outstandingMarketVal);
                if (m.netAssetPershare != null && Object.hasOwnProperty.call(m, "netAssetPershare"))
                    w.uint32(65).double(m.netAssetPershare);
                if (m.eyRate != null && Object.hasOwnProperty.call(m, "eyRate"))
                    w.uint32(73).double(m.eyRate);
                if (m.peRate != null && Object.hasOwnProperty.call(m, "peRate"))
                    w.uint32(81).double(m.peRate);
                if (m.pbRate != null && Object.hasOwnProperty.call(m, "pbRate"))
                    w.uint32(89).double(m.pbRate);
                if (m.peTTMRate != null && Object.hasOwnProperty.call(m, "peTTMRate"))
                    w.uint32(97).double(m.peTTMRate);
                if (m.dividendTTM != null && Object.hasOwnProperty.call(m, "dividendTTM"))
                    w.uint32(105).double(m.dividendTTM);
                if (m.dividendRatioTTM != null && Object.hasOwnProperty.call(m, "dividendRatioTTM"))
                    w.uint32(113).double(m.dividendRatioTTM);
                if (m.dividendLFY != null && Object.hasOwnProperty.call(m, "dividendLFY"))
                    w.uint32(121).double(m.dividendLFY);
                if (m.dividendLFYRatio != null && Object.hasOwnProperty.call(m, "dividendLFYRatio"))
                    w.uint32(129).double(m.dividendLFYRatio);
                return w;
            };
    
            EquitySnapshotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.EquitySnapshotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.issuedShares = r.int64();
                            break;
                        }
                    case 2: {
                            m.issuedMarketVal = r.double();
                            break;
                        }
                    case 3: {
                            m.netAsset = r.double();
                            break;
                        }
                    case 4: {
                            m.netProfit = r.double();
                            break;
                        }
                    case 5: {
                            m.earningsPershare = r.double();
                            break;
                        }
                    case 6: {
                            m.outstandingShares = r.int64();
                            break;
                        }
                    case 7: {
                            m.outstandingMarketVal = r.double();
                            break;
                        }
                    case 8: {
                            m.netAssetPershare = r.double();
                            break;
                        }
                    case 9: {
                            m.eyRate = r.double();
                            break;
                        }
                    case 10: {
                            m.peRate = r.double();
                            break;
                        }
                    case 11: {
                            m.pbRate = r.double();
                            break;
                        }
                    case 12: {
                            m.peTTMRate = r.double();
                            break;
                        }
                    case 13: {
                            m.dividendTTM = r.double();
                            break;
                        }
                    case 14: {
                            m.dividendRatioTTM = r.double();
                            break;
                        }
                    case 15: {
                            m.dividendLFY = r.double();
                            break;
                        }
                    case 16: {
                            m.dividendLFYRatio = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return EquitySnapshotExData;
        })();
    
        Qot_GetSecuritySnapshot.WarrantSnapshotExData = (function() {
    
            function WarrantSnapshotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            WarrantSnapshotExData.prototype.conversionRate = 0;
            WarrantSnapshotExData.prototype.warrantType = 0;
            WarrantSnapshotExData.prototype.strikePrice = 0;
            WarrantSnapshotExData.prototype.maturityTime = "";
            WarrantSnapshotExData.prototype.endTradeTime = "";
            WarrantSnapshotExData.prototype.owner = null;
            WarrantSnapshotExData.prototype.recoveryPrice = 0;
            WarrantSnapshotExData.prototype.streetVolumn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            WarrantSnapshotExData.prototype.issueVolumn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            WarrantSnapshotExData.prototype.streetRate = 0;
            WarrantSnapshotExData.prototype.delta = 0;
            WarrantSnapshotExData.prototype.impliedVolatility = 0;
            WarrantSnapshotExData.prototype.premium = 0;
            WarrantSnapshotExData.prototype.maturityTimestamp = 0;
            WarrantSnapshotExData.prototype.endTradeTimestamp = 0;
            WarrantSnapshotExData.prototype.leverage = 0;
            WarrantSnapshotExData.prototype.ipop = 0;
            WarrantSnapshotExData.prototype.breakEvenPoint = 0;
            WarrantSnapshotExData.prototype.conversionPrice = 0;
            WarrantSnapshotExData.prototype.priceRecoveryRatio = 0;
            WarrantSnapshotExData.prototype.score = 0;
            WarrantSnapshotExData.prototype.upperStrikePrice = 0;
            WarrantSnapshotExData.prototype.lowerStrikePrice = 0;
            WarrantSnapshotExData.prototype.inLinePriceStatus = 0;
            WarrantSnapshotExData.prototype.issuerCode = "";
    
            WarrantSnapshotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.conversionRate != null && Object.hasOwnProperty.call(m, "conversionRate"))
                    w.uint32(9).double(m.conversionRate);
                if (m.warrantType != null && Object.hasOwnProperty.call(m, "warrantType"))
                    w.uint32(16).int32(m.warrantType);
                if (m.strikePrice != null && Object.hasOwnProperty.call(m, "strikePrice"))
                    w.uint32(25).double(m.strikePrice);
                if (m.maturityTime != null && Object.hasOwnProperty.call(m, "maturityTime"))
                    w.uint32(34).string(m.maturityTime);
                if (m.endTradeTime != null && Object.hasOwnProperty.call(m, "endTradeTime"))
                    w.uint32(42).string(m.endTradeTime);
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(50).fork()).ldelim();
                if (m.recoveryPrice != null && Object.hasOwnProperty.call(m, "recoveryPrice"))
                    w.uint32(57).double(m.recoveryPrice);
                if (m.streetVolumn != null && Object.hasOwnProperty.call(m, "streetVolumn"))
                    w.uint32(64).int64(m.streetVolumn);
                if (m.issueVolumn != null && Object.hasOwnProperty.call(m, "issueVolumn"))
                    w.uint32(72).int64(m.issueVolumn);
                if (m.streetRate != null && Object.hasOwnProperty.call(m, "streetRate"))
                    w.uint32(81).double(m.streetRate);
                if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
                    w.uint32(89).double(m.delta);
                if (m.impliedVolatility != null && Object.hasOwnProperty.call(m, "impliedVolatility"))
                    w.uint32(97).double(m.impliedVolatility);
                if (m.premium != null && Object.hasOwnProperty.call(m, "premium"))
                    w.uint32(105).double(m.premium);
                if (m.maturityTimestamp != null && Object.hasOwnProperty.call(m, "maturityTimestamp"))
                    w.uint32(113).double(m.maturityTimestamp);
                if (m.endTradeTimestamp != null && Object.hasOwnProperty.call(m, "endTradeTimestamp"))
                    w.uint32(121).double(m.endTradeTimestamp);
                if (m.leverage != null && Object.hasOwnProperty.call(m, "leverage"))
                    w.uint32(129).double(m.leverage);
                if (m.ipop != null && Object.hasOwnProperty.call(m, "ipop"))
                    w.uint32(137).double(m.ipop);
                if (m.breakEvenPoint != null && Object.hasOwnProperty.call(m, "breakEvenPoint"))
                    w.uint32(145).double(m.breakEvenPoint);
                if (m.conversionPrice != null && Object.hasOwnProperty.call(m, "conversionPrice"))
                    w.uint32(153).double(m.conversionPrice);
                if (m.priceRecoveryRatio != null && Object.hasOwnProperty.call(m, "priceRecoveryRatio"))
                    w.uint32(161).double(m.priceRecoveryRatio);
                if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                    w.uint32(169).double(m.score);
                if (m.upperStrikePrice != null && Object.hasOwnProperty.call(m, "upperStrikePrice"))
                    w.uint32(177).double(m.upperStrikePrice);
                if (m.lowerStrikePrice != null && Object.hasOwnProperty.call(m, "lowerStrikePrice"))
                    w.uint32(185).double(m.lowerStrikePrice);
                if (m.inLinePriceStatus != null && Object.hasOwnProperty.call(m, "inLinePriceStatus"))
                    w.uint32(192).int32(m.inLinePriceStatus);
                if (m.issuerCode != null && Object.hasOwnProperty.call(m, "issuerCode"))
                    w.uint32(202).string(m.issuerCode);
                return w;
            };
    
            WarrantSnapshotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.WarrantSnapshotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.conversionRate = r.double();
                            break;
                        }
                    case 2: {
                            m.warrantType = r.int32();
                            break;
                        }
                    case 3: {
                            m.strikePrice = r.double();
                            break;
                        }
                    case 4: {
                            m.maturityTime = r.string();
                            break;
                        }
                    case 5: {
                            m.endTradeTime = r.string();
                            break;
                        }
                    case 6: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 7: {
                            m.recoveryPrice = r.double();
                            break;
                        }
                    case 8: {
                            m.streetVolumn = r.int64();
                            break;
                        }
                    case 9: {
                            m.issueVolumn = r.int64();
                            break;
                        }
                    case 10: {
                            m.streetRate = r.double();
                            break;
                        }
                    case 11: {
                            m.delta = r.double();
                            break;
                        }
                    case 12: {
                            m.impliedVolatility = r.double();
                            break;
                        }
                    case 13: {
                            m.premium = r.double();
                            break;
                        }
                    case 14: {
                            m.maturityTimestamp = r.double();
                            break;
                        }
                    case 15: {
                            m.endTradeTimestamp = r.double();
                            break;
                        }
                    case 16: {
                            m.leverage = r.double();
                            break;
                        }
                    case 17: {
                            m.ipop = r.double();
                            break;
                        }
                    case 18: {
                            m.breakEvenPoint = r.double();
                            break;
                        }
                    case 19: {
                            m.conversionPrice = r.double();
                            break;
                        }
                    case 20: {
                            m.priceRecoveryRatio = r.double();
                            break;
                        }
                    case 21: {
                            m.score = r.double();
                            break;
                        }
                    case 22: {
                            m.upperStrikePrice = r.double();
                            break;
                        }
                    case 23: {
                            m.lowerStrikePrice = r.double();
                            break;
                        }
                    case 24: {
                            m.inLinePriceStatus = r.int32();
                            break;
                        }
                    case 25: {
                            m.issuerCode = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return WarrantSnapshotExData;
        })();
    
        Qot_GetSecuritySnapshot.OptionSnapshotExData = (function() {
    
            function OptionSnapshotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OptionSnapshotExData.prototype.type = 0;
            OptionSnapshotExData.prototype.owner = null;
            OptionSnapshotExData.prototype.strikeTime = "";
            OptionSnapshotExData.prototype.strikePrice = 0;
            OptionSnapshotExData.prototype.contractSize = 0;
            OptionSnapshotExData.prototype.contractSizeFloat = 0;
            OptionSnapshotExData.prototype.openInterest = 0;
            OptionSnapshotExData.prototype.impliedVolatility = 0;
            OptionSnapshotExData.prototype.premium = 0;
            OptionSnapshotExData.prototype.delta = 0;
            OptionSnapshotExData.prototype.gamma = 0;
            OptionSnapshotExData.prototype.vega = 0;
            OptionSnapshotExData.prototype.theta = 0;
            OptionSnapshotExData.prototype.rho = 0;
            OptionSnapshotExData.prototype.strikeTimestamp = 0;
            OptionSnapshotExData.prototype.indexOptionType = 0;
            OptionSnapshotExData.prototype.netOpenInterest = 0;
            OptionSnapshotExData.prototype.expiryDateDistance = 0;
            OptionSnapshotExData.prototype.contractNominalValue = 0;
            OptionSnapshotExData.prototype.ownerLotMultiplier = 0;
            OptionSnapshotExData.prototype.optionAreaType = 0;
            OptionSnapshotExData.prototype.contractMultiplier = 0;
    
            OptionSnapshotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(8).int32(m.type);
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(18).fork()).ldelim();
                if (m.strikeTime != null && Object.hasOwnProperty.call(m, "strikeTime"))
                    w.uint32(26).string(m.strikeTime);
                if (m.strikePrice != null && Object.hasOwnProperty.call(m, "strikePrice"))
                    w.uint32(33).double(m.strikePrice);
                if (m.contractSize != null && Object.hasOwnProperty.call(m, "contractSize"))
                    w.uint32(40).int32(m.contractSize);
                if (m.openInterest != null && Object.hasOwnProperty.call(m, "openInterest"))
                    w.uint32(48).int32(m.openInterest);
                if (m.impliedVolatility != null && Object.hasOwnProperty.call(m, "impliedVolatility"))
                    w.uint32(57).double(m.impliedVolatility);
                if (m.premium != null && Object.hasOwnProperty.call(m, "premium"))
                    w.uint32(65).double(m.premium);
                if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
                    w.uint32(73).double(m.delta);
                if (m.gamma != null && Object.hasOwnProperty.call(m, "gamma"))
                    w.uint32(81).double(m.gamma);
                if (m.vega != null && Object.hasOwnProperty.call(m, "vega"))
                    w.uint32(89).double(m.vega);
                if (m.theta != null && Object.hasOwnProperty.call(m, "theta"))
                    w.uint32(97).double(m.theta);
                if (m.rho != null && Object.hasOwnProperty.call(m, "rho"))
                    w.uint32(105).double(m.rho);
                if (m.strikeTimestamp != null && Object.hasOwnProperty.call(m, "strikeTimestamp"))
                    w.uint32(113).double(m.strikeTimestamp);
                if (m.indexOptionType != null && Object.hasOwnProperty.call(m, "indexOptionType"))
                    w.uint32(120).int32(m.indexOptionType);
                if (m.netOpenInterest != null && Object.hasOwnProperty.call(m, "netOpenInterest"))
                    w.uint32(128).int32(m.netOpenInterest);
                if (m.expiryDateDistance != null && Object.hasOwnProperty.call(m, "expiryDateDistance"))
                    w.uint32(136).int32(m.expiryDateDistance);
                if (m.contractNominalValue != null && Object.hasOwnProperty.call(m, "contractNominalValue"))
                    w.uint32(145).double(m.contractNominalValue);
                if (m.ownerLotMultiplier != null && Object.hasOwnProperty.call(m, "ownerLotMultiplier"))
                    w.uint32(153).double(m.ownerLotMultiplier);
                if (m.optionAreaType != null && Object.hasOwnProperty.call(m, "optionAreaType"))
                    w.uint32(160).int32(m.optionAreaType);
                if (m.contractMultiplier != null && Object.hasOwnProperty.call(m, "contractMultiplier"))
                    w.uint32(169).double(m.contractMultiplier);
                if (m.contractSizeFloat != null && Object.hasOwnProperty.call(m, "contractSizeFloat"))
                    w.uint32(177).double(m.contractSizeFloat);
                return w;
            };
    
            OptionSnapshotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.OptionSnapshotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.type = r.int32();
                            break;
                        }
                    case 2: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.strikeTime = r.string();
                            break;
                        }
                    case 4: {
                            m.strikePrice = r.double();
                            break;
                        }
                    case 5: {
                            m.contractSize = r.int32();
                            break;
                        }
                    case 22: {
                            m.contractSizeFloat = r.double();
                            break;
                        }
                    case 6: {
                            m.openInterest = r.int32();
                            break;
                        }
                    case 7: {
                            m.impliedVolatility = r.double();
                            break;
                        }
                    case 8: {
                            m.premium = r.double();
                            break;
                        }
                    case 9: {
                            m.delta = r.double();
                            break;
                        }
                    case 10: {
                            m.gamma = r.double();
                            break;
                        }
                    case 11: {
                            m.vega = r.double();
                            break;
                        }
                    case 12: {
                            m.theta = r.double();
                            break;
                        }
                    case 13: {
                            m.rho = r.double();
                            break;
                        }
                    case 14: {
                            m.strikeTimestamp = r.double();
                            break;
                        }
                    case 15: {
                            m.indexOptionType = r.int32();
                            break;
                        }
                    case 16: {
                            m.netOpenInterest = r.int32();
                            break;
                        }
                    case 17: {
                            m.expiryDateDistance = r.int32();
                            break;
                        }
                    case 18: {
                            m.contractNominalValue = r.double();
                            break;
                        }
                    case 19: {
                            m.ownerLotMultiplier = r.double();
                            break;
                        }
                    case 20: {
                            m.optionAreaType = r.int32();
                            break;
                        }
                    case 21: {
                            m.contractMultiplier = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OptionSnapshotExData;
        })();
    
        Qot_GetSecuritySnapshot.IndexSnapshotExData = (function() {
    
            function IndexSnapshotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            IndexSnapshotExData.prototype.raiseCount = 0;
            IndexSnapshotExData.prototype.fallCount = 0;
            IndexSnapshotExData.prototype.equalCount = 0;
    
            IndexSnapshotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.raiseCount != null && Object.hasOwnProperty.call(m, "raiseCount"))
                    w.uint32(8).int32(m.raiseCount);
                if (m.fallCount != null && Object.hasOwnProperty.call(m, "fallCount"))
                    w.uint32(16).int32(m.fallCount);
                if (m.equalCount != null && Object.hasOwnProperty.call(m, "equalCount"))
                    w.uint32(24).int32(m.equalCount);
                return w;
            };
    
            IndexSnapshotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.IndexSnapshotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.raiseCount = r.int32();
                            break;
                        }
                    case 2: {
                            m.fallCount = r.int32();
                            break;
                        }
                    case 3: {
                            m.equalCount = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return IndexSnapshotExData;
        })();
    
        Qot_GetSecuritySnapshot.PlateSnapshotExData = (function() {
    
            function PlateSnapshotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            PlateSnapshotExData.prototype.raiseCount = 0;
            PlateSnapshotExData.prototype.fallCount = 0;
            PlateSnapshotExData.prototype.equalCount = 0;
    
            PlateSnapshotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.raiseCount != null && Object.hasOwnProperty.call(m, "raiseCount"))
                    w.uint32(8).int32(m.raiseCount);
                if (m.fallCount != null && Object.hasOwnProperty.call(m, "fallCount"))
                    w.uint32(16).int32(m.fallCount);
                if (m.equalCount != null && Object.hasOwnProperty.call(m, "equalCount"))
                    w.uint32(24).int32(m.equalCount);
                return w;
            };
    
            PlateSnapshotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.PlateSnapshotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.raiseCount = r.int32();
                            break;
                        }
                    case 2: {
                            m.fallCount = r.int32();
                            break;
                        }
                    case 3: {
                            m.equalCount = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return PlateSnapshotExData;
        })();
    
        Qot_GetSecuritySnapshot.FutureSnapshotExData = (function() {
    
            function FutureSnapshotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            FutureSnapshotExData.prototype.lastSettlePrice = 0;
            FutureSnapshotExData.prototype.position = 0;
            FutureSnapshotExData.prototype.positionChange = 0;
            FutureSnapshotExData.prototype.lastTradeTime = "";
            FutureSnapshotExData.prototype.lastTradeTimestamp = 0;
            FutureSnapshotExData.prototype.isMainContract = false;
    
            FutureSnapshotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.lastSettlePrice != null && Object.hasOwnProperty.call(m, "lastSettlePrice"))
                    w.uint32(9).double(m.lastSettlePrice);
                if (m.position != null && Object.hasOwnProperty.call(m, "position"))
                    w.uint32(16).int32(m.position);
                if (m.positionChange != null && Object.hasOwnProperty.call(m, "positionChange"))
                    w.uint32(24).int32(m.positionChange);
                if (m.lastTradeTime != null && Object.hasOwnProperty.call(m, "lastTradeTime"))
                    w.uint32(34).string(m.lastTradeTime);
                if (m.lastTradeTimestamp != null && Object.hasOwnProperty.call(m, "lastTradeTimestamp"))
                    w.uint32(41).double(m.lastTradeTimestamp);
                if (m.isMainContract != null && Object.hasOwnProperty.call(m, "isMainContract"))
                    w.uint32(48).bool(m.isMainContract);
                return w;
            };
    
            FutureSnapshotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.FutureSnapshotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.lastSettlePrice = r.double();
                            break;
                        }
                    case 2: {
                            m.position = r.int32();
                            break;
                        }
                    case 3: {
                            m.positionChange = r.int32();
                            break;
                        }
                    case 4: {
                            m.lastTradeTime = r.string();
                            break;
                        }
                    case 5: {
                            m.lastTradeTimestamp = r.double();
                            break;
                        }
                    case 6: {
                            m.isMainContract = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return FutureSnapshotExData;
        })();
    
        Qot_GetSecuritySnapshot.TrustSnapshotExData = (function() {
    
            function TrustSnapshotExData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            TrustSnapshotExData.prototype.dividendYield = 0;
            TrustSnapshotExData.prototype.aum = 0;
            TrustSnapshotExData.prototype.outstandingUnits = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            TrustSnapshotExData.prototype.netAssetValue = 0;
            TrustSnapshotExData.prototype.premium = 0;
            TrustSnapshotExData.prototype.assetClass = 0;
    
            TrustSnapshotExData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.dividendYield != null && Object.hasOwnProperty.call(m, "dividendYield"))
                    w.uint32(9).double(m.dividendYield);
                if (m.aum != null && Object.hasOwnProperty.call(m, "aum"))
                    w.uint32(17).double(m.aum);
                if (m.outstandingUnits != null && Object.hasOwnProperty.call(m, "outstandingUnits"))
                    w.uint32(24).int64(m.outstandingUnits);
                if (m.netAssetValue != null && Object.hasOwnProperty.call(m, "netAssetValue"))
                    w.uint32(33).double(m.netAssetValue);
                if (m.premium != null && Object.hasOwnProperty.call(m, "premium"))
                    w.uint32(41).double(m.premium);
                if (m.assetClass != null && Object.hasOwnProperty.call(m, "assetClass"))
                    w.uint32(48).int32(m.assetClass);
                return w;
            };
    
            TrustSnapshotExData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.TrustSnapshotExData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.dividendYield = r.double();
                            break;
                        }
                    case 2: {
                            m.aum = r.double();
                            break;
                        }
                    case 3: {
                            m.outstandingUnits = r.int64();
                            break;
                        }
                    case 4: {
                            m.netAssetValue = r.double();
                            break;
                        }
                    case 5: {
                            m.premium = r.double();
                            break;
                        }
                    case 6: {
                            m.assetClass = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return TrustSnapshotExData;
        })();
    
        Qot_GetSecuritySnapshot.SnapshotBasicData = (function() {
    
            function SnapshotBasicData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            SnapshotBasicData.prototype.security = null;
            SnapshotBasicData.prototype.name = "";
            SnapshotBasicData.prototype.type = 0;
            SnapshotBasicData.prototype.isSuspend = false;
            SnapshotBasicData.prototype.listTime = "";
            SnapshotBasicData.prototype.lotSize = 0;
            SnapshotBasicData.prototype.priceSpread = 0;
            SnapshotBasicData.prototype.updateTime = "";
            SnapshotBasicData.prototype.highPrice = 0;
            SnapshotBasicData.prototype.openPrice = 0;
            SnapshotBasicData.prototype.lowPrice = 0;
            SnapshotBasicData.prototype.lastClosePrice = 0;
            SnapshotBasicData.prototype.curPrice = 0;
            SnapshotBasicData.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            SnapshotBasicData.prototype.turnover = 0;
            SnapshotBasicData.prototype.turnoverRate = 0;
            SnapshotBasicData.prototype.listTimestamp = 0;
            SnapshotBasicData.prototype.updateTimestamp = 0;
            SnapshotBasicData.prototype.askPrice = 0;
            SnapshotBasicData.prototype.bidPrice = 0;
            SnapshotBasicData.prototype.askVol = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            SnapshotBasicData.prototype.bidVol = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            SnapshotBasicData.prototype.enableMargin = false;
            SnapshotBasicData.prototype.mortgageRatio = 0;
            SnapshotBasicData.prototype.longMarginInitialRatio = 0;
            SnapshotBasicData.prototype.enableShortSell = false;
            SnapshotBasicData.prototype.shortSellRate = 0;
            SnapshotBasicData.prototype.shortAvailableVolume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            SnapshotBasicData.prototype.shortMarginInitialRatio = 0;
            SnapshotBasicData.prototype.amplitude = 0;
            SnapshotBasicData.prototype.avgPrice = 0;
            SnapshotBasicData.prototype.bidAskRatio = 0;
            SnapshotBasicData.prototype.volumeRatio = 0;
            SnapshotBasicData.prototype.highest52WeeksPrice = 0;
            SnapshotBasicData.prototype.lowest52WeeksPrice = 0;
            SnapshotBasicData.prototype.highestHistoryPrice = 0;
            SnapshotBasicData.prototype.lowestHistoryPrice = 0;
            SnapshotBasicData.prototype.preMarket = null;
            SnapshotBasicData.prototype.afterMarket = null;
            SnapshotBasicData.prototype.secStatus = 0;
            SnapshotBasicData.prototype.closePrice5Minute = 0;
            SnapshotBasicData.prototype.overnight = null;
    
            SnapshotBasicData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(16).int32(m.type);
                if (m.isSuspend != null && Object.hasOwnProperty.call(m, "isSuspend"))
                    w.uint32(24).bool(m.isSuspend);
                if (m.listTime != null && Object.hasOwnProperty.call(m, "listTime"))
                    w.uint32(34).string(m.listTime);
                if (m.lotSize != null && Object.hasOwnProperty.call(m, "lotSize"))
                    w.uint32(40).int32(m.lotSize);
                if (m.priceSpread != null && Object.hasOwnProperty.call(m, "priceSpread"))
                    w.uint32(49).double(m.priceSpread);
                if (m.updateTime != null && Object.hasOwnProperty.call(m, "updateTime"))
                    w.uint32(58).string(m.updateTime);
                if (m.highPrice != null && Object.hasOwnProperty.call(m, "highPrice"))
                    w.uint32(65).double(m.highPrice);
                if (m.openPrice != null && Object.hasOwnProperty.call(m, "openPrice"))
                    w.uint32(73).double(m.openPrice);
                if (m.lowPrice != null && Object.hasOwnProperty.call(m, "lowPrice"))
                    w.uint32(81).double(m.lowPrice);
                if (m.lastClosePrice != null && Object.hasOwnProperty.call(m, "lastClosePrice"))
                    w.uint32(89).double(m.lastClosePrice);
                if (m.curPrice != null && Object.hasOwnProperty.call(m, "curPrice"))
                    w.uint32(97).double(m.curPrice);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(104).int64(m.volume);
                if (m.turnover != null && Object.hasOwnProperty.call(m, "turnover"))
                    w.uint32(113).double(m.turnover);
                if (m.turnoverRate != null && Object.hasOwnProperty.call(m, "turnoverRate"))
                    w.uint32(121).double(m.turnoverRate);
                if (m.listTimestamp != null && Object.hasOwnProperty.call(m, "listTimestamp"))
                    w.uint32(129).double(m.listTimestamp);
                if (m.updateTimestamp != null && Object.hasOwnProperty.call(m, "updateTimestamp"))
                    w.uint32(137).double(m.updateTimestamp);
                if (m.askPrice != null && Object.hasOwnProperty.call(m, "askPrice"))
                    w.uint32(145).double(m.askPrice);
                if (m.bidPrice != null && Object.hasOwnProperty.call(m, "bidPrice"))
                    w.uint32(153).double(m.bidPrice);
                if (m.askVol != null && Object.hasOwnProperty.call(m, "askVol"))
                    w.uint32(160).int64(m.askVol);
                if (m.bidVol != null && Object.hasOwnProperty.call(m, "bidVol"))
                    w.uint32(168).int64(m.bidVol);
                if (m.enableMargin != null && Object.hasOwnProperty.call(m, "enableMargin"))
                    w.uint32(176).bool(m.enableMargin);
                if (m.mortgageRatio != null && Object.hasOwnProperty.call(m, "mortgageRatio"))
                    w.uint32(185).double(m.mortgageRatio);
                if (m.longMarginInitialRatio != null && Object.hasOwnProperty.call(m, "longMarginInitialRatio"))
                    w.uint32(193).double(m.longMarginInitialRatio);
                if (m.enableShortSell != null && Object.hasOwnProperty.call(m, "enableShortSell"))
                    w.uint32(200).bool(m.enableShortSell);
                if (m.shortSellRate != null && Object.hasOwnProperty.call(m, "shortSellRate"))
                    w.uint32(209).double(m.shortSellRate);
                if (m.shortAvailableVolume != null && Object.hasOwnProperty.call(m, "shortAvailableVolume"))
                    w.uint32(216).int64(m.shortAvailableVolume);
                if (m.shortMarginInitialRatio != null && Object.hasOwnProperty.call(m, "shortMarginInitialRatio"))
                    w.uint32(225).double(m.shortMarginInitialRatio);
                if (m.amplitude != null && Object.hasOwnProperty.call(m, "amplitude"))
                    w.uint32(233).double(m.amplitude);
                if (m.avgPrice != null && Object.hasOwnProperty.call(m, "avgPrice"))
                    w.uint32(241).double(m.avgPrice);
                if (m.bidAskRatio != null && Object.hasOwnProperty.call(m, "bidAskRatio"))
                    w.uint32(249).double(m.bidAskRatio);
                if (m.volumeRatio != null && Object.hasOwnProperty.call(m, "volumeRatio"))
                    w.uint32(257).double(m.volumeRatio);
                if (m.highest52WeeksPrice != null && Object.hasOwnProperty.call(m, "highest52WeeksPrice"))
                    w.uint32(265).double(m.highest52WeeksPrice);
                if (m.lowest52WeeksPrice != null && Object.hasOwnProperty.call(m, "lowest52WeeksPrice"))
                    w.uint32(273).double(m.lowest52WeeksPrice);
                if (m.highestHistoryPrice != null && Object.hasOwnProperty.call(m, "highestHistoryPrice"))
                    w.uint32(281).double(m.highestHistoryPrice);
                if (m.lowestHistoryPrice != null && Object.hasOwnProperty.call(m, "lowestHistoryPrice"))
                    w.uint32(289).double(m.lowestHistoryPrice);
                if (m.preMarket != null && Object.hasOwnProperty.call(m, "preMarket"))
                    $root.Qot_Common.PreAfterMarketData.encode(m.preMarket, w.uint32(298).fork()).ldelim();
                if (m.afterMarket != null && Object.hasOwnProperty.call(m, "afterMarket"))
                    $root.Qot_Common.PreAfterMarketData.encode(m.afterMarket, w.uint32(306).fork()).ldelim();
                if (m.secStatus != null && Object.hasOwnProperty.call(m, "secStatus"))
                    w.uint32(312).int32(m.secStatus);
                if (m.closePrice5Minute != null && Object.hasOwnProperty.call(m, "closePrice5Minute"))
                    w.uint32(321).double(m.closePrice5Minute);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(330).string(m.name);
                if (m.overnight != null && Object.hasOwnProperty.call(m, "overnight"))
                    $root.Qot_Common.PreAfterMarketData.encode(m.overnight, w.uint32(338).fork()).ldelim();
                return w;
            };
    
            SnapshotBasicData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.SnapshotBasicData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 41: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            m.type = r.int32();
                            break;
                        }
                    case 3: {
                            m.isSuspend = r.bool();
                            break;
                        }
                    case 4: {
                            m.listTime = r.string();
                            break;
                        }
                    case 5: {
                            m.lotSize = r.int32();
                            break;
                        }
                    case 6: {
                            m.priceSpread = r.double();
                            break;
                        }
                    case 7: {
                            m.updateTime = r.string();
                            break;
                        }
                    case 8: {
                            m.highPrice = r.double();
                            break;
                        }
                    case 9: {
                            m.openPrice = r.double();
                            break;
                        }
                    case 10: {
                            m.lowPrice = r.double();
                            break;
                        }
                    case 11: {
                            m.lastClosePrice = r.double();
                            break;
                        }
                    case 12: {
                            m.curPrice = r.double();
                            break;
                        }
                    case 13: {
                            m.volume = r.int64();
                            break;
                        }
                    case 14: {
                            m.turnover = r.double();
                            break;
                        }
                    case 15: {
                            m.turnoverRate = r.double();
                            break;
                        }
                    case 16: {
                            m.listTimestamp = r.double();
                            break;
                        }
                    case 17: {
                            m.updateTimestamp = r.double();
                            break;
                        }
                    case 18: {
                            m.askPrice = r.double();
                            break;
                        }
                    case 19: {
                            m.bidPrice = r.double();
                            break;
                        }
                    case 20: {
                            m.askVol = r.int64();
                            break;
                        }
                    case 21: {
                            m.bidVol = r.int64();
                            break;
                        }
                    case 22: {
                            m.enableMargin = r.bool();
                            break;
                        }
                    case 23: {
                            m.mortgageRatio = r.double();
                            break;
                        }
                    case 24: {
                            m.longMarginInitialRatio = r.double();
                            break;
                        }
                    case 25: {
                            m.enableShortSell = r.bool();
                            break;
                        }
                    case 26: {
                            m.shortSellRate = r.double();
                            break;
                        }
                    case 27: {
                            m.shortAvailableVolume = r.int64();
                            break;
                        }
                    case 28: {
                            m.shortMarginInitialRatio = r.double();
                            break;
                        }
                    case 29: {
                            m.amplitude = r.double();
                            break;
                        }
                    case 30: {
                            m.avgPrice = r.double();
                            break;
                        }
                    case 31: {
                            m.bidAskRatio = r.double();
                            break;
                        }
                    case 32: {
                            m.volumeRatio = r.double();
                            break;
                        }
                    case 33: {
                            m.highest52WeeksPrice = r.double();
                            break;
                        }
                    case 34: {
                            m.lowest52WeeksPrice = r.double();
                            break;
                        }
                    case 35: {
                            m.highestHistoryPrice = r.double();
                            break;
                        }
                    case 36: {
                            m.lowestHistoryPrice = r.double();
                            break;
                        }
                    case 37: {
                            m.preMarket = $root.Qot_Common.PreAfterMarketData.decode(r, r.uint32());
                            break;
                        }
                    case 38: {
                            m.afterMarket = $root.Qot_Common.PreAfterMarketData.decode(r, r.uint32());
                            break;
                        }
                    case 39: {
                            m.secStatus = r.int32();
                            break;
                        }
                    case 40: {
                            m.closePrice5Minute = r.double();
                            break;
                        }
                    case 42: {
                            m.overnight = $root.Qot_Common.PreAfterMarketData.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return SnapshotBasicData;
        })();
    
        Qot_GetSecuritySnapshot.Snapshot = (function() {
    
            function Snapshot(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Snapshot.prototype.basic = null;
            Snapshot.prototype.equityExData = null;
            Snapshot.prototype.warrantExData = null;
            Snapshot.prototype.optionExData = null;
            Snapshot.prototype.indexExData = null;
            Snapshot.prototype.plateExData = null;
            Snapshot.prototype.futureExData = null;
            Snapshot.prototype.trustExData = null;
    
            Snapshot.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.basic != null && Object.hasOwnProperty.call(m, "basic"))
                    $root.Qot_GetSecuritySnapshot.SnapshotBasicData.encode(m.basic, w.uint32(10).fork()).ldelim();
                if (m.equityExData != null && Object.hasOwnProperty.call(m, "equityExData"))
                    $root.Qot_GetSecuritySnapshot.EquitySnapshotExData.encode(m.equityExData, w.uint32(18).fork()).ldelim();
                if (m.warrantExData != null && Object.hasOwnProperty.call(m, "warrantExData"))
                    $root.Qot_GetSecuritySnapshot.WarrantSnapshotExData.encode(m.warrantExData, w.uint32(26).fork()).ldelim();
                if (m.optionExData != null && Object.hasOwnProperty.call(m, "optionExData"))
                    $root.Qot_GetSecuritySnapshot.OptionSnapshotExData.encode(m.optionExData, w.uint32(34).fork()).ldelim();
                if (m.indexExData != null && Object.hasOwnProperty.call(m, "indexExData"))
                    $root.Qot_GetSecuritySnapshot.IndexSnapshotExData.encode(m.indexExData, w.uint32(42).fork()).ldelim();
                if (m.plateExData != null && Object.hasOwnProperty.call(m, "plateExData"))
                    $root.Qot_GetSecuritySnapshot.PlateSnapshotExData.encode(m.plateExData, w.uint32(50).fork()).ldelim();
                if (m.futureExData != null && Object.hasOwnProperty.call(m, "futureExData"))
                    $root.Qot_GetSecuritySnapshot.FutureSnapshotExData.encode(m.futureExData, w.uint32(58).fork()).ldelim();
                if (m.trustExData != null && Object.hasOwnProperty.call(m, "trustExData"))
                    $root.Qot_GetSecuritySnapshot.TrustSnapshotExData.encode(m.trustExData, w.uint32(66).fork()).ldelim();
                return w;
            };
    
            Snapshot.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.Snapshot();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.basic = $root.Qot_GetSecuritySnapshot.SnapshotBasicData.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.equityExData = $root.Qot_GetSecuritySnapshot.EquitySnapshotExData.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.warrantExData = $root.Qot_GetSecuritySnapshot.WarrantSnapshotExData.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.optionExData = $root.Qot_GetSecuritySnapshot.OptionSnapshotExData.decode(r, r.uint32());
                            break;
                        }
                    case 5: {
                            m.indexExData = $root.Qot_GetSecuritySnapshot.IndexSnapshotExData.decode(r, r.uint32());
                            break;
                        }
                    case 6: {
                            m.plateExData = $root.Qot_GetSecuritySnapshot.PlateSnapshotExData.decode(r, r.uint32());
                            break;
                        }
                    case 7: {
                            m.futureExData = $root.Qot_GetSecuritySnapshot.FutureSnapshotExData.decode(r, r.uint32());
                            break;
                        }
                    case 8: {
                            m.trustExData = $root.Qot_GetSecuritySnapshot.TrustSnapshotExData.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Snapshot;
        })();
    
        Qot_GetSecuritySnapshot.S2C = (function() {
    
            function S2C(p) {
                this.snapshotList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.snapshotList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.snapshotList != null && m.snapshotList.length) {
                    for (var i = 0; i < m.snapshotList.length; ++i)
                        $root.Qot_GetSecuritySnapshot.Snapshot.encode(m.snapshotList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.snapshotList && m.snapshotList.length))
                                m.snapshotList = [];
                            m.snapshotList.push($root.Qot_GetSecuritySnapshot.Snapshot.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetSecuritySnapshot.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetSecuritySnapshot.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetSecuritySnapshot.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetSecuritySnapshot.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetSecuritySnapshot.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSecuritySnapshot.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetSecuritySnapshot.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetSecuritySnapshot;
    })();
    
    $root.Qot_GetStaticInfo = (function() {
    
        var Qot_GetStaticInfo = {};
    
        Qot_GetStaticInfo.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.market = 0;
            C2S.prototype.secType = 0;
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(8).int32(m.market);
                if (m.secType != null && Object.hasOwnProperty.call(m, "secType"))
                    w.uint32(16).int32(m.secType);
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetStaticInfo.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.market = r.int32();
                            break;
                        }
                    case 2: {
                            m.secType = r.int32();
                            break;
                        }
                    case 3: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetStaticInfo.S2C = (function() {
    
            function S2C(p) {
                this.staticInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.staticInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.staticInfoList != null && m.staticInfoList.length) {
                    for (var i = 0; i < m.staticInfoList.length; ++i)
                        $root.Qot_Common.SecurityStaticInfo.encode(m.staticInfoList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetStaticInfo.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.staticInfoList && m.staticInfoList.length))
                                m.staticInfoList = [];
                            m.staticInfoList.push($root.Qot_Common.SecurityStaticInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetStaticInfo.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetStaticInfo.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetStaticInfo.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetStaticInfo.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetStaticInfo.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetStaticInfo.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetStaticInfo.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetStaticInfo.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetStaticInfo;
    })();
    
    $root.Qot_GetSubInfo = (function() {
    
        var Qot_GetSubInfo = {};
    
        Qot_GetSubInfo.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.isReqAllConn = false;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.isReqAllConn != null && Object.hasOwnProperty.call(m, "isReqAllConn"))
                    w.uint32(8).bool(m.isReqAllConn);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSubInfo.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.isReqAllConn = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetSubInfo.S2C = (function() {
    
            function S2C(p) {
                this.connSubInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.connSubInfoList = $util.emptyArray;
            S2C.prototype.totalUsedQuota = 0;
            S2C.prototype.remainQuota = 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.connSubInfoList != null && m.connSubInfoList.length) {
                    for (var i = 0; i < m.connSubInfoList.length; ++i)
                        $root.Qot_Common.ConnSubInfo.encode(m.connSubInfoList[i], w.uint32(10).fork()).ldelim();
                }
                if (m.totalUsedQuota != null && Object.hasOwnProperty.call(m, "totalUsedQuota"))
                    w.uint32(16).int32(m.totalUsedQuota);
                if (m.remainQuota != null && Object.hasOwnProperty.call(m, "remainQuota"))
                    w.uint32(24).int32(m.remainQuota);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSubInfo.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.connSubInfoList && m.connSubInfoList.length))
                                m.connSubInfoList = [];
                            m.connSubInfoList.push($root.Qot_Common.ConnSubInfo.decode(r, r.uint32()));
                            break;
                        }
                    case 2: {
                            m.totalUsedQuota = r.int32();
                            break;
                        }
                    case 3: {
                            m.remainQuota = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetSubInfo.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetSubInfo.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSubInfo.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetSubInfo.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetSubInfo.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetSubInfo.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetSubInfo.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetSubInfo.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetSubInfo;
    })();
    
    $root.Qot_GetTicker = (function() {
    
        var Qot_GetTicker = {};
    
        Qot_GetTicker.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
            C2S.prototype.maxRetNum = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.maxRetNum != null && Object.hasOwnProperty.call(m, "maxRetNum"))
                    w.uint32(16).int32(m.maxRetNum);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetTicker.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.maxRetNum = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetTicker.S2C = (function() {
    
            function S2C(p) {
                this.tickerList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.tickerList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.tickerList != null && m.tickerList.length) {
                    for (var i = 0; i < m.tickerList.length; ++i)
                        $root.Qot_Common.Ticker.encode(m.tickerList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetTicker.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.tickerList && m.tickerList.length))
                                m.tickerList = [];
                            m.tickerList.push($root.Qot_Common.Ticker.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetTicker.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetTicker.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetTicker.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetTicker.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetTicker.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetTicker.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetTicker.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetTicker.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetTicker;
    })();
    
    $root.Qot_GetUserSecurity = (function() {
    
        var Qot_GetUserSecurity = {};
    
        Qot_GetUserSecurity.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.groupName = "";
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.groupName != null && Object.hasOwnProperty.call(m, "groupName"))
                    w.uint32(10).string(m.groupName);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurity.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.groupName = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetUserSecurity.S2C = (function() {
    
            function S2C(p) {
                this.staticInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.staticInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.staticInfoList != null && m.staticInfoList.length) {
                    for (var i = 0; i < m.staticInfoList.length; ++i)
                        $root.Qot_Common.SecurityStaticInfo.encode(m.staticInfoList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurity.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.staticInfoList && m.staticInfoList.length))
                                m.staticInfoList = [];
                            m.staticInfoList.push($root.Qot_Common.SecurityStaticInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetUserSecurity.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetUserSecurity.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurity.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetUserSecurity.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetUserSecurity.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetUserSecurity.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurity.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetUserSecurity.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetUserSecurity;
    })();
    
    $root.Qot_GetUserSecurityGroup = (function() {
    
        var Qot_GetUserSecurityGroup = {};
    
        Qot_GetUserSecurityGroup.GroupType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GroupType_Unknown"] = 0;
            values[valuesById[1] = "GroupType_Custom"] = 1;
            values[valuesById[2] = "GroupType_System"] = 2;
            values[valuesById[3] = "GroupType_All"] = 3;
            return values;
        })();
    
        Qot_GetUserSecurityGroup.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.groupType = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.groupType != null && Object.hasOwnProperty.call(m, "groupType"))
                    w.uint32(8).int32(m.groupType);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurityGroup.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.groupType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetUserSecurityGroup.GroupData = (function() {
    
            function GroupData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            GroupData.prototype.groupName = "";
            GroupData.prototype.groupType = 0;
    
            GroupData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.groupName != null && Object.hasOwnProperty.call(m, "groupName"))
                    w.uint32(10).string(m.groupName);
                if (m.groupType != null && Object.hasOwnProperty.call(m, "groupType"))
                    w.uint32(16).int32(m.groupType);
                return w;
            };
    
            GroupData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurityGroup.GroupData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.groupName = r.string();
                            break;
                        }
                    case 2: {
                            m.groupType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return GroupData;
        })();
    
        Qot_GetUserSecurityGroup.S2C = (function() {
    
            function S2C(p) {
                this.groupList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.groupList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.groupList != null && m.groupList.length) {
                    for (var i = 0; i < m.groupList.length; ++i)
                        $root.Qot_GetUserSecurityGroup.GroupData.encode(m.groupList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurityGroup.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.groupList && m.groupList.length))
                                m.groupList = [];
                            m.groupList.push($root.Qot_GetUserSecurityGroup.GroupData.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetUserSecurityGroup.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetUserSecurityGroup.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurityGroup.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetUserSecurityGroup.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetUserSecurityGroup.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetUserSecurityGroup.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetUserSecurityGroup.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetUserSecurityGroup.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetUserSecurityGroup;
    })();
    
    $root.Qot_GetWarrant = (function() {
    
        var Qot_GetWarrant = {};
    
        Qot_GetWarrant.C2S = (function() {
    
            function C2S(p) {
                this.typeList = [];
                this.issuerList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.begin = 0;
            C2S.prototype.num = 0;
            C2S.prototype.sortField = 0;
            C2S.prototype.ascend = false;
            C2S.prototype.owner = null;
            C2S.prototype.typeList = $util.emptyArray;
            C2S.prototype.issuerList = $util.emptyArray;
            C2S.prototype.maturityTimeMin = "";
            C2S.prototype.maturityTimeMax = "";
            C2S.prototype.ipoPeriod = 0;
            C2S.prototype.priceType = 0;
            C2S.prototype.status = 0;
            C2S.prototype.curPriceMin = 0;
            C2S.prototype.curPriceMax = 0;
            C2S.prototype.strikePriceMin = 0;
            C2S.prototype.strikePriceMax = 0;
            C2S.prototype.streetMin = 0;
            C2S.prototype.streetMax = 0;
            C2S.prototype.conversionMin = 0;
            C2S.prototype.conversionMax = 0;
            C2S.prototype.volMin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            C2S.prototype.volMax = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            C2S.prototype.premiumMin = 0;
            C2S.prototype.premiumMax = 0;
            C2S.prototype.leverageRatioMin = 0;
            C2S.prototype.leverageRatioMax = 0;
            C2S.prototype.deltaMin = 0;
            C2S.prototype.deltaMax = 0;
            C2S.prototype.impliedMin = 0;
            C2S.prototype.impliedMax = 0;
            C2S.prototype.recoveryPriceMin = 0;
            C2S.prototype.recoveryPriceMax = 0;
            C2S.prototype.priceRecoveryRatioMin = 0;
            C2S.prototype.priceRecoveryRatioMax = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.begin != null && Object.hasOwnProperty.call(m, "begin"))
                    w.uint32(8).int32(m.begin);
                if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                    w.uint32(16).int32(m.num);
                if (m.sortField != null && Object.hasOwnProperty.call(m, "sortField"))
                    w.uint32(24).int32(m.sortField);
                if (m.ascend != null && Object.hasOwnProperty.call(m, "ascend"))
                    w.uint32(32).bool(m.ascend);
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(42).fork()).ldelim();
                if (m.typeList != null && m.typeList.length) {
                    w.uint32(50).fork();
                    for (var i = 0; i < m.typeList.length; ++i)
                        w.int32(m.typeList[i]);
                    w.ldelim();
                }
                if (m.issuerList != null && m.issuerList.length) {
                    w.uint32(58).fork();
                    for (var i = 0; i < m.issuerList.length; ++i)
                        w.int32(m.issuerList[i]);
                    w.ldelim();
                }
                if (m.maturityTimeMin != null && Object.hasOwnProperty.call(m, "maturityTimeMin"))
                    w.uint32(66).string(m.maturityTimeMin);
                if (m.maturityTimeMax != null && Object.hasOwnProperty.call(m, "maturityTimeMax"))
                    w.uint32(74).string(m.maturityTimeMax);
                if (m.ipoPeriod != null && Object.hasOwnProperty.call(m, "ipoPeriod"))
                    w.uint32(80).int32(m.ipoPeriod);
                if (m.priceType != null && Object.hasOwnProperty.call(m, "priceType"))
                    w.uint32(88).int32(m.priceType);
                if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                    w.uint32(96).int32(m.status);
                if (m.curPriceMin != null && Object.hasOwnProperty.call(m, "curPriceMin"))
                    w.uint32(105).double(m.curPriceMin);
                if (m.curPriceMax != null && Object.hasOwnProperty.call(m, "curPriceMax"))
                    w.uint32(113).double(m.curPriceMax);
                if (m.strikePriceMin != null && Object.hasOwnProperty.call(m, "strikePriceMin"))
                    w.uint32(121).double(m.strikePriceMin);
                if (m.strikePriceMax != null && Object.hasOwnProperty.call(m, "strikePriceMax"))
                    w.uint32(129).double(m.strikePriceMax);
                if (m.streetMin != null && Object.hasOwnProperty.call(m, "streetMin"))
                    w.uint32(137).double(m.streetMin);
                if (m.streetMax != null && Object.hasOwnProperty.call(m, "streetMax"))
                    w.uint32(145).double(m.streetMax);
                if (m.conversionMin != null && Object.hasOwnProperty.call(m, "conversionMin"))
                    w.uint32(153).double(m.conversionMin);
                if (m.conversionMax != null && Object.hasOwnProperty.call(m, "conversionMax"))
                    w.uint32(161).double(m.conversionMax);
                if (m.volMin != null && Object.hasOwnProperty.call(m, "volMin"))
                    w.uint32(168).uint64(m.volMin);
                if (m.volMax != null && Object.hasOwnProperty.call(m, "volMax"))
                    w.uint32(176).uint64(m.volMax);
                if (m.premiumMin != null && Object.hasOwnProperty.call(m, "premiumMin"))
                    w.uint32(185).double(m.premiumMin);
                if (m.premiumMax != null && Object.hasOwnProperty.call(m, "premiumMax"))
                    w.uint32(193).double(m.premiumMax);
                if (m.leverageRatioMin != null && Object.hasOwnProperty.call(m, "leverageRatioMin"))
                    w.uint32(201).double(m.leverageRatioMin);
                if (m.leverageRatioMax != null && Object.hasOwnProperty.call(m, "leverageRatioMax"))
                    w.uint32(209).double(m.leverageRatioMax);
                if (m.deltaMin != null && Object.hasOwnProperty.call(m, "deltaMin"))
                    w.uint32(217).double(m.deltaMin);
                if (m.deltaMax != null && Object.hasOwnProperty.call(m, "deltaMax"))
                    w.uint32(225).double(m.deltaMax);
                if (m.impliedMin != null && Object.hasOwnProperty.call(m, "impliedMin"))
                    w.uint32(233).double(m.impliedMin);
                if (m.impliedMax != null && Object.hasOwnProperty.call(m, "impliedMax"))
                    w.uint32(241).double(m.impliedMax);
                if (m.recoveryPriceMin != null && Object.hasOwnProperty.call(m, "recoveryPriceMin"))
                    w.uint32(249).double(m.recoveryPriceMin);
                if (m.recoveryPriceMax != null && Object.hasOwnProperty.call(m, "recoveryPriceMax"))
                    w.uint32(257).double(m.recoveryPriceMax);
                if (m.priceRecoveryRatioMin != null && Object.hasOwnProperty.call(m, "priceRecoveryRatioMin"))
                    w.uint32(265).double(m.priceRecoveryRatioMin);
                if (m.priceRecoveryRatioMax != null && Object.hasOwnProperty.call(m, "priceRecoveryRatioMax"))
                    w.uint32(273).double(m.priceRecoveryRatioMax);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetWarrant.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.begin = r.int32();
                            break;
                        }
                    case 2: {
                            m.num = r.int32();
                            break;
                        }
                    case 3: {
                            m.sortField = r.int32();
                            break;
                        }
                    case 4: {
                            m.ascend = r.bool();
                            break;
                        }
                    case 5: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 6: {
                            if (!(m.typeList && m.typeList.length))
                                m.typeList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.typeList.push(r.int32());
                            } else
                                m.typeList.push(r.int32());
                            break;
                        }
                    case 7: {
                            if (!(m.issuerList && m.issuerList.length))
                                m.issuerList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.issuerList.push(r.int32());
                            } else
                                m.issuerList.push(r.int32());
                            break;
                        }
                    case 8: {
                            m.maturityTimeMin = r.string();
                            break;
                        }
                    case 9: {
                            m.maturityTimeMax = r.string();
                            break;
                        }
                    case 10: {
                            m.ipoPeriod = r.int32();
                            break;
                        }
                    case 11: {
                            m.priceType = r.int32();
                            break;
                        }
                    case 12: {
                            m.status = r.int32();
                            break;
                        }
                    case 13: {
                            m.curPriceMin = r.double();
                            break;
                        }
                    case 14: {
                            m.curPriceMax = r.double();
                            break;
                        }
                    case 15: {
                            m.strikePriceMin = r.double();
                            break;
                        }
                    case 16: {
                            m.strikePriceMax = r.double();
                            break;
                        }
                    case 17: {
                            m.streetMin = r.double();
                            break;
                        }
                    case 18: {
                            m.streetMax = r.double();
                            break;
                        }
                    case 19: {
                            m.conversionMin = r.double();
                            break;
                        }
                    case 20: {
                            m.conversionMax = r.double();
                            break;
                        }
                    case 21: {
                            m.volMin = r.uint64();
                            break;
                        }
                    case 22: {
                            m.volMax = r.uint64();
                            break;
                        }
                    case 23: {
                            m.premiumMin = r.double();
                            break;
                        }
                    case 24: {
                            m.premiumMax = r.double();
                            break;
                        }
                    case 25: {
                            m.leverageRatioMin = r.double();
                            break;
                        }
                    case 26: {
                            m.leverageRatioMax = r.double();
                            break;
                        }
                    case 27: {
                            m.deltaMin = r.double();
                            break;
                        }
                    case 28: {
                            m.deltaMax = r.double();
                            break;
                        }
                    case 29: {
                            m.impliedMin = r.double();
                            break;
                        }
                    case 30: {
                            m.impliedMax = r.double();
                            break;
                        }
                    case 31: {
                            m.recoveryPriceMin = r.double();
                            break;
                        }
                    case 32: {
                            m.recoveryPriceMax = r.double();
                            break;
                        }
                    case 33: {
                            m.priceRecoveryRatioMin = r.double();
                            break;
                        }
                    case 34: {
                            m.priceRecoveryRatioMax = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_GetWarrant.WarrantData = (function() {
    
            function WarrantData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            WarrantData.prototype.stock = null;
            WarrantData.prototype.owner = null;
            WarrantData.prototype.type = 0;
            WarrantData.prototype.issuer = 0;
            WarrantData.prototype.maturityTime = "";
            WarrantData.prototype.maturityTimestamp = 0;
            WarrantData.prototype.listTime = "";
            WarrantData.prototype.listTimestamp = 0;
            WarrantData.prototype.lastTradeTime = "";
            WarrantData.prototype.lastTradeTimestamp = 0;
            WarrantData.prototype.recoveryPrice = 0;
            WarrantData.prototype.conversionRatio = 0;
            WarrantData.prototype.lotSize = 0;
            WarrantData.prototype.strikePrice = 0;
            WarrantData.prototype.lastClosePrice = 0;
            WarrantData.prototype.name = "";
            WarrantData.prototype.curPrice = 0;
            WarrantData.prototype.priceChangeVal = 0;
            WarrantData.prototype.changeRate = 0;
            WarrantData.prototype.status = 0;
            WarrantData.prototype.bidPrice = 0;
            WarrantData.prototype.askPrice = 0;
            WarrantData.prototype.bidVol = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            WarrantData.prototype.askVol = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            WarrantData.prototype.volume = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            WarrantData.prototype.turnover = 0;
            WarrantData.prototype.score = 0;
            WarrantData.prototype.premium = 0;
            WarrantData.prototype.breakEvenPoint = 0;
            WarrantData.prototype.leverage = 0;
            WarrantData.prototype.ipop = 0;
            WarrantData.prototype.priceRecoveryRatio = 0;
            WarrantData.prototype.conversionPrice = 0;
            WarrantData.prototype.streetRate = 0;
            WarrantData.prototype.streetVol = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            WarrantData.prototype.amplitude = 0;
            WarrantData.prototype.issueSize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            WarrantData.prototype.highPrice = 0;
            WarrantData.prototype.lowPrice = 0;
            WarrantData.prototype.impliedVolatility = 0;
            WarrantData.prototype.delta = 0;
            WarrantData.prototype.effectiveLeverage = 0;
            WarrantData.prototype.upperStrikePrice = 0;
            WarrantData.prototype.lowerStrikePrice = 0;
            WarrantData.prototype.inLinePriceStatus = 0;
    
            WarrantData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.stock != null && Object.hasOwnProperty.call(m, "stock"))
                    $root.Qot_Common.Security.encode(m.stock, w.uint32(10).fork()).ldelim();
                if (m.owner != null && Object.hasOwnProperty.call(m, "owner"))
                    $root.Qot_Common.Security.encode(m.owner, w.uint32(18).fork()).ldelim();
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(24).int32(m.type);
                if (m.issuer != null && Object.hasOwnProperty.call(m, "issuer"))
                    w.uint32(32).int32(m.issuer);
                if (m.maturityTime != null && Object.hasOwnProperty.call(m, "maturityTime"))
                    w.uint32(42).string(m.maturityTime);
                if (m.maturityTimestamp != null && Object.hasOwnProperty.call(m, "maturityTimestamp"))
                    w.uint32(49).double(m.maturityTimestamp);
                if (m.listTime != null && Object.hasOwnProperty.call(m, "listTime"))
                    w.uint32(58).string(m.listTime);
                if (m.listTimestamp != null && Object.hasOwnProperty.call(m, "listTimestamp"))
                    w.uint32(65).double(m.listTimestamp);
                if (m.lastTradeTime != null && Object.hasOwnProperty.call(m, "lastTradeTime"))
                    w.uint32(74).string(m.lastTradeTime);
                if (m.lastTradeTimestamp != null && Object.hasOwnProperty.call(m, "lastTradeTimestamp"))
                    w.uint32(81).double(m.lastTradeTimestamp);
                if (m.recoveryPrice != null && Object.hasOwnProperty.call(m, "recoveryPrice"))
                    w.uint32(89).double(m.recoveryPrice);
                if (m.conversionRatio != null && Object.hasOwnProperty.call(m, "conversionRatio"))
                    w.uint32(97).double(m.conversionRatio);
                if (m.lotSize != null && Object.hasOwnProperty.call(m, "lotSize"))
                    w.uint32(104).int32(m.lotSize);
                if (m.strikePrice != null && Object.hasOwnProperty.call(m, "strikePrice"))
                    w.uint32(113).double(m.strikePrice);
                if (m.lastClosePrice != null && Object.hasOwnProperty.call(m, "lastClosePrice"))
                    w.uint32(121).double(m.lastClosePrice);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(130).string(m.name);
                if (m.curPrice != null && Object.hasOwnProperty.call(m, "curPrice"))
                    w.uint32(137).double(m.curPrice);
                if (m.priceChangeVal != null && Object.hasOwnProperty.call(m, "priceChangeVal"))
                    w.uint32(145).double(m.priceChangeVal);
                if (m.changeRate != null && Object.hasOwnProperty.call(m, "changeRate"))
                    w.uint32(153).double(m.changeRate);
                if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                    w.uint32(160).int32(m.status);
                if (m.bidPrice != null && Object.hasOwnProperty.call(m, "bidPrice"))
                    w.uint32(169).double(m.bidPrice);
                if (m.askPrice != null && Object.hasOwnProperty.call(m, "askPrice"))
                    w.uint32(177).double(m.askPrice);
                if (m.bidVol != null && Object.hasOwnProperty.call(m, "bidVol"))
                    w.uint32(184).int64(m.bidVol);
                if (m.askVol != null && Object.hasOwnProperty.call(m, "askVol"))
                    w.uint32(192).int64(m.askVol);
                if (m.volume != null && Object.hasOwnProperty.call(m, "volume"))
                    w.uint32(200).int64(m.volume);
                if (m.turnover != null && Object.hasOwnProperty.call(m, "turnover"))
                    w.uint32(209).double(m.turnover);
                if (m.score != null && Object.hasOwnProperty.call(m, "score"))
                    w.uint32(217).double(m.score);
                if (m.premium != null && Object.hasOwnProperty.call(m, "premium"))
                    w.uint32(225).double(m.premium);
                if (m.breakEvenPoint != null && Object.hasOwnProperty.call(m, "breakEvenPoint"))
                    w.uint32(233).double(m.breakEvenPoint);
                if (m.leverage != null && Object.hasOwnProperty.call(m, "leverage"))
                    w.uint32(241).double(m.leverage);
                if (m.ipop != null && Object.hasOwnProperty.call(m, "ipop"))
                    w.uint32(249).double(m.ipop);
                if (m.priceRecoveryRatio != null && Object.hasOwnProperty.call(m, "priceRecoveryRatio"))
                    w.uint32(257).double(m.priceRecoveryRatio);
                if (m.conversionPrice != null && Object.hasOwnProperty.call(m, "conversionPrice"))
                    w.uint32(265).double(m.conversionPrice);
                if (m.streetRate != null && Object.hasOwnProperty.call(m, "streetRate"))
                    w.uint32(273).double(m.streetRate);
                if (m.streetVol != null && Object.hasOwnProperty.call(m, "streetVol"))
                    w.uint32(280).int64(m.streetVol);
                if (m.amplitude != null && Object.hasOwnProperty.call(m, "amplitude"))
                    w.uint32(289).double(m.amplitude);
                if (m.issueSize != null && Object.hasOwnProperty.call(m, "issueSize"))
                    w.uint32(296).int64(m.issueSize);
                if (m.highPrice != null && Object.hasOwnProperty.call(m, "highPrice"))
                    w.uint32(313).double(m.highPrice);
                if (m.lowPrice != null && Object.hasOwnProperty.call(m, "lowPrice"))
                    w.uint32(321).double(m.lowPrice);
                if (m.impliedVolatility != null && Object.hasOwnProperty.call(m, "impliedVolatility"))
                    w.uint32(329).double(m.impliedVolatility);
                if (m.delta != null && Object.hasOwnProperty.call(m, "delta"))
                    w.uint32(337).double(m.delta);
                if (m.effectiveLeverage != null && Object.hasOwnProperty.call(m, "effectiveLeverage"))
                    w.uint32(345).double(m.effectiveLeverage);
                if (m.upperStrikePrice != null && Object.hasOwnProperty.call(m, "upperStrikePrice"))
                    w.uint32(353).double(m.upperStrikePrice);
                if (m.lowerStrikePrice != null && Object.hasOwnProperty.call(m, "lowerStrikePrice"))
                    w.uint32(361).double(m.lowerStrikePrice);
                if (m.inLinePriceStatus != null && Object.hasOwnProperty.call(m, "inLinePriceStatus"))
                    w.uint32(368).int32(m.inLinePriceStatus);
                return w;
            };
    
            WarrantData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetWarrant.WarrantData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.stock = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.owner = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.type = r.int32();
                            break;
                        }
                    case 4: {
                            m.issuer = r.int32();
                            break;
                        }
                    case 5: {
                            m.maturityTime = r.string();
                            break;
                        }
                    case 6: {
                            m.maturityTimestamp = r.double();
                            break;
                        }
                    case 7: {
                            m.listTime = r.string();
                            break;
                        }
                    case 8: {
                            m.listTimestamp = r.double();
                            break;
                        }
                    case 9: {
                            m.lastTradeTime = r.string();
                            break;
                        }
                    case 10: {
                            m.lastTradeTimestamp = r.double();
                            break;
                        }
                    case 11: {
                            m.recoveryPrice = r.double();
                            break;
                        }
                    case 12: {
                            m.conversionRatio = r.double();
                            break;
                        }
                    case 13: {
                            m.lotSize = r.int32();
                            break;
                        }
                    case 14: {
                            m.strikePrice = r.double();
                            break;
                        }
                    case 15: {
                            m.lastClosePrice = r.double();
                            break;
                        }
                    case 16: {
                            m.name = r.string();
                            break;
                        }
                    case 17: {
                            m.curPrice = r.double();
                            break;
                        }
                    case 18: {
                            m.priceChangeVal = r.double();
                            break;
                        }
                    case 19: {
                            m.changeRate = r.double();
                            break;
                        }
                    case 20: {
                            m.status = r.int32();
                            break;
                        }
                    case 21: {
                            m.bidPrice = r.double();
                            break;
                        }
                    case 22: {
                            m.askPrice = r.double();
                            break;
                        }
                    case 23: {
                            m.bidVol = r.int64();
                            break;
                        }
                    case 24: {
                            m.askVol = r.int64();
                            break;
                        }
                    case 25: {
                            m.volume = r.int64();
                            break;
                        }
                    case 26: {
                            m.turnover = r.double();
                            break;
                        }
                    case 27: {
                            m.score = r.double();
                            break;
                        }
                    case 28: {
                            m.premium = r.double();
                            break;
                        }
                    case 29: {
                            m.breakEvenPoint = r.double();
                            break;
                        }
                    case 30: {
                            m.leverage = r.double();
                            break;
                        }
                    case 31: {
                            m.ipop = r.double();
                            break;
                        }
                    case 32: {
                            m.priceRecoveryRatio = r.double();
                            break;
                        }
                    case 33: {
                            m.conversionPrice = r.double();
                            break;
                        }
                    case 34: {
                            m.streetRate = r.double();
                            break;
                        }
                    case 35: {
                            m.streetVol = r.int64();
                            break;
                        }
                    case 36: {
                            m.amplitude = r.double();
                            break;
                        }
                    case 37: {
                            m.issueSize = r.int64();
                            break;
                        }
                    case 39: {
                            m.highPrice = r.double();
                            break;
                        }
                    case 40: {
                            m.lowPrice = r.double();
                            break;
                        }
                    case 41: {
                            m.impliedVolatility = r.double();
                            break;
                        }
                    case 42: {
                            m.delta = r.double();
                            break;
                        }
                    case 43: {
                            m.effectiveLeverage = r.double();
                            break;
                        }
                    case 44: {
                            m.upperStrikePrice = r.double();
                            break;
                        }
                    case 45: {
                            m.lowerStrikePrice = r.double();
                            break;
                        }
                    case 46: {
                            m.inLinePriceStatus = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return WarrantData;
        })();
    
        Qot_GetWarrant.S2C = (function() {
    
            function S2C(p) {
                this.warrantDataList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.lastPage = false;
            S2C.prototype.allCount = 0;
            S2C.prototype.warrantDataList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.lastPage != null && Object.hasOwnProperty.call(m, "lastPage"))
                    w.uint32(8).bool(m.lastPage);
                if (m.allCount != null && Object.hasOwnProperty.call(m, "allCount"))
                    w.uint32(16).int32(m.allCount);
                if (m.warrantDataList != null && m.warrantDataList.length) {
                    for (var i = 0; i < m.warrantDataList.length; ++i)
                        $root.Qot_GetWarrant.WarrantData.encode(m.warrantDataList[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetWarrant.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.lastPage = r.bool();
                            break;
                        }
                    case 2: {
                            m.allCount = r.int32();
                            break;
                        }
                    case 3: {
                            if (!(m.warrantDataList && m.warrantDataList.length))
                                m.warrantDataList = [];
                            m.warrantDataList.push($root.Qot_GetWarrant.WarrantData.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_GetWarrant.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_GetWarrant.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetWarrant.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_GetWarrant.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_GetWarrant.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_GetWarrant.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_GetWarrant.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_GetWarrant.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_GetWarrant;
    })();
    
    $root.Qot_ModifyUserSecurity = (function() {
    
        var Qot_ModifyUserSecurity = {};
    
        Qot_ModifyUserSecurity.ModifyUserSecurityOp = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ModifyUserSecurityOp_Unknown"] = 0;
            values[valuesById[1] = "ModifyUserSecurityOp_Add"] = 1;
            values[valuesById[2] = "ModifyUserSecurityOp_Del"] = 2;
            values[valuesById[3] = "ModifyUserSecurityOp_MoveOut"] = 3;
            return values;
        })();
    
        Qot_ModifyUserSecurity.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.groupName = "";
            C2S.prototype.op = 0;
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.groupName != null && Object.hasOwnProperty.call(m, "groupName"))
                    w.uint32(10).string(m.groupName);
                if (m.op != null && Object.hasOwnProperty.call(m, "op"))
                    w.uint32(16).int32(m.op);
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_ModifyUserSecurity.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.groupName = r.string();
                            break;
                        }
                    case 2: {
                            m.op = r.int32();
                            break;
                        }
                    case 3: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_ModifyUserSecurity.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_ModifyUserSecurity.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_ModifyUserSecurity.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_ModifyUserSecurity.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_ModifyUserSecurity.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_ModifyUserSecurity.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_ModifyUserSecurity.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_ModifyUserSecurity.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_ModifyUserSecurity.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_ModifyUserSecurity.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_ModifyUserSecurity;
    })();
    
    $root.Qot_RequestHistoryKL = (function() {
    
        var Qot_RequestHistoryKL = {};
    
        Qot_RequestHistoryKL.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.rehabType = 0;
            C2S.prototype.klType = 0;
            C2S.prototype.security = null;
            C2S.prototype.beginTime = "";
            C2S.prototype.endTime = "";
            C2S.prototype.maxAckKLNum = 0;
            C2S.prototype.needKLFieldsFlag = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            C2S.prototype.nextReqKey = $util.newBuffer([]);
            C2S.prototype.extendedTime = false;
            C2S.prototype.session = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.rehabType != null && Object.hasOwnProperty.call(m, "rehabType"))
                    w.uint32(8).int32(m.rehabType);
                if (m.klType != null && Object.hasOwnProperty.call(m, "klType"))
                    w.uint32(16).int32(m.klType);
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(26).fork()).ldelim();
                if (m.beginTime != null && Object.hasOwnProperty.call(m, "beginTime"))
                    w.uint32(34).string(m.beginTime);
                if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                    w.uint32(42).string(m.endTime);
                if (m.maxAckKLNum != null && Object.hasOwnProperty.call(m, "maxAckKLNum"))
                    w.uint32(48).int32(m.maxAckKLNum);
                if (m.needKLFieldsFlag != null && Object.hasOwnProperty.call(m, "needKLFieldsFlag"))
                    w.uint32(56).int64(m.needKLFieldsFlag);
                if (m.nextReqKey != null && Object.hasOwnProperty.call(m, "nextReqKey"))
                    w.uint32(66).bytes(m.nextReqKey);
                if (m.extendedTime != null && Object.hasOwnProperty.call(m, "extendedTime"))
                    w.uint32(72).bool(m.extendedTime);
                if (m.session != null && Object.hasOwnProperty.call(m, "session"))
                    w.uint32(80).int32(m.session);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKL.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.rehabType = r.int32();
                            break;
                        }
                    case 2: {
                            m.klType = r.int32();
                            break;
                        }
                    case 3: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.beginTime = r.string();
                            break;
                        }
                    case 5: {
                            m.endTime = r.string();
                            break;
                        }
                    case 6: {
                            m.maxAckKLNum = r.int32();
                            break;
                        }
                    case 7: {
                            m.needKLFieldsFlag = r.int64();
                            break;
                        }
                    case 8: {
                            m.nextReqKey = r.bytes();
                            break;
                        }
                    case 9: {
                            m.extendedTime = r.bool();
                            break;
                        }
                    case 10: {
                            m.session = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_RequestHistoryKL.S2C = (function() {
    
            function S2C(p) {
                this.klList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.klList = $util.emptyArray;
            S2C.prototype.nextReqKey = $util.newBuffer([]);
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.klList != null && m.klList.length) {
                    for (var i = 0; i < m.klList.length; ++i)
                        $root.Qot_Common.KLine.encode(m.klList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.nextReqKey != null && Object.hasOwnProperty.call(m, "nextReqKey"))
                    w.uint32(26).bytes(m.nextReqKey);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(34).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKL.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.klList && m.klList.length))
                                m.klList = [];
                            m.klList.push($root.Qot_Common.KLine.decode(r, r.uint32()));
                            break;
                        }
                    case 3: {
                            m.nextReqKey = r.bytes();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_RequestHistoryKL.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_RequestHistoryKL.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKL.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_RequestHistoryKL.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_RequestHistoryKL.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_RequestHistoryKL.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKL.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_RequestHistoryKL.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_RequestHistoryKL;
    })();
    
    $root.Qot_RequestHistoryKLQuota = (function() {
    
        var Qot_RequestHistoryKLQuota = {};
    
        Qot_RequestHistoryKLQuota.DetailItem = (function() {
    
            function DetailItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            DetailItem.prototype.security = null;
            DetailItem.prototype.name = "";
            DetailItem.prototype.requestTime = "";
            DetailItem.prototype.requestTimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            DetailItem.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.requestTime != null && Object.hasOwnProperty.call(m, "requestTime"))
                    w.uint32(18).string(m.requestTime);
                if (m.requestTimeStamp != null && Object.hasOwnProperty.call(m, "requestTimeStamp"))
                    w.uint32(24).int64(m.requestTimeStamp);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(34).string(m.name);
                return w;
            };
    
            DetailItem.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKLQuota.DetailItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            m.requestTime = r.string();
                            break;
                        }
                    case 3: {
                            m.requestTimeStamp = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return DetailItem;
        })();
    
        Qot_RequestHistoryKLQuota.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.bGetDetail = false;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.bGetDetail != null && Object.hasOwnProperty.call(m, "bGetDetail"))
                    w.uint32(16).bool(m.bGetDetail);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKLQuota.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 2: {
                            m.bGetDetail = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_RequestHistoryKLQuota.S2C = (function() {
    
            function S2C(p) {
                this.detailList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.usedQuota = 0;
            S2C.prototype.remainQuota = 0;
            S2C.prototype.detailList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.usedQuota != null && Object.hasOwnProperty.call(m, "usedQuota"))
                    w.uint32(8).int32(m.usedQuota);
                if (m.remainQuota != null && Object.hasOwnProperty.call(m, "remainQuota"))
                    w.uint32(16).int32(m.remainQuota);
                if (m.detailList != null && m.detailList.length) {
                    for (var i = 0; i < m.detailList.length; ++i)
                        $root.Qot_RequestHistoryKLQuota.DetailItem.encode(m.detailList[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKLQuota.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.usedQuota = r.int32();
                            break;
                        }
                    case 2: {
                            m.remainQuota = r.int32();
                            break;
                        }
                    case 3: {
                            if (!(m.detailList && m.detailList.length))
                                m.detailList = [];
                            m.detailList.push($root.Qot_RequestHistoryKLQuota.DetailItem.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_RequestHistoryKLQuota.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_RequestHistoryKLQuota.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKLQuota.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_RequestHistoryKLQuota.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_RequestHistoryKLQuota.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_RequestHistoryKLQuota.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestHistoryKLQuota.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_RequestHistoryKLQuota.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_RequestHistoryKLQuota;
    })();
    
    $root.Qot_RequestRehab = (function() {
    
        var Qot_RequestRehab = {};
    
        Qot_RequestRehab.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestRehab.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_RequestRehab.S2C = (function() {
    
            function S2C(p) {
                this.rehabList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.rehabList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.rehabList != null && m.rehabList.length) {
                    for (var i = 0; i < m.rehabList.length; ++i)
                        $root.Qot_Common.Rehab.encode(m.rehabList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestRehab.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.rehabList && m.rehabList.length))
                                m.rehabList = [];
                            m.rehabList.push($root.Qot_Common.Rehab.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_RequestRehab.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_RequestRehab.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestRehab.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_RequestRehab.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_RequestRehab.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_RequestRehab.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestRehab.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_RequestRehab.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_RequestRehab;
    })();
    
    $root.Qot_RequestTradeDate = (function() {
    
        var Qot_RequestTradeDate = {};
    
        Qot_RequestTradeDate.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.market = 0;
            C2S.prototype.beginTime = "";
            C2S.prototype.endTime = "";
            C2S.prototype.security = null;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(8).int32(m.market);
                if (m.beginTime != null && Object.hasOwnProperty.call(m, "beginTime"))
                    w.uint32(18).string(m.beginTime);
                if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                    w.uint32(26).string(m.endTime);
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestTradeDate.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.market = r.int32();
                            break;
                        }
                    case 2: {
                            m.beginTime = r.string();
                            break;
                        }
                    case 3: {
                            m.endTime = r.string();
                            break;
                        }
                    case 4: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_RequestTradeDate.TradeDate = (function() {
    
            function TradeDate(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            TradeDate.prototype.time = "";
            TradeDate.prototype.timestamp = 0;
            TradeDate.prototype.tradeDateType = 0;
    
            TradeDate.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.time != null && Object.hasOwnProperty.call(m, "time"))
                    w.uint32(10).string(m.time);
                if (m.timestamp != null && Object.hasOwnProperty.call(m, "timestamp"))
                    w.uint32(17).double(m.timestamp);
                if (m.tradeDateType != null && Object.hasOwnProperty.call(m, "tradeDateType"))
                    w.uint32(24).int32(m.tradeDateType);
                return w;
            };
    
            TradeDate.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestTradeDate.TradeDate();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.time = r.string();
                            break;
                        }
                    case 2: {
                            m.timestamp = r.double();
                            break;
                        }
                    case 3: {
                            m.tradeDateType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return TradeDate;
        })();
    
        Qot_RequestTradeDate.S2C = (function() {
    
            function S2C(p) {
                this.tradeDateList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.tradeDateList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.tradeDateList != null && m.tradeDateList.length) {
                    for (var i = 0; i < m.tradeDateList.length; ++i)
                        $root.Qot_RequestTradeDate.TradeDate.encode(m.tradeDateList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestTradeDate.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.tradeDateList && m.tradeDateList.length))
                                m.tradeDateList = [];
                            m.tradeDateList.push($root.Qot_RequestTradeDate.TradeDate.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_RequestTradeDate.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_RequestTradeDate.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestTradeDate.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_RequestTradeDate.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_RequestTradeDate.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_RequestTradeDate.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_RequestTradeDate.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_RequestTradeDate.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_RequestTradeDate;
    })();
    
    $root.Qot_SetPriceReminder = (function() {
    
        var Qot_SetPriceReminder = {};
    
        Qot_SetPriceReminder.SetPriceReminderOp = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SetPriceReminderOp_Unknown"] = 0;
            values[valuesById[1] = "SetPriceReminderOp_Add"] = 1;
            values[valuesById[2] = "SetPriceReminderOp_Del"] = 2;
            values[valuesById[3] = "SetPriceReminderOp_Enable"] = 3;
            values[valuesById[4] = "SetPriceReminderOp_Disable"] = 4;
            values[valuesById[5] = "SetPriceReminderOp_Modify"] = 5;
            values[valuesById[6] = "SetPriceReminderOp_DelAll"] = 6;
            return values;
        })();
    
        Qot_SetPriceReminder.C2S = (function() {
    
            function C2S(p) {
                this.reminderSessionList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.security = null;
            C2S.prototype.op = 0;
            C2S.prototype.key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            C2S.prototype.type = 0;
            C2S.prototype.freq = 0;
            C2S.prototype.value = 0;
            C2S.prototype.note = "";
            C2S.prototype.reminderSessionList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.op != null && Object.hasOwnProperty.call(m, "op"))
                    w.uint32(16).int32(m.op);
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(24).int64(m.key);
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(32).int32(m.type);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(41).double(m.value);
                if (m.note != null && Object.hasOwnProperty.call(m, "note"))
                    w.uint32(50).string(m.note);
                if (m.freq != null && Object.hasOwnProperty.call(m, "freq"))
                    w.uint32(56).int32(m.freq);
                if (m.reminderSessionList != null && m.reminderSessionList.length) {
                    w.uint32(66).fork();
                    for (var i = 0; i < m.reminderSessionList.length; ++i)
                        w.int32(m.reminderSessionList[i]);
                    w.ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_SetPriceReminder.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.op = r.int32();
                            break;
                        }
                    case 3: {
                            m.key = r.int64();
                            break;
                        }
                    case 4: {
                            m.type = r.int32();
                            break;
                        }
                    case 7: {
                            m.freq = r.int32();
                            break;
                        }
                    case 5: {
                            m.value = r.double();
                            break;
                        }
                    case 6: {
                            m.note = r.string();
                            break;
                        }
                    case 8: {
                            if (!(m.reminderSessionList && m.reminderSessionList.length))
                                m.reminderSessionList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.reminderSessionList.push(r.int32());
                            } else
                                m.reminderSessionList.push(r.int32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_SetPriceReminder.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(8).int64(m.key);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_SetPriceReminder.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.key = r.int64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_SetPriceReminder.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_SetPriceReminder.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_SetPriceReminder.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_SetPriceReminder.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_SetPriceReminder.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_SetPriceReminder.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_SetPriceReminder.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_SetPriceReminder.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_SetPriceReminder;
    })();
    
    $root.Qot_StockFilter = (function() {
    
        var Qot_StockFilter = {};
    
        Qot_StockFilter.StockField = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "StockField_Unknown"] = 0;
            values[valuesById[1] = "StockField_StockCode"] = 1;
            values[valuesById[2] = "StockField_StockName"] = 2;
            values[valuesById[3] = "StockField_CurPrice"] = 3;
            values[valuesById[4] = "StockField_CurPriceToHighest52WeeksRatio"] = 4;
            values[valuesById[5] = "StockField_CurPriceToLowest52WeeksRatio"] = 5;
            values[valuesById[6] = "StockField_HighPriceToHighest52WeeksRatio"] = 6;
            values[valuesById[7] = "StockField_LowPriceToLowest52WeeksRatio"] = 7;
            values[valuesById[8] = "StockField_VolumeRatio"] = 8;
            values[valuesById[9] = "StockField_BidAskRatio"] = 9;
            values[valuesById[10] = "StockField_LotPrice"] = 10;
            values[valuesById[11] = "StockField_MarketVal"] = 11;
            values[valuesById[12] = "StockField_PeAnnual"] = 12;
            values[valuesById[13] = "StockField_PeTTM"] = 13;
            values[valuesById[14] = "StockField_PbRate"] = 14;
            values[valuesById[15] = "StockField_ChangeRate5min"] = 15;
            values[valuesById[16] = "StockField_ChangeRateBeginYear"] = 16;
            values[valuesById[17] = "StockField_PSTTM"] = 17;
            values[valuesById[18] = "StockField_PCFTTM"] = 18;
            values[valuesById[19] = "StockField_TotalShare"] = 19;
            values[valuesById[20] = "StockField_FloatShare"] = 20;
            values[valuesById[21] = "StockField_FloatMarketVal"] = 21;
            return values;
        })();
    
        Qot_StockFilter.AccumulateField = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AccumulateField_Unknown"] = 0;
            values[valuesById[1] = "AccumulateField_ChangeRate"] = 1;
            values[valuesById[2] = "AccumulateField_Amplitude"] = 2;
            values[valuesById[3] = "AccumulateField_Volume"] = 3;
            values[valuesById[4] = "AccumulateField_Turnover"] = 4;
            values[valuesById[5] = "AccumulateField_TurnoverRate"] = 5;
            return values;
        })();
    
        Qot_StockFilter.FinancialField = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FinancialField_Unknown"] = 0;
            values[valuesById[1] = "FinancialField_NetProfit"] = 1;
            values[valuesById[2] = "FinancialField_NetProfitGrowth"] = 2;
            values[valuesById[3] = "FinancialField_SumOfBusiness"] = 3;
            values[valuesById[4] = "FinancialField_SumOfBusinessGrowth"] = 4;
            values[valuesById[5] = "FinancialField_NetProfitRate"] = 5;
            values[valuesById[6] = "FinancialField_GrossProfitRate"] = 6;
            values[valuesById[7] = "FinancialField_DebtAssetsRate"] = 7;
            values[valuesById[8] = "FinancialField_ReturnOnEquityRate"] = 8;
            values[valuesById[9] = "FinancialField_ROIC"] = 9;
            values[valuesById[10] = "FinancialField_ROATTM"] = 10;
            values[valuesById[11] = "FinancialField_EBITTTM"] = 11;
            values[valuesById[12] = "FinancialField_EBITDA"] = 12;
            values[valuesById[13] = "FinancialField_OperatingMarginTTM"] = 13;
            values[valuesById[14] = "FinancialField_EBITMargin"] = 14;
            values[valuesById[15] = "FinancialField_EBITDAMargin"] = 15;
            values[valuesById[16] = "FinancialField_FinancialCostRate"] = 16;
            values[valuesById[17] = "FinancialField_OperatingProfitTTM"] = 17;
            values[valuesById[18] = "FinancialField_ShareholderNetProfitTTM"] = 18;
            values[valuesById[19] = "FinancialField_NetProfitCashCoverTTM"] = 19;
            values[valuesById[20] = "FinancialField_CurrentRatio"] = 20;
            values[valuesById[21] = "FinancialField_QuickRatio"] = 21;
            values[valuesById[22] = "FinancialField_CurrentAssetRatio"] = 22;
            values[valuesById[23] = "FinancialField_CurrentDebtRatio"] = 23;
            values[valuesById[24] = "FinancialField_EquityMultiplier"] = 24;
            values[valuesById[25] = "FinancialField_PropertyRatio"] = 25;
            values[valuesById[26] = "FinancialField_CashAndCashEquivalents"] = 26;
            values[valuesById[27] = "FinancialField_TotalAssetTurnover"] = 27;
            values[valuesById[28] = "FinancialField_FixedAssetTurnover"] = 28;
            values[valuesById[29] = "FinancialField_InventoryTurnover"] = 29;
            values[valuesById[30] = "FinancialField_OperatingCashFlowTTM"] = 30;
            values[valuesById[31] = "FinancialField_AccountsReceivable"] = 31;
            values[valuesById[32] = "FinancialField_EBITGrowthRate"] = 32;
            values[valuesById[33] = "FinancialField_OperatingProfitGrowthRate"] = 33;
            values[valuesById[34] = "FinancialField_TotalAssetsGrowthRate"] = 34;
            values[valuesById[35] = "FinancialField_ProfitToShareholdersGrowthRate"] = 35;
            values[valuesById[36] = "FinancialField_ProfitBeforeTaxGrowthRate"] = 36;
            values[valuesById[37] = "FinancialField_EPSGrowthRate"] = 37;
            values[valuesById[38] = "FinancialField_ROEGrowthRate"] = 38;
            values[valuesById[39] = "FinancialField_ROICGrowthRate"] = 39;
            values[valuesById[40] = "FinancialField_NOCFGrowthRate"] = 40;
            values[valuesById[41] = "FinancialField_NOCFPerShareGrowthRate"] = 41;
            values[valuesById[42] = "FinancialField_OperatingRevenueCashCover"] = 42;
            values[valuesById[43] = "FinancialField_OperatingProfitToTotalProfit"] = 43;
            values[valuesById[44] = "FinancialField_BasicEPS"] = 44;
            values[valuesById[45] = "FinancialField_DilutedEPS"] = 45;
            values[valuesById[46] = "FinancialField_NOCFPerShare"] = 46;
            return values;
        })();
    
        Qot_StockFilter.CustomIndicatorField = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CustomIndicatorField_Unknown"] = 0;
            values[valuesById[1] = "CustomIndicatorField_Price"] = 1;
            values[valuesById[2] = "CustomIndicatorField_MA5"] = 2;
            values[valuesById[3] = "CustomIndicatorField_MA10"] = 3;
            values[valuesById[4] = "CustomIndicatorField_MA20"] = 4;
            values[valuesById[5] = "CustomIndicatorField_MA30"] = 5;
            values[valuesById[6] = "CustomIndicatorField_MA60"] = 6;
            values[valuesById[7] = "CustomIndicatorField_MA120"] = 7;
            values[valuesById[8] = "CustomIndicatorField_MA250"] = 8;
            values[valuesById[9] = "CustomIndicatorField_RSI"] = 9;
            values[valuesById[10] = "CustomIndicatorField_EMA5"] = 10;
            values[valuesById[11] = "CustomIndicatorField_EMA10"] = 11;
            values[valuesById[12] = "CustomIndicatorField_EMA20"] = 12;
            values[valuesById[13] = "CustomIndicatorField_EMA30"] = 13;
            values[valuesById[14] = "CustomIndicatorField_EMA60"] = 14;
            values[valuesById[15] = "CustomIndicatorField_EMA120"] = 15;
            values[valuesById[16] = "CustomIndicatorField_EMA250"] = 16;
            values[valuesById[17] = "CustomIndicatorField_Value"] = 17;
            values[valuesById[30] = "CustomIndicatorField_MA"] = 30;
            values[valuesById[40] = "CustomIndicatorField_EMA"] = 40;
            values[valuesById[50] = "CustomIndicatorField_KDJ_K"] = 50;
            values[valuesById[51] = "CustomIndicatorField_KDJ_D"] = 51;
            values[valuesById[52] = "CustomIndicatorField_KDJ_J"] = 52;
            values[valuesById[60] = "CustomIndicatorField_MACD_DIFF"] = 60;
            values[valuesById[61] = "CustomIndicatorField_MACD_DEA"] = 61;
            values[valuesById[62] = "CustomIndicatorField_MACD"] = 62;
            values[valuesById[70] = "CustomIndicatorField_BOLL_UPPER"] = 70;
            values[valuesById[71] = "CustomIndicatorField_BOLL_MIDDLER"] = 71;
            values[valuesById[72] = "CustomIndicatorField_BOLL_LOWER"] = 72;
            return values;
        })();
    
        Qot_StockFilter.PatternField = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PatternField_Unknown"] = 0;
            values[valuesById[1] = "PatternField_MAAlignmentLong"] = 1;
            values[valuesById[2] = "PatternField_MAAlignmentShort"] = 2;
            values[valuesById[3] = "PatternField_EMAAlignmentLong"] = 3;
            values[valuesById[4] = "PatternField_EMAAlignmentShort"] = 4;
            values[valuesById[5] = "PatternField_RSIGoldCrossLow"] = 5;
            values[valuesById[6] = "PatternField_RSIDeathCrossHigh"] = 6;
            values[valuesById[7] = "PatternField_RSITopDivergence"] = 7;
            values[valuesById[8] = "PatternField_RSIBottomDivergence"] = 8;
            values[valuesById[9] = "PatternField_KDJGoldCrossLow"] = 9;
            values[valuesById[10] = "PatternField_KDJDeathCrossHigh"] = 10;
            values[valuesById[11] = "PatternField_KDJTopDivergence"] = 11;
            values[valuesById[12] = "PatternField_KDJBottomDivergence"] = 12;
            values[valuesById[13] = "PatternField_MACDGoldCrossLow"] = 13;
            values[valuesById[14] = "PatternField_MACDDeathCrossHigh"] = 14;
            values[valuesById[15] = "PatternField_MACDTopDivergence"] = 15;
            values[valuesById[16] = "PatternField_MACDBottomDivergence"] = 16;
            values[valuesById[17] = "PatternField_BOLLBreakUpper"] = 17;
            values[valuesById[18] = "PatternField_BOLLLower"] = 18;
            values[valuesById[19] = "PatternField_BOLLCrossMiddleUp"] = 19;
            values[valuesById[20] = "PatternField_BOLLCrossMiddleDown"] = 20;
            return values;
        })();
    
        Qot_StockFilter.FinancialQuarter = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FinancialQuarter_Unknown"] = 0;
            values[valuesById[1] = "FinancialQuarter_Annual"] = 1;
            values[valuesById[2] = "FinancialQuarter_FirstQuarter"] = 2;
            values[valuesById[3] = "FinancialQuarter_Interim"] = 3;
            values[valuesById[4] = "FinancialQuarter_ThirdQuarter"] = 4;
            values[valuesById[5] = "FinancialQuarter_MostRecentQuarter"] = 5;
            return values;
        })();
    
        Qot_StockFilter.RelativePosition = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RelativePosition_Unknown"] = 0;
            values[valuesById[1] = "RelativePosition_More"] = 1;
            values[valuesById[2] = "RelativePosition_Less"] = 2;
            values[valuesById[3] = "RelativePosition_CrossUp"] = 3;
            values[valuesById[4] = "RelativePosition_CrossDown"] = 4;
            return values;
        })();
    
        Qot_StockFilter.SortDir = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SortDir_No"] = 0;
            values[valuesById[1] = "SortDir_Ascend"] = 1;
            values[valuesById[2] = "SortDir_Descend"] = 2;
            return values;
        })();
    
        Qot_StockFilter.BaseFilter = (function() {
    
            function BaseFilter(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            BaseFilter.prototype.fieldName = 0;
            BaseFilter.prototype.filterMin = 0;
            BaseFilter.prototype.filterMax = 0;
            BaseFilter.prototype.isNoFilter = false;
            BaseFilter.prototype.sortDir = 0;
    
            BaseFilter.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.filterMin != null && Object.hasOwnProperty.call(m, "filterMin"))
                    w.uint32(17).double(m.filterMin);
                if (m.filterMax != null && Object.hasOwnProperty.call(m, "filterMax"))
                    w.uint32(25).double(m.filterMax);
                if (m.isNoFilter != null && Object.hasOwnProperty.call(m, "isNoFilter"))
                    w.uint32(32).bool(m.isNoFilter);
                if (m.sortDir != null && Object.hasOwnProperty.call(m, "sortDir"))
                    w.uint32(40).int32(m.sortDir);
                return w;
            };
    
            BaseFilter.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.BaseFilter();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.filterMin = r.double();
                            break;
                        }
                    case 3: {
                            m.filterMax = r.double();
                            break;
                        }
                    case 4: {
                            m.isNoFilter = r.bool();
                            break;
                        }
                    case 5: {
                            m.sortDir = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return BaseFilter;
        })();
    
        Qot_StockFilter.AccumulateFilter = (function() {
    
            function AccumulateFilter(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            AccumulateFilter.prototype.fieldName = 0;
            AccumulateFilter.prototype.filterMin = 0;
            AccumulateFilter.prototype.filterMax = 0;
            AccumulateFilter.prototype.isNoFilter = false;
            AccumulateFilter.prototype.sortDir = 0;
            AccumulateFilter.prototype.days = 0;
    
            AccumulateFilter.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.filterMin != null && Object.hasOwnProperty.call(m, "filterMin"))
                    w.uint32(17).double(m.filterMin);
                if (m.filterMax != null && Object.hasOwnProperty.call(m, "filterMax"))
                    w.uint32(25).double(m.filterMax);
                if (m.isNoFilter != null && Object.hasOwnProperty.call(m, "isNoFilter"))
                    w.uint32(32).bool(m.isNoFilter);
                if (m.sortDir != null && Object.hasOwnProperty.call(m, "sortDir"))
                    w.uint32(40).int32(m.sortDir);
                if (m.days != null && Object.hasOwnProperty.call(m, "days"))
                    w.uint32(48).int32(m.days);
                return w;
            };
    
            AccumulateFilter.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.AccumulateFilter();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.filterMin = r.double();
                            break;
                        }
                    case 3: {
                            m.filterMax = r.double();
                            break;
                        }
                    case 4: {
                            m.isNoFilter = r.bool();
                            break;
                        }
                    case 5: {
                            m.sortDir = r.int32();
                            break;
                        }
                    case 6: {
                            m.days = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return AccumulateFilter;
        })();
    
        Qot_StockFilter.FinancialFilter = (function() {
    
            function FinancialFilter(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            FinancialFilter.prototype.fieldName = 0;
            FinancialFilter.prototype.filterMin = 0;
            FinancialFilter.prototype.filterMax = 0;
            FinancialFilter.prototype.isNoFilter = false;
            FinancialFilter.prototype.sortDir = 0;
            FinancialFilter.prototype.quarter = 0;
    
            FinancialFilter.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.filterMin != null && Object.hasOwnProperty.call(m, "filterMin"))
                    w.uint32(17).double(m.filterMin);
                if (m.filterMax != null && Object.hasOwnProperty.call(m, "filterMax"))
                    w.uint32(25).double(m.filterMax);
                if (m.isNoFilter != null && Object.hasOwnProperty.call(m, "isNoFilter"))
                    w.uint32(32).bool(m.isNoFilter);
                if (m.sortDir != null && Object.hasOwnProperty.call(m, "sortDir"))
                    w.uint32(40).int32(m.sortDir);
                if (m.quarter != null && Object.hasOwnProperty.call(m, "quarter"))
                    w.uint32(48).int32(m.quarter);
                return w;
            };
    
            FinancialFilter.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.FinancialFilter();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.filterMin = r.double();
                            break;
                        }
                    case 3: {
                            m.filterMax = r.double();
                            break;
                        }
                    case 4: {
                            m.isNoFilter = r.bool();
                            break;
                        }
                    case 5: {
                            m.sortDir = r.int32();
                            break;
                        }
                    case 6: {
                            m.quarter = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return FinancialFilter;
        })();
    
        Qot_StockFilter.PatternFilter = (function() {
    
            function PatternFilter(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            PatternFilter.prototype.fieldName = 0;
            PatternFilter.prototype.klType = 0;
            PatternFilter.prototype.isNoFilter = false;
            PatternFilter.prototype.consecutivePeriod = 0;
    
            PatternFilter.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.klType != null && Object.hasOwnProperty.call(m, "klType"))
                    w.uint32(16).int32(m.klType);
                if (m.isNoFilter != null && Object.hasOwnProperty.call(m, "isNoFilter"))
                    w.uint32(24).bool(m.isNoFilter);
                if (m.consecutivePeriod != null && Object.hasOwnProperty.call(m, "consecutivePeriod"))
                    w.uint32(32).int32(m.consecutivePeriod);
                return w;
            };
    
            PatternFilter.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.PatternFilter();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.klType = r.int32();
                            break;
                        }
                    case 3: {
                            m.isNoFilter = r.bool();
                            break;
                        }
                    case 4: {
                            m.consecutivePeriod = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return PatternFilter;
        })();
    
        Qot_StockFilter.CustomIndicatorFilter = (function() {
    
            function CustomIndicatorFilter(p) {
                this.firstFieldParaList = [];
                this.secondFieldParaList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            CustomIndicatorFilter.prototype.firstFieldName = 0;
            CustomIndicatorFilter.prototype.secondFieldName = 0;
            CustomIndicatorFilter.prototype.relativePosition = 0;
            CustomIndicatorFilter.prototype.fieldValue = 0;
            CustomIndicatorFilter.prototype.klType = 0;
            CustomIndicatorFilter.prototype.isNoFilter = false;
            CustomIndicatorFilter.prototype.firstFieldParaList = $util.emptyArray;
            CustomIndicatorFilter.prototype.secondFieldParaList = $util.emptyArray;
            CustomIndicatorFilter.prototype.consecutivePeriod = 0;
    
            CustomIndicatorFilter.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.firstFieldName != null && Object.hasOwnProperty.call(m, "firstFieldName"))
                    w.uint32(8).int32(m.firstFieldName);
                if (m.secondFieldName != null && Object.hasOwnProperty.call(m, "secondFieldName"))
                    w.uint32(16).int32(m.secondFieldName);
                if (m.relativePosition != null && Object.hasOwnProperty.call(m, "relativePosition"))
                    w.uint32(24).int32(m.relativePosition);
                if (m.fieldValue != null && Object.hasOwnProperty.call(m, "fieldValue"))
                    w.uint32(33).double(m.fieldValue);
                if (m.klType != null && Object.hasOwnProperty.call(m, "klType"))
                    w.uint32(40).int32(m.klType);
                if (m.isNoFilter != null && Object.hasOwnProperty.call(m, "isNoFilter"))
                    w.uint32(48).bool(m.isNoFilter);
                if (m.firstFieldParaList != null && m.firstFieldParaList.length) {
                    w.uint32(58).fork();
                    for (var i = 0; i < m.firstFieldParaList.length; ++i)
                        w.int32(m.firstFieldParaList[i]);
                    w.ldelim();
                }
                if (m.secondFieldParaList != null && m.secondFieldParaList.length) {
                    w.uint32(66).fork();
                    for (var i = 0; i < m.secondFieldParaList.length; ++i)
                        w.int32(m.secondFieldParaList[i]);
                    w.ldelim();
                }
                if (m.consecutivePeriod != null && Object.hasOwnProperty.call(m, "consecutivePeriod"))
                    w.uint32(72).int32(m.consecutivePeriod);
                return w;
            };
    
            CustomIndicatorFilter.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.CustomIndicatorFilter();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.firstFieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.secondFieldName = r.int32();
                            break;
                        }
                    case 3: {
                            m.relativePosition = r.int32();
                            break;
                        }
                    case 4: {
                            m.fieldValue = r.double();
                            break;
                        }
                    case 5: {
                            m.klType = r.int32();
                            break;
                        }
                    case 6: {
                            m.isNoFilter = r.bool();
                            break;
                        }
                    case 7: {
                            if (!(m.firstFieldParaList && m.firstFieldParaList.length))
                                m.firstFieldParaList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.firstFieldParaList.push(r.int32());
                            } else
                                m.firstFieldParaList.push(r.int32());
                            break;
                        }
                    case 8: {
                            if (!(m.secondFieldParaList && m.secondFieldParaList.length))
                                m.secondFieldParaList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.secondFieldParaList.push(r.int32());
                            } else
                                m.secondFieldParaList.push(r.int32());
                            break;
                        }
                    case 9: {
                            m.consecutivePeriod = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return CustomIndicatorFilter;
        })();
    
        Qot_StockFilter.BaseData = (function() {
    
            function BaseData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            BaseData.prototype.fieldName = 0;
            BaseData.prototype.value = 0;
    
            BaseData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(17).double(m.value);
                return w;
            };
    
            BaseData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.BaseData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.value = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return BaseData;
        })();
    
        Qot_StockFilter.AccumulateData = (function() {
    
            function AccumulateData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            AccumulateData.prototype.fieldName = 0;
            AccumulateData.prototype.value = 0;
            AccumulateData.prototype.days = 0;
    
            AccumulateData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(17).double(m.value);
                if (m.days != null && Object.hasOwnProperty.call(m, "days"))
                    w.uint32(24).int32(m.days);
                return w;
            };
    
            AccumulateData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.AccumulateData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.value = r.double();
                            break;
                        }
                    case 3: {
                            m.days = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return AccumulateData;
        })();
    
        Qot_StockFilter.FinancialData = (function() {
    
            function FinancialData(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            FinancialData.prototype.fieldName = 0;
            FinancialData.prototype.value = 0;
            FinancialData.prototype.quarter = 0;
    
            FinancialData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(17).double(m.value);
                if (m.quarter != null && Object.hasOwnProperty.call(m, "quarter"))
                    w.uint32(24).int32(m.quarter);
                return w;
            };
    
            FinancialData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.FinancialData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.value = r.double();
                            break;
                        }
                    case 3: {
                            m.quarter = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return FinancialData;
        })();
    
        Qot_StockFilter.CustomIndicatorData = (function() {
    
            function CustomIndicatorData(p) {
                this.fieldParaList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            CustomIndicatorData.prototype.fieldName = 0;
            CustomIndicatorData.prototype.value = 0;
            CustomIndicatorData.prototype.klType = 0;
            CustomIndicatorData.prototype.fieldParaList = $util.emptyArray;
    
            CustomIndicatorData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.fieldName != null && Object.hasOwnProperty.call(m, "fieldName"))
                    w.uint32(8).int32(m.fieldName);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(17).double(m.value);
                if (m.klType != null && Object.hasOwnProperty.call(m, "klType"))
                    w.uint32(24).int32(m.klType);
                if (m.fieldParaList != null && m.fieldParaList.length) {
                    w.uint32(34).fork();
                    for (var i = 0; i < m.fieldParaList.length; ++i)
                        w.int32(m.fieldParaList[i]);
                    w.ldelim();
                }
                return w;
            };
    
            CustomIndicatorData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.CustomIndicatorData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.fieldName = r.int32();
                            break;
                        }
                    case 2: {
                            m.value = r.double();
                            break;
                        }
                    case 3: {
                            m.klType = r.int32();
                            break;
                        }
                    case 4: {
                            if (!(m.fieldParaList && m.fieldParaList.length))
                                m.fieldParaList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.fieldParaList.push(r.int32());
                            } else
                                m.fieldParaList.push(r.int32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return CustomIndicatorData;
        })();
    
        Qot_StockFilter.StockData = (function() {
    
            function StockData(p) {
                this.baseDataList = [];
                this.accumulateDataList = [];
                this.financialDataList = [];
                this.customIndicatorDataList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            StockData.prototype.security = null;
            StockData.prototype.name = "";
            StockData.prototype.baseDataList = $util.emptyArray;
            StockData.prototype.accumulateDataList = $util.emptyArray;
            StockData.prototype.financialDataList = $util.emptyArray;
            StockData.prototype.customIndicatorDataList = $util.emptyArray;
    
            StockData.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(18).string(m.name);
                if (m.baseDataList != null && m.baseDataList.length) {
                    for (var i = 0; i < m.baseDataList.length; ++i)
                        $root.Qot_StockFilter.BaseData.encode(m.baseDataList[i], w.uint32(26).fork()).ldelim();
                }
                if (m.accumulateDataList != null && m.accumulateDataList.length) {
                    for (var i = 0; i < m.accumulateDataList.length; ++i)
                        $root.Qot_StockFilter.AccumulateData.encode(m.accumulateDataList[i], w.uint32(34).fork()).ldelim();
                }
                if (m.financialDataList != null && m.financialDataList.length) {
                    for (var i = 0; i < m.financialDataList.length; ++i)
                        $root.Qot_StockFilter.FinancialData.encode(m.financialDataList[i], w.uint32(42).fork()).ldelim();
                }
                if (m.customIndicatorDataList != null && m.customIndicatorDataList.length) {
                    for (var i = 0; i < m.customIndicatorDataList.length; ++i)
                        $root.Qot_StockFilter.CustomIndicatorData.encode(m.customIndicatorDataList[i], w.uint32(50).fork()).ldelim();
                }
                return w;
            };
    
            StockData.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.StockData();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.name = r.string();
                            break;
                        }
                    case 3: {
                            if (!(m.baseDataList && m.baseDataList.length))
                                m.baseDataList = [];
                            m.baseDataList.push($root.Qot_StockFilter.BaseData.decode(r, r.uint32()));
                            break;
                        }
                    case 4: {
                            if (!(m.accumulateDataList && m.accumulateDataList.length))
                                m.accumulateDataList = [];
                            m.accumulateDataList.push($root.Qot_StockFilter.AccumulateData.decode(r, r.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(m.financialDataList && m.financialDataList.length))
                                m.financialDataList = [];
                            m.financialDataList.push($root.Qot_StockFilter.FinancialData.decode(r, r.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(m.customIndicatorDataList && m.customIndicatorDataList.length))
                                m.customIndicatorDataList = [];
                            m.customIndicatorDataList.push($root.Qot_StockFilter.CustomIndicatorData.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return StockData;
        })();
    
        Qot_StockFilter.C2S = (function() {
    
            function C2S(p) {
                this.baseFilterList = [];
                this.accumulateFilterList = [];
                this.financialFilterList = [];
                this.patternFilterList = [];
                this.customIndicatorFilterList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.begin = 0;
            C2S.prototype.num = 0;
            C2S.prototype.market = 0;
            C2S.prototype.plate = null;
            C2S.prototype.baseFilterList = $util.emptyArray;
            C2S.prototype.accumulateFilterList = $util.emptyArray;
            C2S.prototype.financialFilterList = $util.emptyArray;
            C2S.prototype.patternFilterList = $util.emptyArray;
            C2S.prototype.customIndicatorFilterList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.begin != null && Object.hasOwnProperty.call(m, "begin"))
                    w.uint32(8).int32(m.begin);
                if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                    w.uint32(16).int32(m.num);
                if (m.market != null && Object.hasOwnProperty.call(m, "market"))
                    w.uint32(24).int32(m.market);
                if (m.plate != null && Object.hasOwnProperty.call(m, "plate"))
                    $root.Qot_Common.Security.encode(m.plate, w.uint32(34).fork()).ldelim();
                if (m.baseFilterList != null && m.baseFilterList.length) {
                    for (var i = 0; i < m.baseFilterList.length; ++i)
                        $root.Qot_StockFilter.BaseFilter.encode(m.baseFilterList[i], w.uint32(42).fork()).ldelim();
                }
                if (m.accumulateFilterList != null && m.accumulateFilterList.length) {
                    for (var i = 0; i < m.accumulateFilterList.length; ++i)
                        $root.Qot_StockFilter.AccumulateFilter.encode(m.accumulateFilterList[i], w.uint32(50).fork()).ldelim();
                }
                if (m.financialFilterList != null && m.financialFilterList.length) {
                    for (var i = 0; i < m.financialFilterList.length; ++i)
                        $root.Qot_StockFilter.FinancialFilter.encode(m.financialFilterList[i], w.uint32(58).fork()).ldelim();
                }
                if (m.patternFilterList != null && m.patternFilterList.length) {
                    for (var i = 0; i < m.patternFilterList.length; ++i)
                        $root.Qot_StockFilter.PatternFilter.encode(m.patternFilterList[i], w.uint32(66).fork()).ldelim();
                }
                if (m.customIndicatorFilterList != null && m.customIndicatorFilterList.length) {
                    for (var i = 0; i < m.customIndicatorFilterList.length; ++i)
                        $root.Qot_StockFilter.CustomIndicatorFilter.encode(m.customIndicatorFilterList[i], w.uint32(74).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.begin = r.int32();
                            break;
                        }
                    case 2: {
                            m.num = r.int32();
                            break;
                        }
                    case 3: {
                            m.market = r.int32();
                            break;
                        }
                    case 4: {
                            m.plate = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 5: {
                            if (!(m.baseFilterList && m.baseFilterList.length))
                                m.baseFilterList = [];
                            m.baseFilterList.push($root.Qot_StockFilter.BaseFilter.decode(r, r.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(m.accumulateFilterList && m.accumulateFilterList.length))
                                m.accumulateFilterList = [];
                            m.accumulateFilterList.push($root.Qot_StockFilter.AccumulateFilter.decode(r, r.uint32()));
                            break;
                        }
                    case 7: {
                            if (!(m.financialFilterList && m.financialFilterList.length))
                                m.financialFilterList = [];
                            m.financialFilterList.push($root.Qot_StockFilter.FinancialFilter.decode(r, r.uint32()));
                            break;
                        }
                    case 8: {
                            if (!(m.patternFilterList && m.patternFilterList.length))
                                m.patternFilterList = [];
                            m.patternFilterList.push($root.Qot_StockFilter.PatternFilter.decode(r, r.uint32()));
                            break;
                        }
                    case 9: {
                            if (!(m.customIndicatorFilterList && m.customIndicatorFilterList.length))
                                m.customIndicatorFilterList = [];
                            m.customIndicatorFilterList.push($root.Qot_StockFilter.CustomIndicatorFilter.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_StockFilter.S2C = (function() {
    
            function S2C(p) {
                this.dataList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.lastPage = false;
            S2C.prototype.allCount = 0;
            S2C.prototype.dataList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.lastPage != null && Object.hasOwnProperty.call(m, "lastPage"))
                    w.uint32(8).bool(m.lastPage);
                if (m.allCount != null && Object.hasOwnProperty.call(m, "allCount"))
                    w.uint32(16).int32(m.allCount);
                if (m.dataList != null && m.dataList.length) {
                    for (var i = 0; i < m.dataList.length; ++i)
                        $root.Qot_StockFilter.StockData.encode(m.dataList[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.lastPage = r.bool();
                            break;
                        }
                    case 2: {
                            m.allCount = r.int32();
                            break;
                        }
                    case 3: {
                            if (!(m.dataList && m.dataList.length))
                                m.dataList = [];
                            m.dataList.push($root.Qot_StockFilter.StockData.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_StockFilter.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_StockFilter.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_StockFilter.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_StockFilter.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_StockFilter.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_StockFilter.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_StockFilter.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_StockFilter;
    })();
    
    $root.Qot_Sub = (function() {
    
        var Qot_Sub = {};
    
        Qot_Sub.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                this.subTypeList = [];
                this.regPushRehabTypeList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.securityList = $util.emptyArray;
            C2S.prototype.subTypeList = $util.emptyArray;
            C2S.prototype.isSubOrUnSub = false;
            C2S.prototype.isRegOrUnRegPush = false;
            C2S.prototype.regPushRehabTypeList = $util.emptyArray;
            C2S.prototype.isFirstPush = false;
            C2S.prototype.isUnsubAll = false;
            C2S.prototype.isSubOrderBookDetail = false;
            C2S.prototype.extendedTime = false;
            C2S.prototype.session = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(10).fork()).ldelim();
                }
                if (m.subTypeList != null && m.subTypeList.length) {
                    w.uint32(18).fork();
                    for (var i = 0; i < m.subTypeList.length; ++i)
                        w.int32(m.subTypeList[i]);
                    w.ldelim();
                }
                if (m.isSubOrUnSub != null && Object.hasOwnProperty.call(m, "isSubOrUnSub"))
                    w.uint32(24).bool(m.isSubOrUnSub);
                if (m.isRegOrUnRegPush != null && Object.hasOwnProperty.call(m, "isRegOrUnRegPush"))
                    w.uint32(32).bool(m.isRegOrUnRegPush);
                if (m.regPushRehabTypeList != null && m.regPushRehabTypeList.length) {
                    w.uint32(42).fork();
                    for (var i = 0; i < m.regPushRehabTypeList.length; ++i)
                        w.int32(m.regPushRehabTypeList[i]);
                    w.ldelim();
                }
                if (m.isFirstPush != null && Object.hasOwnProperty.call(m, "isFirstPush"))
                    w.uint32(48).bool(m.isFirstPush);
                if (m.isUnsubAll != null && Object.hasOwnProperty.call(m, "isUnsubAll"))
                    w.uint32(56).bool(m.isUnsubAll);
                if (m.isSubOrderBookDetail != null && Object.hasOwnProperty.call(m, "isSubOrderBookDetail"))
                    w.uint32(64).bool(m.isSubOrderBookDetail);
                if (m.extendedTime != null && Object.hasOwnProperty.call(m, "extendedTime"))
                    w.uint32(72).bool(m.extendedTime);
                if (m.session != null && Object.hasOwnProperty.call(m, "session"))
                    w.uint32(80).int32(m.session);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Sub.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    case 2: {
                            if (!(m.subTypeList && m.subTypeList.length))
                                m.subTypeList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.subTypeList.push(r.int32());
                            } else
                                m.subTypeList.push(r.int32());
                            break;
                        }
                    case 3: {
                            m.isSubOrUnSub = r.bool();
                            break;
                        }
                    case 4: {
                            m.isRegOrUnRegPush = r.bool();
                            break;
                        }
                    case 5: {
                            if (!(m.regPushRehabTypeList && m.regPushRehabTypeList.length))
                                m.regPushRehabTypeList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.regPushRehabTypeList.push(r.int32());
                            } else
                                m.regPushRehabTypeList.push(r.int32());
                            break;
                        }
                    case 6: {
                            m.isFirstPush = r.bool();
                            break;
                        }
                    case 7: {
                            m.isUnsubAll = r.bool();
                            break;
                        }
                    case 8: {
                            m.isSubOrderBookDetail = r.bool();
                            break;
                        }
                    case 9: {
                            m.extendedTime = r.bool();
                            break;
                        }
                    case 10: {
                            m.session = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Qot_Sub.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Sub.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_Sub.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Qot_Sub.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Sub.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Qot_Sub.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Qot_Sub.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_Sub.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_Sub.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_Sub.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_Sub;
    })();
    
    $root.Qot_UpdateBasicQot = (function() {
    
        var Qot_UpdateBasicQot = {};
    
        Qot_UpdateBasicQot.S2C = (function() {
    
            function S2C(p) {
                this.basicQotList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.basicQotList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.basicQotList != null && m.basicQotList.length) {
                    for (var i = 0; i < m.basicQotList.length; ++i)
                        $root.Qot_Common.BasicQot.encode(m.basicQotList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateBasicQot.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.basicQotList && m.basicQotList.length))
                                m.basicQotList = [];
                            m.basicQotList.push($root.Qot_Common.BasicQot.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_UpdateBasicQot.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_UpdateBasicQot.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateBasicQot.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_UpdateBasicQot.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_UpdateBasicQot;
    })();
    
    $root.Qot_UpdateBroker = (function() {
    
        var Qot_UpdateBroker = {};
    
        Qot_UpdateBroker.S2C = (function() {
    
            function S2C(p) {
                this.brokerAskList = [];
                this.brokerBidList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.brokerAskList = $util.emptyArray;
            S2C.prototype.brokerBidList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.brokerAskList != null && m.brokerAskList.length) {
                    for (var i = 0; i < m.brokerAskList.length; ++i)
                        $root.Qot_Common.Broker.encode(m.brokerAskList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.brokerBidList != null && m.brokerBidList.length) {
                    for (var i = 0; i < m.brokerBidList.length; ++i)
                        $root.Qot_Common.Broker.encode(m.brokerBidList[i], w.uint32(26).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(34).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateBroker.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 4: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.brokerAskList && m.brokerAskList.length))
                                m.brokerAskList = [];
                            m.brokerAskList.push($root.Qot_Common.Broker.decode(r, r.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(m.brokerBidList && m.brokerBidList.length))
                                m.brokerBidList = [];
                            m.brokerBidList.push($root.Qot_Common.Broker.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_UpdateBroker.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_UpdateBroker.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateBroker.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_UpdateBroker.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_UpdateBroker;
    })();
    
    $root.Qot_UpdateKL = (function() {
    
        var Qot_UpdateKL = {};
    
        Qot_UpdateKL.S2C = (function() {
    
            function S2C(p) {
                this.klList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.rehabType = 0;
            S2C.prototype.klType = 0;
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.klList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.rehabType != null && Object.hasOwnProperty.call(m, "rehabType"))
                    w.uint32(8).int32(m.rehabType);
                if (m.klType != null && Object.hasOwnProperty.call(m, "klType"))
                    w.uint32(16).int32(m.klType);
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(26).fork()).ldelim();
                if (m.klList != null && m.klList.length) {
                    for (var i = 0; i < m.klList.length; ++i)
                        $root.Qot_Common.KLine.encode(m.klList[i], w.uint32(34).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(42).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateKL.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.rehabType = r.int32();
                            break;
                        }
                    case 2: {
                            m.klType = r.int32();
                            break;
                        }
                    case 3: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 5: {
                            m.name = r.string();
                            break;
                        }
                    case 4: {
                            if (!(m.klList && m.klList.length))
                                m.klList = [];
                            m.klList.push($root.Qot_Common.KLine.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_UpdateKL.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_UpdateKL.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateKL.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_UpdateKL.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_UpdateKL;
    })();
    
    $root.Qot_UpdateOrderBook = (function() {
    
        var Qot_UpdateOrderBook = {};
    
        Qot_UpdateOrderBook.S2C = (function() {
    
            function S2C(p) {
                this.orderBookAskList = [];
                this.orderBookBidList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.orderBookAskList = $util.emptyArray;
            S2C.prototype.orderBookBidList = $util.emptyArray;
            S2C.prototype.svrRecvTimeBid = "";
            S2C.prototype.svrRecvTimeBidTimestamp = 0;
            S2C.prototype.svrRecvTimeAsk = "";
            S2C.prototype.svrRecvTimeAskTimestamp = 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.orderBookAskList != null && m.orderBookAskList.length) {
                    for (var i = 0; i < m.orderBookAskList.length; ++i)
                        $root.Qot_Common.OrderBook.encode(m.orderBookAskList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.orderBookBidList != null && m.orderBookBidList.length) {
                    for (var i = 0; i < m.orderBookBidList.length; ++i)
                        $root.Qot_Common.OrderBook.encode(m.orderBookBidList[i], w.uint32(26).fork()).ldelim();
                }
                if (m.svrRecvTimeBid != null && Object.hasOwnProperty.call(m, "svrRecvTimeBid"))
                    w.uint32(34).string(m.svrRecvTimeBid);
                if (m.svrRecvTimeBidTimestamp != null && Object.hasOwnProperty.call(m, "svrRecvTimeBidTimestamp"))
                    w.uint32(41).double(m.svrRecvTimeBidTimestamp);
                if (m.svrRecvTimeAsk != null && Object.hasOwnProperty.call(m, "svrRecvTimeAsk"))
                    w.uint32(50).string(m.svrRecvTimeAsk);
                if (m.svrRecvTimeAskTimestamp != null && Object.hasOwnProperty.call(m, "svrRecvTimeAskTimestamp"))
                    w.uint32(57).double(m.svrRecvTimeAskTimestamp);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(66).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateOrderBook.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 8: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.orderBookAskList && m.orderBookAskList.length))
                                m.orderBookAskList = [];
                            m.orderBookAskList.push($root.Qot_Common.OrderBook.decode(r, r.uint32()));
                            break;
                        }
                    case 3: {
                            if (!(m.orderBookBidList && m.orderBookBidList.length))
                                m.orderBookBidList = [];
                            m.orderBookBidList.push($root.Qot_Common.OrderBook.decode(r, r.uint32()));
                            break;
                        }
                    case 4: {
                            m.svrRecvTimeBid = r.string();
                            break;
                        }
                    case 5: {
                            m.svrRecvTimeBidTimestamp = r.double();
                            break;
                        }
                    case 6: {
                            m.svrRecvTimeAsk = r.string();
                            break;
                        }
                    case 7: {
                            m.svrRecvTimeAskTimestamp = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_UpdateOrderBook.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_UpdateOrderBook.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateOrderBook.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_UpdateOrderBook.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_UpdateOrderBook;
    })();
    
    $root.Qot_UpdatePriceReminder = (function() {
    
        var Qot_UpdatePriceReminder = {};
    
        Qot_UpdatePriceReminder.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.price = 0;
            S2C.prototype.changeRate = 0;
            S2C.prototype.marketStatus = 0;
            S2C.prototype.content = "";
            S2C.prototype.note = "";
            S2C.prototype.key = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            S2C.prototype.type = 0;
            S2C.prototype.setValue = 0;
            S2C.prototype.curValue = 0;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(17).double(m.price);
                if (m.changeRate != null && Object.hasOwnProperty.call(m, "changeRate"))
                    w.uint32(25).double(m.changeRate);
                if (m.marketStatus != null && Object.hasOwnProperty.call(m, "marketStatus"))
                    w.uint32(32).int32(m.marketStatus);
                if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                    w.uint32(42).string(m.content);
                if (m.note != null && Object.hasOwnProperty.call(m, "note"))
                    w.uint32(50).string(m.note);
                if (m.key != null && Object.hasOwnProperty.call(m, "key"))
                    w.uint32(56).int64(m.key);
                if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                    w.uint32(64).int32(m.type);
                if (m.setValue != null && Object.hasOwnProperty.call(m, "setValue"))
                    w.uint32(73).double(m.setValue);
                if (m.curValue != null && Object.hasOwnProperty.call(m, "curValue"))
                    w.uint32(81).double(m.curValue);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(90).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdatePriceReminder.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 11: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            m.price = r.double();
                            break;
                        }
                    case 3: {
                            m.changeRate = r.double();
                            break;
                        }
                    case 4: {
                            m.marketStatus = r.int32();
                            break;
                        }
                    case 5: {
                            m.content = r.string();
                            break;
                        }
                    case 6: {
                            m.note = r.string();
                            break;
                        }
                    case 7: {
                            m.key = r.int64();
                            break;
                        }
                    case 8: {
                            m.type = r.int32();
                            break;
                        }
                    case 9: {
                            m.setValue = r.double();
                            break;
                        }
                    case 10: {
                            m.curValue = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_UpdatePriceReminder.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_UpdatePriceReminder.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdatePriceReminder.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_UpdatePriceReminder.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_UpdatePriceReminder;
    })();
    
    $root.Qot_UpdateRT = (function() {
    
        var Qot_UpdateRT = {};
    
        Qot_UpdateRT.S2C = (function() {
    
            function S2C(p) {
                this.rtList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.rtList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.rtList != null && m.rtList.length) {
                    for (var i = 0; i < m.rtList.length; ++i)
                        $root.Qot_Common.TimeShare.encode(m.rtList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateRT.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.rtList && m.rtList.length))
                                m.rtList = [];
                            m.rtList.push($root.Qot_Common.TimeShare.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_UpdateRT.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_UpdateRT.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateRT.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_UpdateRT.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_UpdateRT;
    })();
    
    $root.Qot_UpdateTicker = (function() {
    
        var Qot_UpdateTicker = {};
    
        Qot_UpdateTicker.S2C = (function() {
    
            function S2C(p) {
                this.tickerList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.security = null;
            S2C.prototype.name = "";
            S2C.prototype.tickerList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.tickerList != null && m.tickerList.length) {
                    for (var i = 0; i < m.tickerList.length; ++i)
                        $root.Qot_Common.Ticker.encode(m.tickerList[i], w.uint32(18).fork()).ldelim();
                }
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(26).string(m.name);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateTicker.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.name = r.string();
                            break;
                        }
                    case 2: {
                            if (!(m.tickerList && m.tickerList.length))
                                m.tickerList = [];
                            m.tickerList.push($root.Qot_Common.Ticker.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Qot_UpdateTicker.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Qot_UpdateTicker.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Qot_UpdateTicker.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Qot_UpdateTicker.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Qot_UpdateTicker;
    })();
    
    $root.Trd_Common = (function() {
    
        var Trd_Common = {};
    
        Trd_Common.TrdEnv = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdEnv_Simulate"] = 0;
            values[valuesById[1] = "TrdEnv_Real"] = 1;
            return values;
        })();
    
        Trd_Common.TrdCategory = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdCategory_Unknown"] = 0;
            values[valuesById[1] = "TrdCategory_Security"] = 1;
            values[valuesById[2] = "TrdCategory_Future"] = 2;
            return values;
        })();
    
        Trd_Common.TrdMarket = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdMarket_Unknown"] = 0;
            values[valuesById[1] = "TrdMarket_HK"] = 1;
            values[valuesById[2] = "TrdMarket_US"] = 2;
            values[valuesById[3] = "TrdMarket_CN"] = 3;
            values[valuesById[4] = "TrdMarket_HKCC"] = 4;
            values[valuesById[5] = "TrdMarket_Futures"] = 5;
            values[valuesById[6] = "TrdMarket_SG"] = 6;
            values[valuesById[8] = "TrdMarket_AU"] = 8;
            values[valuesById[10] = "TrdMarket_Futures_Simulate_HK"] = 10;
            values[valuesById[11] = "TrdMarket_Futures_Simulate_US"] = 11;
            values[valuesById[12] = "TrdMarket_Futures_Simulate_SG"] = 12;
            values[valuesById[13] = "TrdMarket_Futures_Simulate_JP"] = 13;
            values[valuesById[15] = "TrdMarket_JP"] = 15;
            values[valuesById[111] = "TrdMarket_MY"] = 111;
            values[valuesById[112] = "TrdMarket_CA"] = 112;
            values[valuesById[113] = "TrdMarket_HK_Fund"] = 113;
            values[valuesById[123] = "TrdMarket_US_Fund"] = 123;
            values[valuesById[124] = "TrdMarket_SG_Fund"] = 124;
            values[valuesById[125] = "TrdMarket_MY_Fund"] = 125;
            values[valuesById[126] = "TrdMarket_JP_Fund"] = 126;
            return values;
        })();
    
        Trd_Common.TrdSecMarket = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdSecMarket_Unknown"] = 0;
            values[valuesById[1] = "TrdSecMarket_HK"] = 1;
            values[valuesById[2] = "TrdSecMarket_US"] = 2;
            values[valuesById[31] = "TrdSecMarket_CN_SH"] = 31;
            values[valuesById[32] = "TrdSecMarket_CN_SZ"] = 32;
            values[valuesById[41] = "TrdSecMarket_SG"] = 41;
            values[valuesById[51] = "TrdSecMarket_JP"] = 51;
            values[valuesById[61] = "TrdSecMarket_AU"] = 61;
            values[valuesById[71] = "TrdSecMarket_MY"] = 71;
            values[valuesById[81] = "TrdSecMarket_CA"] = 81;
            values[valuesById[91] = "TrdSecMarket_FX"] = 91;
            return values;
        })();
    
        Trd_Common.TrdSide = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdSide_Unknown"] = 0;
            values[valuesById[1] = "TrdSide_Buy"] = 1;
            values[valuesById[2] = "TrdSide_Sell"] = 2;
            values[valuesById[3] = "TrdSide_SellShort"] = 3;
            values[valuesById[4] = "TrdSide_BuyBack"] = 4;
            return values;
        })();
    
        Trd_Common.OrderType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OrderType_Unknown"] = 0;
            values[valuesById[1] = "OrderType_Normal"] = 1;
            values[valuesById[2] = "OrderType_Market"] = 2;
            values[valuesById[5] = "OrderType_AbsoluteLimit"] = 5;
            values[valuesById[6] = "OrderType_Auction"] = 6;
            values[valuesById[7] = "OrderType_AuctionLimit"] = 7;
            values[valuesById[8] = "OrderType_SpecialLimit"] = 8;
            values[valuesById[9] = "OrderType_SpecialLimit_All"] = 9;
            values[valuesById[10] = "OrderType_Stop"] = 10;
            values[valuesById[11] = "OrderType_StopLimit"] = 11;
            values[valuesById[12] = "OrderType_MarketifTouched"] = 12;
            values[valuesById[13] = "OrderType_LimitifTouched"] = 13;
            values[valuesById[14] = "OrderType_TrailingStop"] = 14;
            values[valuesById[15] = "OrderType_TrailingStopLimit"] = 15;
            values[valuesById[16] = "OrderType_TWAP_MARKET"] = 16;
            values[valuesById[17] = "OrderType_TWAP_LIMIT"] = 17;
            values[valuesById[18] = "OrderType_VWAP_MARKET"] = 18;
            values[valuesById[19] = "OrderType_VWAP_LIMIT"] = 19;
            return values;
        })();
    
        Trd_Common.TrailType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrailType_Unknown"] = 0;
            values[valuesById[1] = "TrailType_Ratio"] = 1;
            values[valuesById[2] = "TrailType_Amount"] = 2;
            return values;
        })();
    
        Trd_Common.OrderStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OrderStatus_Unsubmitted"] = 0;
            values[valuesById[-1] = "OrderStatus_Unknown"] = -1;
            values[valuesById[1] = "OrderStatus_WaitingSubmit"] = 1;
            values[valuesById[2] = "OrderStatus_Submitting"] = 2;
            values[valuesById[3] = "OrderStatus_SubmitFailed"] = 3;
            values[valuesById[4] = "OrderStatus_TimeOut"] = 4;
            values[valuesById[5] = "OrderStatus_Submitted"] = 5;
            values[valuesById[10] = "OrderStatus_Filled_Part"] = 10;
            values[valuesById[11] = "OrderStatus_Filled_All"] = 11;
            values[valuesById[12] = "OrderStatus_Cancelling_Part"] = 12;
            values[valuesById[13] = "OrderStatus_Cancelling_All"] = 13;
            values[valuesById[14] = "OrderStatus_Cancelled_Part"] = 14;
            values[valuesById[15] = "OrderStatus_Cancelled_All"] = 15;
            values[valuesById[21] = "OrderStatus_Failed"] = 21;
            values[valuesById[22] = "OrderStatus_Disabled"] = 22;
            values[valuesById[23] = "OrderStatus_Deleted"] = 23;
            values[valuesById[24] = "OrderStatus_FillCancelled"] = 24;
            return values;
        })();
    
        Trd_Common.OrderFillStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OrderFillStatus_OK"] = 0;
            values[valuesById[1] = "OrderFillStatus_Cancelled"] = 1;
            values[valuesById[2] = "OrderFillStatus_Changed"] = 2;
            return values;
        })();
    
        Trd_Common.PositionSide = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PositionSide_Long"] = 0;
            values[valuesById[-1] = "PositionSide_Unknown"] = -1;
            values[valuesById[1] = "PositionSide_Short"] = 1;
            return values;
        })();
    
        Trd_Common.ModifyOrderOp = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ModifyOrderOp_Unknown"] = 0;
            values[valuesById[1] = "ModifyOrderOp_Normal"] = 1;
            values[valuesById[2] = "ModifyOrderOp_Cancel"] = 2;
            values[valuesById[3] = "ModifyOrderOp_Disable"] = 3;
            values[valuesById[4] = "ModifyOrderOp_Enable"] = 4;
            values[valuesById[5] = "ModifyOrderOp_Delete"] = 5;
            return values;
        })();
    
        Trd_Common.TrdAccType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdAccType_Unknown"] = 0;
            values[valuesById[1] = "TrdAccType_Cash"] = 1;
            values[valuesById[2] = "TrdAccType_Margin"] = 2;
            values[valuesById[3] = "TrdAccType_TFSA"] = 3;
            values[valuesById[4] = "TrdAccType_RRSP"] = 4;
            values[valuesById[5] = "TrdAccType_SRRSP"] = 5;
            values[valuesById[6] = "TrdAccType_Derivatives"] = 6;
            return values;
        })();
    
        Trd_Common.TrdAccStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdAccStatus_Active"] = 0;
            values[valuesById[1] = "TrdAccStatus_Disabled"] = 1;
            return values;
        })();
    
        Trd_Common.TrdAccRole = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdAccRole_Unknown"] = 0;
            values[valuesById[1] = "TrdAccRole_Normal"] = 1;
            values[valuesById[2] = "TrdAccRole_Master"] = 2;
            values[valuesById[3] = "TrdAccRole_IPO"] = 3;
            return values;
        })();
    
        Trd_Common.Currency = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Currency_Unknown"] = 0;
            values[valuesById[1] = "Currency_HKD"] = 1;
            values[valuesById[2] = "Currency_USD"] = 2;
            values[valuesById[3] = "Currency_CNH"] = 3;
            values[valuesById[4] = "Currency_JPY"] = 4;
            values[valuesById[5] = "Currency_SGD"] = 5;
            values[valuesById[6] = "Currency_AUD"] = 6;
            values[valuesById[7] = "Currency_CAD"] = 7;
            values[valuesById[8] = "Currency_MYR"] = 8;
            return values;
        })();
    
        Trd_Common.CltRiskLevel = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CltRiskLevel_Safe"] = 0;
            values[valuesById[1] = "CltRiskLevel_Warning"] = 1;
            values[valuesById[2] = "CltRiskLevel_Danger"] = 2;
            values[valuesById[3] = "CltRiskLevel_AbsoluteSafe"] = 3;
            values[valuesById[4] = "CltRiskLevel_OptDanger"] = 4;
            return values;
        })();
    
        Trd_Common.TimeInForce = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TimeInForce_DAY"] = 0;
            values[valuesById[1] = "TimeInForce_GTC"] = 1;
            return values;
        })();
    
        Trd_Common.SecurityFirm = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SecurityFirm_Unknown"] = 0;
            values[valuesById[1] = "SecurityFirm_FutuSecurities"] = 1;
            values[valuesById[2] = "SecurityFirm_FutuInc"] = 2;
            values[valuesById[3] = "SecurityFirm_FutuSG"] = 3;
            values[valuesById[4] = "SecurityFirm_FutuAU"] = 4;
            values[valuesById[5] = "SecurityFirm_FutuCA"] = 5;
            values[valuesById[6] = "SecurityFirm_FutuMY"] = 6;
            values[valuesById[7] = "SecurityFirm_FutuJP"] = 7;
            return values;
        })();
    
        Trd_Common.SimAccType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SimAccType_Unknown"] = 0;
            values[valuesById[1] = "SimAccType_Stock"] = 1;
            values[valuesById[2] = "SimAccType_Option"] = 2;
            values[valuesById[3] = "SimAccType_Futures"] = 3;
            return values;
        })();
    
        Trd_Common.CltRiskStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CltRiskStatus_Unknown"] = 0;
            values[valuesById[1] = "CltRiskStatus_Level1"] = 1;
            values[valuesById[2] = "CltRiskStatus_Level2"] = 2;
            values[valuesById[3] = "CltRiskStatus_Level3"] = 3;
            values[valuesById[4] = "CltRiskStatus_Level4"] = 4;
            values[valuesById[5] = "CltRiskStatus_Level5"] = 5;
            values[valuesById[6] = "CltRiskStatus_Level6"] = 6;
            values[valuesById[7] = "CltRiskStatus_Level7"] = 7;
            values[valuesById[8] = "CltRiskStatus_Level8"] = 8;
            values[valuesById[9] = "CltRiskStatus_Level9"] = 9;
            return values;
        })();
    
        Trd_Common.DTStatus = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DTStatus_Unknown"] = 0;
            values[valuesById[1] = "DTStatus_Unlimited"] = 1;
            values[valuesById[2] = "DTStatus_EMCall"] = 2;
            values[valuesById[3] = "DTStatus_DTCall"] = 3;
            return values;
        })();
    
        Trd_Common.TrdSubAccType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdSubAccType_None"] = 0;
            values[valuesById[1] = "TrdSubAccType_JP_GENERAL"] = 1;
            values[valuesById[2] = "TrdSubAccType_JP_TOKUTEI"] = 2;
            values[valuesById[3] = "TrdSubAccType_JP_NISA_GENERAL"] = 3;
            values[valuesById[4] = "TrdSubAccType_JP_NISA_TSUMITATE"] = 4;
            values[valuesById[5] = "TrdSubAccType_JP_GENERAL_SHORT"] = 5;
            values[valuesById[6] = "TrdSubAccType_JP_TOKUTEI_SHORT"] = 6;
            values[valuesById[7] = "TrdSubAccType_JP_HONPO_GENERAL"] = 7;
            values[valuesById[8] = "TrdSubAccType_JP_GAIKOKU_GENERAL"] = 8;
            values[valuesById[9] = "TrdSubAccType_JP_HONPO_TOKUTEI"] = 9;
            values[valuesById[10] = "TrdSubAccType_JP_GAIKOKU_TOKUTEI"] = 10;
            values[valuesById[11] = "TrdSubAccType_JP_DERIVATIVE_LONG"] = 11;
            values[valuesById[12] = "TrdSubAccType_JP_DERIVATIVE_SHORT"] = 12;
            values[valuesById[13] = "TrdSubAccType_JP_HONPO_DERIVATIVE_GENERAL"] = 13;
            values[valuesById[14] = "TrdSubAccType_JP_GAIKOKU_DERIVATIVE_GENERAL"] = 14;
            values[valuesById[15] = "TrdSubAccType_JP_HONPO_DERIVATIVE_TOKUTEI"] = 15;
            values[valuesById[16] = "TrdSubAccType_JP_GAIKOKU_DERIVATIVE_TOKUTEI"] = 16;
            return values;
        })();
    
        Trd_Common.TrdAssetCategory = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdAssetCategory_Unknown"] = 0;
            values[valuesById[1] = "TrdAssetCategory_JP"] = 1;
            values[valuesById[2] = "TrdAssetCategory_US"] = 2;
            return values;
        })();
    
        Trd_Common.AccCashInfo = (function() {
    
            function AccCashInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            AccCashInfo.prototype.currency = 0;
            AccCashInfo.prototype.cash = 0;
            AccCashInfo.prototype.availableBalance = 0;
            AccCashInfo.prototype.netCashPower = 0;
    
            AccCashInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.currency != null && Object.hasOwnProperty.call(m, "currency"))
                    w.uint32(8).int32(m.currency);
                if (m.cash != null && Object.hasOwnProperty.call(m, "cash"))
                    w.uint32(17).double(m.cash);
                if (m.availableBalance != null && Object.hasOwnProperty.call(m, "availableBalance"))
                    w.uint32(25).double(m.availableBalance);
                if (m.netCashPower != null && Object.hasOwnProperty.call(m, "netCashPower"))
                    w.uint32(33).double(m.netCashPower);
                return w;
            };
    
            AccCashInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.AccCashInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.currency = r.int32();
                            break;
                        }
                    case 2: {
                            m.cash = r.double();
                            break;
                        }
                    case 3: {
                            m.availableBalance = r.double();
                            break;
                        }
                    case 4: {
                            m.netCashPower = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return AccCashInfo;
        })();
    
        Trd_Common.AccMarketInfo = (function() {
    
            function AccMarketInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            AccMarketInfo.prototype.trdMarket = 0;
            AccMarketInfo.prototype.assets = 0;
    
            AccMarketInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.trdMarket != null && Object.hasOwnProperty.call(m, "trdMarket"))
                    w.uint32(8).int32(m.trdMarket);
                if (m.assets != null && Object.hasOwnProperty.call(m, "assets"))
                    w.uint32(17).double(m.assets);
                return w;
            };
    
            AccMarketInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.AccMarketInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.trdMarket = r.int32();
                            break;
                        }
                    case 2: {
                            m.assets = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return AccMarketInfo;
        })();
    
        Trd_Common.TrdHeader = (function() {
    
            function TrdHeader(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            TrdHeader.prototype.trdEnv = 0;
            TrdHeader.prototype.accID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            TrdHeader.prototype.trdMarket = 0;
            TrdHeader.prototype.jpAccType = 0;
    
            TrdHeader.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.trdEnv != null && Object.hasOwnProperty.call(m, "trdEnv"))
                    w.uint32(8).int32(m.trdEnv);
                if (m.accID != null && Object.hasOwnProperty.call(m, "accID"))
                    w.uint32(16).uint64(m.accID);
                if (m.trdMarket != null && Object.hasOwnProperty.call(m, "trdMarket"))
                    w.uint32(24).int32(m.trdMarket);
                if (m.jpAccType != null && Object.hasOwnProperty.call(m, "jpAccType"))
                    w.uint32(32).int32(m.jpAccType);
                return w;
            };
    
            TrdHeader.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.TrdHeader();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.trdEnv = r.int32();
                            break;
                        }
                    case 2: {
                            m.accID = r.uint64();
                            break;
                        }
                    case 3: {
                            m.trdMarket = r.int32();
                            break;
                        }
                    case 4: {
                            m.jpAccType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return TrdHeader;
        })();
    
        Trd_Common.TrdAcc = (function() {
    
            function TrdAcc(p) {
                this.trdMarketAuthList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            TrdAcc.prototype.trdEnv = 0;
            TrdAcc.prototype.accID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            TrdAcc.prototype.trdMarketAuthList = $util.emptyArray;
            TrdAcc.prototype.accType = 0;
            TrdAcc.prototype.cardNum = "";
            TrdAcc.prototype.securityFirm = 0;
            TrdAcc.prototype.simAccType = 0;
            TrdAcc.prototype.uniCardNum = "";
            TrdAcc.prototype.accStatus = 0;
            TrdAcc.prototype.accRole = 0;
            TrdAcc.prototype.jpAccType = 0;
    
            TrdAcc.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.trdEnv != null && Object.hasOwnProperty.call(m, "trdEnv"))
                    w.uint32(8).int32(m.trdEnv);
                if (m.accID != null && Object.hasOwnProperty.call(m, "accID"))
                    w.uint32(16).uint64(m.accID);
                if (m.trdMarketAuthList != null && m.trdMarketAuthList.length) {
                    w.uint32(26).fork();
                    for (var i = 0; i < m.trdMarketAuthList.length; ++i)
                        w.int32(m.trdMarketAuthList[i]);
                    w.ldelim();
                }
                if (m.accType != null && Object.hasOwnProperty.call(m, "accType"))
                    w.uint32(32).int32(m.accType);
                if (m.cardNum != null && Object.hasOwnProperty.call(m, "cardNum"))
                    w.uint32(42).string(m.cardNum);
                if (m.securityFirm != null && Object.hasOwnProperty.call(m, "securityFirm"))
                    w.uint32(48).int32(m.securityFirm);
                if (m.simAccType != null && Object.hasOwnProperty.call(m, "simAccType"))
                    w.uint32(56).int32(m.simAccType);
                if (m.uniCardNum != null && Object.hasOwnProperty.call(m, "uniCardNum"))
                    w.uint32(66).string(m.uniCardNum);
                if (m.accStatus != null && Object.hasOwnProperty.call(m, "accStatus"))
                    w.uint32(72).int32(m.accStatus);
                if (m.accRole != null && Object.hasOwnProperty.call(m, "accRole"))
                    w.uint32(80).int32(m.accRole);
                if (m.jpAccType != null && Object.hasOwnProperty.call(m, "jpAccType"))
                    w.uint32(88).int32(m.jpAccType);
                return w;
            };
    
            TrdAcc.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.TrdAcc();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.trdEnv = r.int32();
                            break;
                        }
                    case 2: {
                            m.accID = r.uint64();
                            break;
                        }
                    case 3: {
                            if (!(m.trdMarketAuthList && m.trdMarketAuthList.length))
                                m.trdMarketAuthList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.trdMarketAuthList.push(r.int32());
                            } else
                                m.trdMarketAuthList.push(r.int32());
                            break;
                        }
                    case 4: {
                            m.accType = r.int32();
                            break;
                        }
                    case 5: {
                            m.cardNum = r.string();
                            break;
                        }
                    case 6: {
                            m.securityFirm = r.int32();
                            break;
                        }
                    case 7: {
                            m.simAccType = r.int32();
                            break;
                        }
                    case 8: {
                            m.uniCardNum = r.string();
                            break;
                        }
                    case 9: {
                            m.accStatus = r.int32();
                            break;
                        }
                    case 10: {
                            m.accRole = r.int32();
                            break;
                        }
                    case 11: {
                            m.jpAccType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return TrdAcc;
        })();
    
        Trd_Common.Funds = (function() {
    
            function Funds(p) {
                this.cashInfoList = [];
                this.marketInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Funds.prototype.power = 0;
            Funds.prototype.totalAssets = 0;
            Funds.prototype.cash = 0;
            Funds.prototype.marketVal = 0;
            Funds.prototype.frozenCash = 0;
            Funds.prototype.debtCash = 0;
            Funds.prototype.avlWithdrawalCash = 0;
            Funds.prototype.currency = 0;
            Funds.prototype.availableFunds = 0;
            Funds.prototype.unrealizedPL = 0;
            Funds.prototype.realizedPL = 0;
            Funds.prototype.riskLevel = 0;
            Funds.prototype.initialMargin = 0;
            Funds.prototype.maintenanceMargin = 0;
            Funds.prototype.cashInfoList = $util.emptyArray;
            Funds.prototype.maxPowerShort = 0;
            Funds.prototype.netCashPower = 0;
            Funds.prototype.longMv = 0;
            Funds.prototype.shortMv = 0;
            Funds.prototype.pendingAsset = 0;
            Funds.prototype.maxWithdrawal = 0;
            Funds.prototype.riskStatus = 0;
            Funds.prototype.marginCallMargin = 0;
            Funds.prototype.isPdt = false;
            Funds.prototype.pdtSeq = "";
            Funds.prototype.beginningDTBP = 0;
            Funds.prototype.remainingDTBP = 0;
            Funds.prototype.dtCallAmount = 0;
            Funds.prototype.dtStatus = 0;
            Funds.prototype.securitiesAssets = 0;
            Funds.prototype.fundAssets = 0;
            Funds.prototype.bondAssets = 0;
            Funds.prototype.marketInfoList = $util.emptyArray;
    
            Funds.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.power != null && Object.hasOwnProperty.call(m, "power"))
                    w.uint32(9).double(m.power);
                if (m.totalAssets != null && Object.hasOwnProperty.call(m, "totalAssets"))
                    w.uint32(17).double(m.totalAssets);
                if (m.cash != null && Object.hasOwnProperty.call(m, "cash"))
                    w.uint32(25).double(m.cash);
                if (m.marketVal != null && Object.hasOwnProperty.call(m, "marketVal"))
                    w.uint32(33).double(m.marketVal);
                if (m.frozenCash != null && Object.hasOwnProperty.call(m, "frozenCash"))
                    w.uint32(41).double(m.frozenCash);
                if (m.debtCash != null && Object.hasOwnProperty.call(m, "debtCash"))
                    w.uint32(49).double(m.debtCash);
                if (m.avlWithdrawalCash != null && Object.hasOwnProperty.call(m, "avlWithdrawalCash"))
                    w.uint32(57).double(m.avlWithdrawalCash);
                if (m.currency != null && Object.hasOwnProperty.call(m, "currency"))
                    w.uint32(64).int32(m.currency);
                if (m.availableFunds != null && Object.hasOwnProperty.call(m, "availableFunds"))
                    w.uint32(73).double(m.availableFunds);
                if (m.unrealizedPL != null && Object.hasOwnProperty.call(m, "unrealizedPL"))
                    w.uint32(81).double(m.unrealizedPL);
                if (m.realizedPL != null && Object.hasOwnProperty.call(m, "realizedPL"))
                    w.uint32(89).double(m.realizedPL);
                if (m.riskLevel != null && Object.hasOwnProperty.call(m, "riskLevel"))
                    w.uint32(96).int32(m.riskLevel);
                if (m.initialMargin != null && Object.hasOwnProperty.call(m, "initialMargin"))
                    w.uint32(105).double(m.initialMargin);
                if (m.maintenanceMargin != null && Object.hasOwnProperty.call(m, "maintenanceMargin"))
                    w.uint32(113).double(m.maintenanceMargin);
                if (m.cashInfoList != null && m.cashInfoList.length) {
                    for (var i = 0; i < m.cashInfoList.length; ++i)
                        $root.Trd_Common.AccCashInfo.encode(m.cashInfoList[i], w.uint32(122).fork()).ldelim();
                }
                if (m.maxPowerShort != null && Object.hasOwnProperty.call(m, "maxPowerShort"))
                    w.uint32(129).double(m.maxPowerShort);
                if (m.netCashPower != null && Object.hasOwnProperty.call(m, "netCashPower"))
                    w.uint32(137).double(m.netCashPower);
                if (m.longMv != null && Object.hasOwnProperty.call(m, "longMv"))
                    w.uint32(145).double(m.longMv);
                if (m.shortMv != null && Object.hasOwnProperty.call(m, "shortMv"))
                    w.uint32(153).double(m.shortMv);
                if (m.pendingAsset != null && Object.hasOwnProperty.call(m, "pendingAsset"))
                    w.uint32(161).double(m.pendingAsset);
                if (m.maxWithdrawal != null && Object.hasOwnProperty.call(m, "maxWithdrawal"))
                    w.uint32(169).double(m.maxWithdrawal);
                if (m.riskStatus != null && Object.hasOwnProperty.call(m, "riskStatus"))
                    w.uint32(176).int32(m.riskStatus);
                if (m.marginCallMargin != null && Object.hasOwnProperty.call(m, "marginCallMargin"))
                    w.uint32(185).double(m.marginCallMargin);
                if (m.isPdt != null && Object.hasOwnProperty.call(m, "isPdt"))
                    w.uint32(192).bool(m.isPdt);
                if (m.pdtSeq != null && Object.hasOwnProperty.call(m, "pdtSeq"))
                    w.uint32(202).string(m.pdtSeq);
                if (m.beginningDTBP != null && Object.hasOwnProperty.call(m, "beginningDTBP"))
                    w.uint32(209).double(m.beginningDTBP);
                if (m.remainingDTBP != null && Object.hasOwnProperty.call(m, "remainingDTBP"))
                    w.uint32(217).double(m.remainingDTBP);
                if (m.dtCallAmount != null && Object.hasOwnProperty.call(m, "dtCallAmount"))
                    w.uint32(225).double(m.dtCallAmount);
                if (m.dtStatus != null && Object.hasOwnProperty.call(m, "dtStatus"))
                    w.uint32(232).int32(m.dtStatus);
                if (m.securitiesAssets != null && Object.hasOwnProperty.call(m, "securitiesAssets"))
                    w.uint32(241).double(m.securitiesAssets);
                if (m.fundAssets != null && Object.hasOwnProperty.call(m, "fundAssets"))
                    w.uint32(249).double(m.fundAssets);
                if (m.bondAssets != null && Object.hasOwnProperty.call(m, "bondAssets"))
                    w.uint32(257).double(m.bondAssets);
                if (m.marketInfoList != null && m.marketInfoList.length) {
                    for (var i = 0; i < m.marketInfoList.length; ++i)
                        $root.Trd_Common.AccMarketInfo.encode(m.marketInfoList[i], w.uint32(266).fork()).ldelim();
                }
                return w;
            };
    
            Funds.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.Funds();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.power = r.double();
                            break;
                        }
                    case 2: {
                            m.totalAssets = r.double();
                            break;
                        }
                    case 3: {
                            m.cash = r.double();
                            break;
                        }
                    case 4: {
                            m.marketVal = r.double();
                            break;
                        }
                    case 5: {
                            m.frozenCash = r.double();
                            break;
                        }
                    case 6: {
                            m.debtCash = r.double();
                            break;
                        }
                    case 7: {
                            m.avlWithdrawalCash = r.double();
                            break;
                        }
                    case 8: {
                            m.currency = r.int32();
                            break;
                        }
                    case 9: {
                            m.availableFunds = r.double();
                            break;
                        }
                    case 10: {
                            m.unrealizedPL = r.double();
                            break;
                        }
                    case 11: {
                            m.realizedPL = r.double();
                            break;
                        }
                    case 12: {
                            m.riskLevel = r.int32();
                            break;
                        }
                    case 13: {
                            m.initialMargin = r.double();
                            break;
                        }
                    case 14: {
                            m.maintenanceMargin = r.double();
                            break;
                        }
                    case 15: {
                            if (!(m.cashInfoList && m.cashInfoList.length))
                                m.cashInfoList = [];
                            m.cashInfoList.push($root.Trd_Common.AccCashInfo.decode(r, r.uint32()));
                            break;
                        }
                    case 16: {
                            m.maxPowerShort = r.double();
                            break;
                        }
                    case 17: {
                            m.netCashPower = r.double();
                            break;
                        }
                    case 18: {
                            m.longMv = r.double();
                            break;
                        }
                    case 19: {
                            m.shortMv = r.double();
                            break;
                        }
                    case 20: {
                            m.pendingAsset = r.double();
                            break;
                        }
                    case 21: {
                            m.maxWithdrawal = r.double();
                            break;
                        }
                    case 22: {
                            m.riskStatus = r.int32();
                            break;
                        }
                    case 23: {
                            m.marginCallMargin = r.double();
                            break;
                        }
                    case 24: {
                            m.isPdt = r.bool();
                            break;
                        }
                    case 25: {
                            m.pdtSeq = r.string();
                            break;
                        }
                    case 26: {
                            m.beginningDTBP = r.double();
                            break;
                        }
                    case 27: {
                            m.remainingDTBP = r.double();
                            break;
                        }
                    case 28: {
                            m.dtCallAmount = r.double();
                            break;
                        }
                    case 29: {
                            m.dtStatus = r.int32();
                            break;
                        }
                    case 30: {
                            m.securitiesAssets = r.double();
                            break;
                        }
                    case 31: {
                            m.fundAssets = r.double();
                            break;
                        }
                    case 32: {
                            m.bondAssets = r.double();
                            break;
                        }
                    case 33: {
                            if (!(m.marketInfoList && m.marketInfoList.length))
                                m.marketInfoList = [];
                            m.marketInfoList.push($root.Trd_Common.AccMarketInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Funds;
        })();
    
        Trd_Common.Position = (function() {
    
            function Position(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Position.prototype.positionID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Position.prototype.positionSide = 0;
            Position.prototype.code = "";
            Position.prototype.name = "";
            Position.prototype.qty = 0;
            Position.prototype.canSellQty = 0;
            Position.prototype.price = 0;
            Position.prototype.costPrice = 0;
            Position.prototype.val = 0;
            Position.prototype.plVal = 0;
            Position.prototype.plRatio = 0;
            Position.prototype.secMarket = 0;
            Position.prototype.td_plVal = 0;
            Position.prototype.td_trdVal = 0;
            Position.prototype.td_buyVal = 0;
            Position.prototype.td_buyQty = 0;
            Position.prototype.td_sellVal = 0;
            Position.prototype.td_sellQty = 0;
            Position.prototype.unrealizedPL = 0;
            Position.prototype.realizedPL = 0;
            Position.prototype.currency = 0;
            Position.prototype.trdMarket = 0;
            Position.prototype.dilutedCostPrice = 0;
            Position.prototype.averageCostPrice = 0;
            Position.prototype.averagePlRatio = 0;
    
            Position.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.positionID != null && Object.hasOwnProperty.call(m, "positionID"))
                    w.uint32(8).uint64(m.positionID);
                if (m.positionSide != null && Object.hasOwnProperty.call(m, "positionSide"))
                    w.uint32(16).int32(m.positionSide);
                if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                    w.uint32(26).string(m.code);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(34).string(m.name);
                if (m.qty != null && Object.hasOwnProperty.call(m, "qty"))
                    w.uint32(41).double(m.qty);
                if (m.canSellQty != null && Object.hasOwnProperty.call(m, "canSellQty"))
                    w.uint32(49).double(m.canSellQty);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(57).double(m.price);
                if (m.costPrice != null && Object.hasOwnProperty.call(m, "costPrice"))
                    w.uint32(65).double(m.costPrice);
                if (m.val != null && Object.hasOwnProperty.call(m, "val"))
                    w.uint32(73).double(m.val);
                if (m.plVal != null && Object.hasOwnProperty.call(m, "plVal"))
                    w.uint32(81).double(m.plVal);
                if (m.plRatio != null && Object.hasOwnProperty.call(m, "plRatio"))
                    w.uint32(89).double(m.plRatio);
                if (m.secMarket != null && Object.hasOwnProperty.call(m, "secMarket"))
                    w.uint32(96).int32(m.secMarket);
                if (m.td_plVal != null && Object.hasOwnProperty.call(m, "td_plVal"))
                    w.uint32(169).double(m.td_plVal);
                if (m.td_trdVal != null && Object.hasOwnProperty.call(m, "td_trdVal"))
                    w.uint32(177).double(m.td_trdVal);
                if (m.td_buyVal != null && Object.hasOwnProperty.call(m, "td_buyVal"))
                    w.uint32(185).double(m.td_buyVal);
                if (m.td_buyQty != null && Object.hasOwnProperty.call(m, "td_buyQty"))
                    w.uint32(193).double(m.td_buyQty);
                if (m.td_sellVal != null && Object.hasOwnProperty.call(m, "td_sellVal"))
                    w.uint32(201).double(m.td_sellVal);
                if (m.td_sellQty != null && Object.hasOwnProperty.call(m, "td_sellQty"))
                    w.uint32(209).double(m.td_sellQty);
                if (m.unrealizedPL != null && Object.hasOwnProperty.call(m, "unrealizedPL"))
                    w.uint32(225).double(m.unrealizedPL);
                if (m.realizedPL != null && Object.hasOwnProperty.call(m, "realizedPL"))
                    w.uint32(233).double(m.realizedPL);
                if (m.currency != null && Object.hasOwnProperty.call(m, "currency"))
                    w.uint32(240).int32(m.currency);
                if (m.trdMarket != null && Object.hasOwnProperty.call(m, "trdMarket"))
                    w.uint32(248).int32(m.trdMarket);
                if (m.dilutedCostPrice != null && Object.hasOwnProperty.call(m, "dilutedCostPrice"))
                    w.uint32(257).double(m.dilutedCostPrice);
                if (m.averageCostPrice != null && Object.hasOwnProperty.call(m, "averageCostPrice"))
                    w.uint32(265).double(m.averageCostPrice);
                if (m.averagePlRatio != null && Object.hasOwnProperty.call(m, "averagePlRatio"))
                    w.uint32(273).double(m.averagePlRatio);
                return w;
            };
    
            Position.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.Position();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.positionID = r.uint64();
                            break;
                        }
                    case 2: {
                            m.positionSide = r.int32();
                            break;
                        }
                    case 3: {
                            m.code = r.string();
                            break;
                        }
                    case 4: {
                            m.name = r.string();
                            break;
                        }
                    case 5: {
                            m.qty = r.double();
                            break;
                        }
                    case 6: {
                            m.canSellQty = r.double();
                            break;
                        }
                    case 7: {
                            m.price = r.double();
                            break;
                        }
                    case 8: {
                            m.costPrice = r.double();
                            break;
                        }
                    case 9: {
                            m.val = r.double();
                            break;
                        }
                    case 10: {
                            m.plVal = r.double();
                            break;
                        }
                    case 11: {
                            m.plRatio = r.double();
                            break;
                        }
                    case 12: {
                            m.secMarket = r.int32();
                            break;
                        }
                    case 21: {
                            m.td_plVal = r.double();
                            break;
                        }
                    case 22: {
                            m.td_trdVal = r.double();
                            break;
                        }
                    case 23: {
                            m.td_buyVal = r.double();
                            break;
                        }
                    case 24: {
                            m.td_buyQty = r.double();
                            break;
                        }
                    case 25: {
                            m.td_sellVal = r.double();
                            break;
                        }
                    case 26: {
                            m.td_sellQty = r.double();
                            break;
                        }
                    case 28: {
                            m.unrealizedPL = r.double();
                            break;
                        }
                    case 29: {
                            m.realizedPL = r.double();
                            break;
                        }
                    case 30: {
                            m.currency = r.int32();
                            break;
                        }
                    case 31: {
                            m.trdMarket = r.int32();
                            break;
                        }
                    case 32: {
                            m.dilutedCostPrice = r.double();
                            break;
                        }
                    case 33: {
                            m.averageCostPrice = r.double();
                            break;
                        }
                    case 34: {
                            m.averagePlRatio = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Position;
        })();
    
        Trd_Common.Order = (function() {
    
            function Order(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Order.prototype.trdSide = 0;
            Order.prototype.orderType = 0;
            Order.prototype.orderStatus = 0;
            Order.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            Order.prototype.orderIDEx = "";
            Order.prototype.code = "";
            Order.prototype.name = "";
            Order.prototype.qty = 0;
            Order.prototype.price = 0;
            Order.prototype.createTime = "";
            Order.prototype.updateTime = "";
            Order.prototype.fillQty = 0;
            Order.prototype.fillAvgPrice = 0;
            Order.prototype.lastErrMsg = "";
            Order.prototype.secMarket = 0;
            Order.prototype.createTimestamp = 0;
            Order.prototype.updateTimestamp = 0;
            Order.prototype.remark = "";
            Order.prototype.timeInForce = 0;
            Order.prototype.fillOutsideRTH = false;
            Order.prototype.auxPrice = 0;
            Order.prototype.trailType = 0;
            Order.prototype.trailValue = 0;
            Order.prototype.trailSpread = 0;
            Order.prototype.currency = 0;
            Order.prototype.trdMarket = 0;
            Order.prototype.session = 0;
            Order.prototype.jpAccType = 0;
    
            Order.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.trdSide != null && Object.hasOwnProperty.call(m, "trdSide"))
                    w.uint32(8).int32(m.trdSide);
                if (m.orderType != null && Object.hasOwnProperty.call(m, "orderType"))
                    w.uint32(16).int32(m.orderType);
                if (m.orderStatus != null && Object.hasOwnProperty.call(m, "orderStatus"))
                    w.uint32(24).int32(m.orderStatus);
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(32).uint64(m.orderID);
                if (m.orderIDEx != null && Object.hasOwnProperty.call(m, "orderIDEx"))
                    w.uint32(42).string(m.orderIDEx);
                if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                    w.uint32(50).string(m.code);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(58).string(m.name);
                if (m.qty != null && Object.hasOwnProperty.call(m, "qty"))
                    w.uint32(65).double(m.qty);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(73).double(m.price);
                if (m.createTime != null && Object.hasOwnProperty.call(m, "createTime"))
                    w.uint32(82).string(m.createTime);
                if (m.updateTime != null && Object.hasOwnProperty.call(m, "updateTime"))
                    w.uint32(90).string(m.updateTime);
                if (m.fillQty != null && Object.hasOwnProperty.call(m, "fillQty"))
                    w.uint32(97).double(m.fillQty);
                if (m.fillAvgPrice != null && Object.hasOwnProperty.call(m, "fillAvgPrice"))
                    w.uint32(105).double(m.fillAvgPrice);
                if (m.lastErrMsg != null && Object.hasOwnProperty.call(m, "lastErrMsg"))
                    w.uint32(114).string(m.lastErrMsg);
                if (m.secMarket != null && Object.hasOwnProperty.call(m, "secMarket"))
                    w.uint32(120).int32(m.secMarket);
                if (m.createTimestamp != null && Object.hasOwnProperty.call(m, "createTimestamp"))
                    w.uint32(129).double(m.createTimestamp);
                if (m.updateTimestamp != null && Object.hasOwnProperty.call(m, "updateTimestamp"))
                    w.uint32(137).double(m.updateTimestamp);
                if (m.remark != null && Object.hasOwnProperty.call(m, "remark"))
                    w.uint32(146).string(m.remark);
                if (m.timeInForce != null && Object.hasOwnProperty.call(m, "timeInForce"))
                    w.uint32(152).int32(m.timeInForce);
                if (m.fillOutsideRTH != null && Object.hasOwnProperty.call(m, "fillOutsideRTH"))
                    w.uint32(160).bool(m.fillOutsideRTH);
                if (m.auxPrice != null && Object.hasOwnProperty.call(m, "auxPrice"))
                    w.uint32(169).double(m.auxPrice);
                if (m.trailType != null && Object.hasOwnProperty.call(m, "trailType"))
                    w.uint32(176).int32(m.trailType);
                if (m.trailValue != null && Object.hasOwnProperty.call(m, "trailValue"))
                    w.uint32(185).double(m.trailValue);
                if (m.trailSpread != null && Object.hasOwnProperty.call(m, "trailSpread"))
                    w.uint32(193).double(m.trailSpread);
                if (m.currency != null && Object.hasOwnProperty.call(m, "currency"))
                    w.uint32(200).int32(m.currency);
                if (m.trdMarket != null && Object.hasOwnProperty.call(m, "trdMarket"))
                    w.uint32(208).int32(m.trdMarket);
                if (m.session != null && Object.hasOwnProperty.call(m, "session"))
                    w.uint32(216).int32(m.session);
                if (m.jpAccType != null && Object.hasOwnProperty.call(m, "jpAccType"))
                    w.uint32(224).int32(m.jpAccType);
                return w;
            };
    
            Order.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.Order();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.trdSide = r.int32();
                            break;
                        }
                    case 2: {
                            m.orderType = r.int32();
                            break;
                        }
                    case 3: {
                            m.orderStatus = r.int32();
                            break;
                        }
                    case 4: {
                            m.orderID = r.uint64();
                            break;
                        }
                    case 5: {
                            m.orderIDEx = r.string();
                            break;
                        }
                    case 6: {
                            m.code = r.string();
                            break;
                        }
                    case 7: {
                            m.name = r.string();
                            break;
                        }
                    case 8: {
                            m.qty = r.double();
                            break;
                        }
                    case 9: {
                            m.price = r.double();
                            break;
                        }
                    case 10: {
                            m.createTime = r.string();
                            break;
                        }
                    case 11: {
                            m.updateTime = r.string();
                            break;
                        }
                    case 12: {
                            m.fillQty = r.double();
                            break;
                        }
                    case 13: {
                            m.fillAvgPrice = r.double();
                            break;
                        }
                    case 14: {
                            m.lastErrMsg = r.string();
                            break;
                        }
                    case 15: {
                            m.secMarket = r.int32();
                            break;
                        }
                    case 16: {
                            m.createTimestamp = r.double();
                            break;
                        }
                    case 17: {
                            m.updateTimestamp = r.double();
                            break;
                        }
                    case 18: {
                            m.remark = r.string();
                            break;
                        }
                    case 19: {
                            m.timeInForce = r.int32();
                            break;
                        }
                    case 20: {
                            m.fillOutsideRTH = r.bool();
                            break;
                        }
                    case 21: {
                            m.auxPrice = r.double();
                            break;
                        }
                    case 22: {
                            m.trailType = r.int32();
                            break;
                        }
                    case 23: {
                            m.trailValue = r.double();
                            break;
                        }
                    case 24: {
                            m.trailSpread = r.double();
                            break;
                        }
                    case 25: {
                            m.currency = r.int32();
                            break;
                        }
                    case 26: {
                            m.trdMarket = r.int32();
                            break;
                        }
                    case 27: {
                            m.session = r.int32();
                            break;
                        }
                    case 28: {
                            m.jpAccType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Order;
        })();
    
        Trd_Common.OrderFeeItem = (function() {
    
            function OrderFeeItem(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OrderFeeItem.prototype.title = "";
            OrderFeeItem.prototype.value = 0;
    
            OrderFeeItem.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.title != null && Object.hasOwnProperty.call(m, "title"))
                    w.uint32(10).string(m.title);
                if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                    w.uint32(17).double(m.value);
                return w;
            };
    
            OrderFeeItem.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.OrderFeeItem();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.title = r.string();
                            break;
                        }
                    case 2: {
                            m.value = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OrderFeeItem;
        })();
    
        Trd_Common.OrderFee = (function() {
    
            function OrderFee(p) {
                this.feeList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OrderFee.prototype.orderIDEx = "";
            OrderFee.prototype.feeAmount = 0;
            OrderFee.prototype.feeList = $util.emptyArray;
    
            OrderFee.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.orderIDEx != null && Object.hasOwnProperty.call(m, "orderIDEx"))
                    w.uint32(10).string(m.orderIDEx);
                if (m.feeAmount != null && Object.hasOwnProperty.call(m, "feeAmount"))
                    w.uint32(17).double(m.feeAmount);
                if (m.feeList != null && m.feeList.length) {
                    for (var i = 0; i < m.feeList.length; ++i)
                        $root.Trd_Common.OrderFeeItem.encode(m.feeList[i], w.uint32(26).fork()).ldelim();
                }
                return w;
            };
    
            OrderFee.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.OrderFee();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.orderIDEx = r.string();
                            break;
                        }
                    case 2: {
                            m.feeAmount = r.double();
                            break;
                        }
                    case 3: {
                            if (!(m.feeList && m.feeList.length))
                                m.feeList = [];
                            m.feeList.push($root.Trd_Common.OrderFeeItem.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OrderFee;
        })();
    
        Trd_Common.OrderFill = (function() {
    
            function OrderFill(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            OrderFill.prototype.trdSide = 0;
            OrderFill.prototype.fillID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            OrderFill.prototype.fillIDEx = "";
            OrderFill.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            OrderFill.prototype.orderIDEx = "";
            OrderFill.prototype.code = "";
            OrderFill.prototype.name = "";
            OrderFill.prototype.qty = 0;
            OrderFill.prototype.price = 0;
            OrderFill.prototype.createTime = "";
            OrderFill.prototype.counterBrokerID = 0;
            OrderFill.prototype.counterBrokerName = "";
            OrderFill.prototype.secMarket = 0;
            OrderFill.prototype.createTimestamp = 0;
            OrderFill.prototype.updateTimestamp = 0;
            OrderFill.prototype.status = 0;
            OrderFill.prototype.trdMarket = 0;
            OrderFill.prototype.jpAccType = 0;
    
            OrderFill.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.trdSide != null && Object.hasOwnProperty.call(m, "trdSide"))
                    w.uint32(8).int32(m.trdSide);
                if (m.fillID != null && Object.hasOwnProperty.call(m, "fillID"))
                    w.uint32(16).uint64(m.fillID);
                if (m.fillIDEx != null && Object.hasOwnProperty.call(m, "fillIDEx"))
                    w.uint32(26).string(m.fillIDEx);
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(32).uint64(m.orderID);
                if (m.orderIDEx != null && Object.hasOwnProperty.call(m, "orderIDEx"))
                    w.uint32(42).string(m.orderIDEx);
                if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                    w.uint32(50).string(m.code);
                if (m.name != null && Object.hasOwnProperty.call(m, "name"))
                    w.uint32(58).string(m.name);
                if (m.qty != null && Object.hasOwnProperty.call(m, "qty"))
                    w.uint32(65).double(m.qty);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(73).double(m.price);
                if (m.createTime != null && Object.hasOwnProperty.call(m, "createTime"))
                    w.uint32(82).string(m.createTime);
                if (m.counterBrokerID != null && Object.hasOwnProperty.call(m, "counterBrokerID"))
                    w.uint32(88).int32(m.counterBrokerID);
                if (m.counterBrokerName != null && Object.hasOwnProperty.call(m, "counterBrokerName"))
                    w.uint32(98).string(m.counterBrokerName);
                if (m.secMarket != null && Object.hasOwnProperty.call(m, "secMarket"))
                    w.uint32(104).int32(m.secMarket);
                if (m.createTimestamp != null && Object.hasOwnProperty.call(m, "createTimestamp"))
                    w.uint32(113).double(m.createTimestamp);
                if (m.updateTimestamp != null && Object.hasOwnProperty.call(m, "updateTimestamp"))
                    w.uint32(121).double(m.updateTimestamp);
                if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                    w.uint32(128).int32(m.status);
                if (m.trdMarket != null && Object.hasOwnProperty.call(m, "trdMarket"))
                    w.uint32(136).int32(m.trdMarket);
                if (m.jpAccType != null && Object.hasOwnProperty.call(m, "jpAccType"))
                    w.uint32(144).int32(m.jpAccType);
                return w;
            };
    
            OrderFill.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.OrderFill();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.trdSide = r.int32();
                            break;
                        }
                    case 2: {
                            m.fillID = r.uint64();
                            break;
                        }
                    case 3: {
                            m.fillIDEx = r.string();
                            break;
                        }
                    case 4: {
                            m.orderID = r.uint64();
                            break;
                        }
                    case 5: {
                            m.orderIDEx = r.string();
                            break;
                        }
                    case 6: {
                            m.code = r.string();
                            break;
                        }
                    case 7: {
                            m.name = r.string();
                            break;
                        }
                    case 8: {
                            m.qty = r.double();
                            break;
                        }
                    case 9: {
                            m.price = r.double();
                            break;
                        }
                    case 10: {
                            m.createTime = r.string();
                            break;
                        }
                    case 11: {
                            m.counterBrokerID = r.int32();
                            break;
                        }
                    case 12: {
                            m.counterBrokerName = r.string();
                            break;
                        }
                    case 13: {
                            m.secMarket = r.int32();
                            break;
                        }
                    case 14: {
                            m.createTimestamp = r.double();
                            break;
                        }
                    case 15: {
                            m.updateTimestamp = r.double();
                            break;
                        }
                    case 16: {
                            m.status = r.int32();
                            break;
                        }
                    case 17: {
                            m.trdMarket = r.int32();
                            break;
                        }
                    case 18: {
                            m.jpAccType = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return OrderFill;
        })();
    
        Trd_Common.MaxTrdQtys = (function() {
    
            function MaxTrdQtys(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            MaxTrdQtys.prototype.maxCashBuy = 0;
            MaxTrdQtys.prototype.maxCashAndMarginBuy = 0;
            MaxTrdQtys.prototype.maxPositionSell = 0;
            MaxTrdQtys.prototype.maxSellShort = 0;
            MaxTrdQtys.prototype.maxBuyBack = 0;
            MaxTrdQtys.prototype.longRequiredIM = 0;
            MaxTrdQtys.prototype.shortRequiredIM = 0;
            MaxTrdQtys.prototype.session = 0;
    
            MaxTrdQtys.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.maxCashBuy != null && Object.hasOwnProperty.call(m, "maxCashBuy"))
                    w.uint32(9).double(m.maxCashBuy);
                if (m.maxCashAndMarginBuy != null && Object.hasOwnProperty.call(m, "maxCashAndMarginBuy"))
                    w.uint32(17).double(m.maxCashAndMarginBuy);
                if (m.maxPositionSell != null && Object.hasOwnProperty.call(m, "maxPositionSell"))
                    w.uint32(25).double(m.maxPositionSell);
                if (m.maxSellShort != null && Object.hasOwnProperty.call(m, "maxSellShort"))
                    w.uint32(33).double(m.maxSellShort);
                if (m.maxBuyBack != null && Object.hasOwnProperty.call(m, "maxBuyBack"))
                    w.uint32(41).double(m.maxBuyBack);
                if (m.longRequiredIM != null && Object.hasOwnProperty.call(m, "longRequiredIM"))
                    w.uint32(49).double(m.longRequiredIM);
                if (m.shortRequiredIM != null && Object.hasOwnProperty.call(m, "shortRequiredIM"))
                    w.uint32(57).double(m.shortRequiredIM);
                if (m.session != null && Object.hasOwnProperty.call(m, "session"))
                    w.uint32(64).int32(m.session);
                return w;
            };
    
            MaxTrdQtys.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.MaxTrdQtys();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.maxCashBuy = r.double();
                            break;
                        }
                    case 2: {
                            m.maxCashAndMarginBuy = r.double();
                            break;
                        }
                    case 3: {
                            m.maxPositionSell = r.double();
                            break;
                        }
                    case 4: {
                            m.maxSellShort = r.double();
                            break;
                        }
                    case 5: {
                            m.maxBuyBack = r.double();
                            break;
                        }
                    case 6: {
                            m.longRequiredIM = r.double();
                            break;
                        }
                    case 7: {
                            m.shortRequiredIM = r.double();
                            break;
                        }
                    case 8: {
                            m.session = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return MaxTrdQtys;
        })();
    
        Trd_Common.TrdFilterConditions = (function() {
    
            function TrdFilterConditions(p) {
                this.codeList = [];
                this.idList = [];
                this.orderIDExList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            TrdFilterConditions.prototype.codeList = $util.emptyArray;
            TrdFilterConditions.prototype.idList = $util.emptyArray;
            TrdFilterConditions.prototype.beginTime = "";
            TrdFilterConditions.prototype.endTime = "";
            TrdFilterConditions.prototype.orderIDExList = $util.emptyArray;
            TrdFilterConditions.prototype.filterMarket = 0;
    
            TrdFilterConditions.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.codeList != null && m.codeList.length) {
                    for (var i = 0; i < m.codeList.length; ++i)
                        w.uint32(10).string(m.codeList[i]);
                }
                if (m.idList != null && m.idList.length) {
                    w.uint32(18).fork();
                    for (var i = 0; i < m.idList.length; ++i)
                        w.uint64(m.idList[i]);
                    w.ldelim();
                }
                if (m.beginTime != null && Object.hasOwnProperty.call(m, "beginTime"))
                    w.uint32(26).string(m.beginTime);
                if (m.endTime != null && Object.hasOwnProperty.call(m, "endTime"))
                    w.uint32(34).string(m.endTime);
                if (m.orderIDExList != null && m.orderIDExList.length) {
                    for (var i = 0; i < m.orderIDExList.length; ++i)
                        w.uint32(42).string(m.orderIDExList[i]);
                }
                if (m.filterMarket != null && Object.hasOwnProperty.call(m, "filterMarket"))
                    w.uint32(48).int32(m.filterMarket);
                return w;
            };
    
            TrdFilterConditions.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_Common.TrdFilterConditions();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.codeList && m.codeList.length))
                                m.codeList = [];
                            m.codeList.push(r.string());
                            break;
                        }
                    case 2: {
                            if (!(m.idList && m.idList.length))
                                m.idList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.idList.push(r.uint64());
                            } else
                                m.idList.push(r.uint64());
                            break;
                        }
                    case 3: {
                            m.beginTime = r.string();
                            break;
                        }
                    case 4: {
                            m.endTime = r.string();
                            break;
                        }
                    case 5: {
                            if (!(m.orderIDExList && m.orderIDExList.length))
                                m.orderIDExList = [];
                            m.orderIDExList.push(r.string());
                            break;
                        }
                    case 6: {
                            m.filterMarket = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return TrdFilterConditions;
        })();
    
        return Trd_Common;
    })();
    
    $root.Trd_FlowSummary = (function() {
    
        var Trd_FlowSummary = {};
    
        Trd_FlowSummary.TrdCashFlowDirection = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TrdCashFlowDirection_Unknown"] = 0;
            values[valuesById[1] = "TrdCashFlowDirection_In"] = 1;
            values[valuesById[2] = "TrdCashFlowDirection_Out"] = 2;
            return values;
        })();
    
        Trd_FlowSummary.FlowSummaryInfo = (function() {
    
            function FlowSummaryInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            FlowSummaryInfo.prototype.clearingDate = "";
            FlowSummaryInfo.prototype.settlementDate = "";
            FlowSummaryInfo.prototype.currency = 0;
            FlowSummaryInfo.prototype.cashFlowType = "";
            FlowSummaryInfo.prototype.cashFlowDirection = 0;
            FlowSummaryInfo.prototype.cashFlowAmount = 0;
            FlowSummaryInfo.prototype.cashFlowRemark = "";
            FlowSummaryInfo.prototype.cashFlowID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            FlowSummaryInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.clearingDate != null && Object.hasOwnProperty.call(m, "clearingDate"))
                    w.uint32(10).string(m.clearingDate);
                if (m.settlementDate != null && Object.hasOwnProperty.call(m, "settlementDate"))
                    w.uint32(18).string(m.settlementDate);
                if (m.currency != null && Object.hasOwnProperty.call(m, "currency"))
                    w.uint32(24).int32(m.currency);
                if (m.cashFlowType != null && Object.hasOwnProperty.call(m, "cashFlowType"))
                    w.uint32(34).string(m.cashFlowType);
                if (m.cashFlowDirection != null && Object.hasOwnProperty.call(m, "cashFlowDirection"))
                    w.uint32(40).int32(m.cashFlowDirection);
                if (m.cashFlowAmount != null && Object.hasOwnProperty.call(m, "cashFlowAmount"))
                    w.uint32(49).double(m.cashFlowAmount);
                if (m.cashFlowRemark != null && Object.hasOwnProperty.call(m, "cashFlowRemark"))
                    w.uint32(58).string(m.cashFlowRemark);
                if (m.cashFlowID != null && Object.hasOwnProperty.call(m, "cashFlowID"))
                    w.uint32(64).uint64(m.cashFlowID);
                return w;
            };
    
            FlowSummaryInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_FlowSummary.FlowSummaryInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.clearingDate = r.string();
                            break;
                        }
                    case 2: {
                            m.settlementDate = r.string();
                            break;
                        }
                    case 3: {
                            m.currency = r.int32();
                            break;
                        }
                    case 4: {
                            m.cashFlowType = r.string();
                            break;
                        }
                    case 5: {
                            m.cashFlowDirection = r.int32();
                            break;
                        }
                    case 6: {
                            m.cashFlowAmount = r.double();
                            break;
                        }
                    case 7: {
                            m.cashFlowRemark = r.string();
                            break;
                        }
                    case 8: {
                            m.cashFlowID = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return FlowSummaryInfo;
        })();
    
        Trd_FlowSummary.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.clearingDate = "";
            C2S.prototype.cashFlowDirection = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.clearingDate != null && Object.hasOwnProperty.call(m, "clearingDate"))
                    w.uint32(18).string(m.clearingDate);
                if (m.cashFlowDirection != null && Object.hasOwnProperty.call(m, "cashFlowDirection"))
                    w.uint32(24).int32(m.cashFlowDirection);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_FlowSummary.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.clearingDate = r.string();
                            break;
                        }
                    case 3: {
                            m.cashFlowDirection = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_FlowSummary.S2C = (function() {
    
            function S2C(p) {
                this.flowSummaryInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.flowSummaryInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.flowSummaryInfoList != null && m.flowSummaryInfoList.length) {
                    for (var i = 0; i < m.flowSummaryInfoList.length; ++i)
                        $root.Trd_FlowSummary.FlowSummaryInfo.encode(m.flowSummaryInfoList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_FlowSummary.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.flowSummaryInfoList && m.flowSummaryInfoList.length))
                                m.flowSummaryInfoList = [];
                            m.flowSummaryInfoList.push($root.Trd_FlowSummary.FlowSummaryInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_FlowSummary.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_FlowSummary.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_FlowSummary.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_FlowSummary.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_FlowSummary.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_FlowSummary.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_FlowSummary.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_FlowSummary.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_FlowSummary;
    })();
    
    $root.Trd_GetAccList = (function() {
    
        var Trd_GetAccList = {};
    
        Trd_GetAccList.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.userID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            C2S.prototype.trdCategory = 0;
            C2S.prototype.needGeneralSecAccount = false;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.userID != null && Object.hasOwnProperty.call(m, "userID"))
                    w.uint32(8).uint64(m.userID);
                if (m.trdCategory != null && Object.hasOwnProperty.call(m, "trdCategory"))
                    w.uint32(16).int32(m.trdCategory);
                if (m.needGeneralSecAccount != null && Object.hasOwnProperty.call(m, "needGeneralSecAccount"))
                    w.uint32(24).bool(m.needGeneralSecAccount);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetAccList.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.userID = r.uint64();
                            break;
                        }
                    case 2: {
                            m.trdCategory = r.int32();
                            break;
                        }
                    case 3: {
                            m.needGeneralSecAccount = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetAccList.S2C = (function() {
    
            function S2C(p) {
                this.accList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.accList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.accList != null && m.accList.length) {
                    for (var i = 0; i < m.accList.length; ++i)
                        $root.Trd_Common.TrdAcc.encode(m.accList[i], w.uint32(10).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetAccList.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.accList && m.accList.length))
                                m.accList = [];
                            m.accList.push($root.Trd_Common.TrdAcc.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetAccList.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetAccList.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetAccList.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetAccList.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetAccList.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetAccList.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetAccList.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetAccList.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetAccList;
    })();
    
    $root.Trd_GetFunds = (function() {
    
        var Trd_GetFunds = {};
    
        Trd_GetFunds.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.refreshCache = false;
            C2S.prototype.currency = 0;
            C2S.prototype.assetCategory = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.refreshCache != null && Object.hasOwnProperty.call(m, "refreshCache"))
                    w.uint32(16).bool(m.refreshCache);
                if (m.currency != null && Object.hasOwnProperty.call(m, "currency"))
                    w.uint32(24).int32(m.currency);
                if (m.assetCategory != null && Object.hasOwnProperty.call(m, "assetCategory"))
                    w.uint32(32).int32(m.assetCategory);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetFunds.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.refreshCache = r.bool();
                            break;
                        }
                    case 3: {
                            m.currency = r.int32();
                            break;
                        }
                    case 4: {
                            m.assetCategory = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetFunds.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.funds = null;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.funds != null && Object.hasOwnProperty.call(m, "funds"))
                    $root.Trd_Common.Funds.encode(m.funds, w.uint32(18).fork()).ldelim();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetFunds.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.funds = $root.Trd_Common.Funds.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetFunds.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetFunds.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetFunds.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetFunds.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetFunds.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetFunds.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetFunds.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetFunds.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetFunds;
    })();
    
    $root.Trd_GetHistoryOrderFillList = (function() {
    
        var Trd_GetHistoryOrderFillList = {};
    
        Trd_GetHistoryOrderFillList.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.filterConditions = null;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.filterConditions != null && Object.hasOwnProperty.call(m, "filterConditions"))
                    $root.Trd_Common.TrdFilterConditions.encode(m.filterConditions, w.uint32(18).fork()).ldelim();
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderFillList.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.filterConditions = $root.Trd_Common.TrdFilterConditions.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetHistoryOrderFillList.S2C = (function() {
    
            function S2C(p) {
                this.orderFillList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderFillList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderFillList != null && m.orderFillList.length) {
                    for (var i = 0; i < m.orderFillList.length; ++i)
                        $root.Trd_Common.OrderFill.encode(m.orderFillList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderFillList.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.orderFillList && m.orderFillList.length))
                                m.orderFillList = [];
                            m.orderFillList.push($root.Trd_Common.OrderFill.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetHistoryOrderFillList.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetHistoryOrderFillList.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderFillList.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetHistoryOrderFillList.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetHistoryOrderFillList.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetHistoryOrderFillList.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderFillList.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetHistoryOrderFillList.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetHistoryOrderFillList;
    })();
    
    $root.Trd_GetHistoryOrderList = (function() {
    
        var Trd_GetHistoryOrderList = {};
    
        Trd_GetHistoryOrderList.C2S = (function() {
    
            function C2S(p) {
                this.filterStatusList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.filterConditions = null;
            C2S.prototype.filterStatusList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.filterConditions != null && Object.hasOwnProperty.call(m, "filterConditions"))
                    $root.Trd_Common.TrdFilterConditions.encode(m.filterConditions, w.uint32(18).fork()).ldelim();
                if (m.filterStatusList != null && m.filterStatusList.length) {
                    w.uint32(26).fork();
                    for (var i = 0; i < m.filterStatusList.length; ++i)
                        w.int32(m.filterStatusList[i]);
                    w.ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderList.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.filterConditions = $root.Trd_Common.TrdFilterConditions.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            if (!(m.filterStatusList && m.filterStatusList.length))
                                m.filterStatusList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.filterStatusList.push(r.int32());
                            } else
                                m.filterStatusList.push(r.int32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetHistoryOrderList.S2C = (function() {
    
            function S2C(p) {
                this.orderList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderList != null && m.orderList.length) {
                    for (var i = 0; i < m.orderList.length; ++i)
                        $root.Trd_Common.Order.encode(m.orderList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderList.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.orderList && m.orderList.length))
                                m.orderList = [];
                            m.orderList.push($root.Trd_Common.Order.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetHistoryOrderList.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetHistoryOrderList.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderList.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetHistoryOrderList.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetHistoryOrderList.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetHistoryOrderList.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetHistoryOrderList.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetHistoryOrderList.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetHistoryOrderList;
    })();
    
    $root.Trd_GetMarginRatio = (function() {
    
        var Trd_GetMarginRatio = {};
    
        Trd_GetMarginRatio.MarginRatioInfo = (function() {
    
            function MarginRatioInfo(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            MarginRatioInfo.prototype.security = null;
            MarginRatioInfo.prototype.isLongPermit = false;
            MarginRatioInfo.prototype.isShortPermit = false;
            MarginRatioInfo.prototype.shortPoolRemain = 0;
            MarginRatioInfo.prototype.shortFeeRate = 0;
            MarginRatioInfo.prototype.alertLongRatio = 0;
            MarginRatioInfo.prototype.alertShortRatio = 0;
            MarginRatioInfo.prototype.imLongRatio = 0;
            MarginRatioInfo.prototype.imShortRatio = 0;
            MarginRatioInfo.prototype.mcmLongRatio = 0;
            MarginRatioInfo.prototype.mcmShortRatio = 0;
            MarginRatioInfo.prototype.mmLongRatio = 0;
            MarginRatioInfo.prototype.mmShortRatio = 0;
    
            MarginRatioInfo.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.security != null && Object.hasOwnProperty.call(m, "security"))
                    $root.Qot_Common.Security.encode(m.security, w.uint32(10).fork()).ldelim();
                if (m.isLongPermit != null && Object.hasOwnProperty.call(m, "isLongPermit"))
                    w.uint32(16).bool(m.isLongPermit);
                if (m.isShortPermit != null && Object.hasOwnProperty.call(m, "isShortPermit"))
                    w.uint32(24).bool(m.isShortPermit);
                if (m.shortPoolRemain != null && Object.hasOwnProperty.call(m, "shortPoolRemain"))
                    w.uint32(33).double(m.shortPoolRemain);
                if (m.shortFeeRate != null && Object.hasOwnProperty.call(m, "shortFeeRate"))
                    w.uint32(41).double(m.shortFeeRate);
                if (m.alertLongRatio != null && Object.hasOwnProperty.call(m, "alertLongRatio"))
                    w.uint32(49).double(m.alertLongRatio);
                if (m.alertShortRatio != null && Object.hasOwnProperty.call(m, "alertShortRatio"))
                    w.uint32(57).double(m.alertShortRatio);
                if (m.imLongRatio != null && Object.hasOwnProperty.call(m, "imLongRatio"))
                    w.uint32(65).double(m.imLongRatio);
                if (m.imShortRatio != null && Object.hasOwnProperty.call(m, "imShortRatio"))
                    w.uint32(73).double(m.imShortRatio);
                if (m.mcmLongRatio != null && Object.hasOwnProperty.call(m, "mcmLongRatio"))
                    w.uint32(81).double(m.mcmLongRatio);
                if (m.mcmShortRatio != null && Object.hasOwnProperty.call(m, "mcmShortRatio"))
                    w.uint32(89).double(m.mcmShortRatio);
                if (m.mmLongRatio != null && Object.hasOwnProperty.call(m, "mmLongRatio"))
                    w.uint32(97).double(m.mmLongRatio);
                if (m.mmShortRatio != null && Object.hasOwnProperty.call(m, "mmShortRatio"))
                    w.uint32(105).double(m.mmShortRatio);
                return w;
            };
    
            MarginRatioInfo.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMarginRatio.MarginRatioInfo();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.security = $root.Qot_Common.Security.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.isLongPermit = r.bool();
                            break;
                        }
                    case 3: {
                            m.isShortPermit = r.bool();
                            break;
                        }
                    case 4: {
                            m.shortPoolRemain = r.double();
                            break;
                        }
                    case 5: {
                            m.shortFeeRate = r.double();
                            break;
                        }
                    case 6: {
                            m.alertLongRatio = r.double();
                            break;
                        }
                    case 7: {
                            m.alertShortRatio = r.double();
                            break;
                        }
                    case 8: {
                            m.imLongRatio = r.double();
                            break;
                        }
                    case 9: {
                            m.imShortRatio = r.double();
                            break;
                        }
                    case 10: {
                            m.mcmLongRatio = r.double();
                            break;
                        }
                    case 11: {
                            m.mcmShortRatio = r.double();
                            break;
                        }
                    case 12: {
                            m.mmLongRatio = r.double();
                            break;
                        }
                    case 13: {
                            m.mmShortRatio = r.double();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return MarginRatioInfo;
        })();
    
        Trd_GetMarginRatio.C2S = (function() {
    
            function C2S(p) {
                this.securityList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.securityList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.securityList != null && m.securityList.length) {
                    for (var i = 0; i < m.securityList.length; ++i)
                        $root.Qot_Common.Security.encode(m.securityList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMarginRatio.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.securityList && m.securityList.length))
                                m.securityList = [];
                            m.securityList.push($root.Qot_Common.Security.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetMarginRatio.S2C = (function() {
    
            function S2C(p) {
                this.marginRatioInfoList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.marginRatioInfoList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.marginRatioInfoList != null && m.marginRatioInfoList.length) {
                    for (var i = 0; i < m.marginRatioInfoList.length; ++i)
                        $root.Trd_GetMarginRatio.MarginRatioInfo.encode(m.marginRatioInfoList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMarginRatio.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.marginRatioInfoList && m.marginRatioInfoList.length))
                                m.marginRatioInfoList = [];
                            m.marginRatioInfoList.push($root.Trd_GetMarginRatio.MarginRatioInfo.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetMarginRatio.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetMarginRatio.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMarginRatio.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetMarginRatio.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetMarginRatio.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetMarginRatio.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMarginRatio.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetMarginRatio.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetMarginRatio;
    })();
    
    $root.Trd_GetMaxTrdQtys = (function() {
    
        var Trd_GetMaxTrdQtys = {};
    
        Trd_GetMaxTrdQtys.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.orderType = 0;
            C2S.prototype.code = "";
            C2S.prototype.price = 0;
            C2S.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            C2S.prototype.adjustPrice = false;
            C2S.prototype.adjustSideAndLimit = 0;
            C2S.prototype.secMarket = 0;
            C2S.prototype.orderIDEx = "";
            C2S.prototype.session = 0;
            C2S.prototype.positionID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderType != null && Object.hasOwnProperty.call(m, "orderType"))
                    w.uint32(16).int32(m.orderType);
                if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                    w.uint32(26).string(m.code);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(33).double(m.price);
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(40).uint64(m.orderID);
                if (m.adjustPrice != null && Object.hasOwnProperty.call(m, "adjustPrice"))
                    w.uint32(48).bool(m.adjustPrice);
                if (m.adjustSideAndLimit != null && Object.hasOwnProperty.call(m, "adjustSideAndLimit"))
                    w.uint32(57).double(m.adjustSideAndLimit);
                if (m.secMarket != null && Object.hasOwnProperty.call(m, "secMarket"))
                    w.uint32(64).int32(m.secMarket);
                if (m.orderIDEx != null && Object.hasOwnProperty.call(m, "orderIDEx"))
                    w.uint32(74).string(m.orderIDEx);
                if (m.session != null && Object.hasOwnProperty.call(m, "session"))
                    w.uint32(80).int32(m.session);
                if (m.positionID != null && Object.hasOwnProperty.call(m, "positionID"))
                    w.uint32(88).uint64(m.positionID);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMaxTrdQtys.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.orderType = r.int32();
                            break;
                        }
                    case 3: {
                            m.code = r.string();
                            break;
                        }
                    case 4: {
                            m.price = r.double();
                            break;
                        }
                    case 5: {
                            m.orderID = r.uint64();
                            break;
                        }
                    case 6: {
                            m.adjustPrice = r.bool();
                            break;
                        }
                    case 7: {
                            m.adjustSideAndLimit = r.double();
                            break;
                        }
                    case 8: {
                            m.secMarket = r.int32();
                            break;
                        }
                    case 9: {
                            m.orderIDEx = r.string();
                            break;
                        }
                    case 10: {
                            m.session = r.int32();
                            break;
                        }
                    case 11: {
                            m.positionID = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetMaxTrdQtys.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.maxTrdQtys = null;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.maxTrdQtys != null && Object.hasOwnProperty.call(m, "maxTrdQtys"))
                    $root.Trd_Common.MaxTrdQtys.encode(m.maxTrdQtys, w.uint32(18).fork()).ldelim();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMaxTrdQtys.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.maxTrdQtys = $root.Trd_Common.MaxTrdQtys.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetMaxTrdQtys.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetMaxTrdQtys.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMaxTrdQtys.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetMaxTrdQtys.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetMaxTrdQtys.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetMaxTrdQtys.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetMaxTrdQtys.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetMaxTrdQtys.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetMaxTrdQtys;
    })();
    
    $root.Trd_GetOrderFee = (function() {
    
        var Trd_GetOrderFee = {};
    
        Trd_GetOrderFee.C2S = (function() {
    
            function C2S(p) {
                this.orderIdExList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.orderIdExList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderIdExList != null && m.orderIdExList.length) {
                    for (var i = 0; i < m.orderIdExList.length; ++i)
                        w.uint32(18).string(m.orderIdExList[i]);
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFee.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.orderIdExList && m.orderIdExList.length))
                                m.orderIdExList = [];
                            m.orderIdExList.push(r.string());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetOrderFee.S2C = (function() {
    
            function S2C(p) {
                this.orderFeeList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderFeeList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderFeeList != null && m.orderFeeList.length) {
                    for (var i = 0; i < m.orderFeeList.length; ++i)
                        $root.Trd_Common.OrderFee.encode(m.orderFeeList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFee.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.orderFeeList && m.orderFeeList.length))
                                m.orderFeeList = [];
                            m.orderFeeList.push($root.Trd_Common.OrderFee.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetOrderFee.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetOrderFee.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFee.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetOrderFee.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetOrderFee.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetOrderFee.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFee.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetOrderFee.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetOrderFee;
    })();
    
    $root.Trd_GetOrderFillList = (function() {
    
        var Trd_GetOrderFillList = {};
    
        Trd_GetOrderFillList.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.filterConditions = null;
            C2S.prototype.refreshCache = false;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.filterConditions != null && Object.hasOwnProperty.call(m, "filterConditions"))
                    $root.Trd_Common.TrdFilterConditions.encode(m.filterConditions, w.uint32(18).fork()).ldelim();
                if (m.refreshCache != null && Object.hasOwnProperty.call(m, "refreshCache"))
                    w.uint32(24).bool(m.refreshCache);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFillList.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.filterConditions = $root.Trd_Common.TrdFilterConditions.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.refreshCache = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetOrderFillList.S2C = (function() {
    
            function S2C(p) {
                this.orderFillList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderFillList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderFillList != null && m.orderFillList.length) {
                    for (var i = 0; i < m.orderFillList.length; ++i)
                        $root.Trd_Common.OrderFill.encode(m.orderFillList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFillList.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.orderFillList && m.orderFillList.length))
                                m.orderFillList = [];
                            m.orderFillList.push($root.Trd_Common.OrderFill.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetOrderFillList.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetOrderFillList.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFillList.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetOrderFillList.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetOrderFillList.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetOrderFillList.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderFillList.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetOrderFillList.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetOrderFillList;
    })();
    
    $root.Trd_GetOrderList = (function() {
    
        var Trd_GetOrderList = {};
    
        Trd_GetOrderList.C2S = (function() {
    
            function C2S(p) {
                this.filterStatusList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.filterConditions = null;
            C2S.prototype.filterStatusList = $util.emptyArray;
            C2S.prototype.refreshCache = false;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.filterConditions != null && Object.hasOwnProperty.call(m, "filterConditions"))
                    $root.Trd_Common.TrdFilterConditions.encode(m.filterConditions, w.uint32(18).fork()).ldelim();
                if (m.filterStatusList != null && m.filterStatusList.length) {
                    w.uint32(26).fork();
                    for (var i = 0; i < m.filterStatusList.length; ++i)
                        w.int32(m.filterStatusList[i]);
                    w.ldelim();
                }
                if (m.refreshCache != null && Object.hasOwnProperty.call(m, "refreshCache"))
                    w.uint32(32).bool(m.refreshCache);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderList.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.filterConditions = $root.Trd_Common.TrdFilterConditions.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            if (!(m.filterStatusList && m.filterStatusList.length))
                                m.filterStatusList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.filterStatusList.push(r.int32());
                            } else
                                m.filterStatusList.push(r.int32());
                            break;
                        }
                    case 4: {
                            m.refreshCache = r.bool();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetOrderList.S2C = (function() {
    
            function S2C(p) {
                this.orderList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderList != null && m.orderList.length) {
                    for (var i = 0; i < m.orderList.length; ++i)
                        $root.Trd_Common.Order.encode(m.orderList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderList.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.orderList && m.orderList.length))
                                m.orderList = [];
                            m.orderList.push($root.Trd_Common.Order.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetOrderList.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetOrderList.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderList.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetOrderList.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetOrderList.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetOrderList.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetOrderList.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetOrderList.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetOrderList;
    })();
    
    $root.Trd_GetPositionList = (function() {
    
        var Trd_GetPositionList = {};
    
        Trd_GetPositionList.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.header = null;
            C2S.prototype.filterConditions = null;
            C2S.prototype.filterPLRatioMin = 0;
            C2S.prototype.filterPLRatioMax = 0;
            C2S.prototype.refreshCache = false;
            C2S.prototype.assetCategory = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.filterConditions != null && Object.hasOwnProperty.call(m, "filterConditions"))
                    $root.Trd_Common.TrdFilterConditions.encode(m.filterConditions, w.uint32(18).fork()).ldelim();
                if (m.filterPLRatioMin != null && Object.hasOwnProperty.call(m, "filterPLRatioMin"))
                    w.uint32(25).double(m.filterPLRatioMin);
                if (m.filterPLRatioMax != null && Object.hasOwnProperty.call(m, "filterPLRatioMax"))
                    w.uint32(33).double(m.filterPLRatioMax);
                if (m.refreshCache != null && Object.hasOwnProperty.call(m, "refreshCache"))
                    w.uint32(40).bool(m.refreshCache);
                if (m.assetCategory != null && Object.hasOwnProperty.call(m, "assetCategory"))
                    w.uint32(48).int32(m.assetCategory);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetPositionList.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.filterConditions = $root.Trd_Common.TrdFilterConditions.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.filterPLRatioMin = r.double();
                            break;
                        }
                    case 4: {
                            m.filterPLRatioMax = r.double();
                            break;
                        }
                    case 5: {
                            m.refreshCache = r.bool();
                            break;
                        }
                    case 6: {
                            m.assetCategory = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_GetPositionList.S2C = (function() {
    
            function S2C(p) {
                this.positionList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.positionList = $util.emptyArray;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.positionList != null && m.positionList.length) {
                    for (var i = 0; i < m.positionList.length; ++i)
                        $root.Trd_Common.Position.encode(m.positionList[i], w.uint32(18).fork()).ldelim();
                }
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetPositionList.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            if (!(m.positionList && m.positionList.length))
                                m.positionList = [];
                            m.positionList.push($root.Trd_Common.Position.decode(r, r.uint32()));
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_GetPositionList.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_GetPositionList.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetPositionList.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_GetPositionList.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_GetPositionList.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_GetPositionList.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_GetPositionList.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_GetPositionList.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_GetPositionList;
    })();
    
    $root.Trd_ModifyOrder = (function() {
    
        var Trd_ModifyOrder = {};
    
        Trd_ModifyOrder.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.packetID = null;
            C2S.prototype.header = null;
            C2S.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            C2S.prototype.modifyOrderOp = 0;
            C2S.prototype.forAll = false;
            C2S.prototype.trdMarket = 0;
            C2S.prototype.qty = 0;
            C2S.prototype.price = 0;
            C2S.prototype.adjustPrice = false;
            C2S.prototype.adjustSideAndLimit = 0;
            C2S.prototype.auxPrice = 0;
            C2S.prototype.trailType = 0;
            C2S.prototype.trailValue = 0;
            C2S.prototype.trailSpread = 0;
            C2S.prototype.orderIDEx = "";
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.packetID != null && Object.hasOwnProperty.call(m, "packetID"))
                    $root.Common.PacketID.encode(m.packetID, w.uint32(10).fork()).ldelim();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(18).fork()).ldelim();
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(24).uint64(m.orderID);
                if (m.modifyOrderOp != null && Object.hasOwnProperty.call(m, "modifyOrderOp"))
                    w.uint32(32).int32(m.modifyOrderOp);
                if (m.forAll != null && Object.hasOwnProperty.call(m, "forAll"))
                    w.uint32(40).bool(m.forAll);
                if (m.trdMarket != null && Object.hasOwnProperty.call(m, "trdMarket"))
                    w.uint32(48).int32(m.trdMarket);
                if (m.qty != null && Object.hasOwnProperty.call(m, "qty"))
                    w.uint32(65).double(m.qty);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(73).double(m.price);
                if (m.adjustPrice != null && Object.hasOwnProperty.call(m, "adjustPrice"))
                    w.uint32(80).bool(m.adjustPrice);
                if (m.adjustSideAndLimit != null && Object.hasOwnProperty.call(m, "adjustSideAndLimit"))
                    w.uint32(89).double(m.adjustSideAndLimit);
                if (m.auxPrice != null && Object.hasOwnProperty.call(m, "auxPrice"))
                    w.uint32(97).double(m.auxPrice);
                if (m.trailType != null && Object.hasOwnProperty.call(m, "trailType"))
                    w.uint32(104).int32(m.trailType);
                if (m.trailValue != null && Object.hasOwnProperty.call(m, "trailValue"))
                    w.uint32(113).double(m.trailValue);
                if (m.trailSpread != null && Object.hasOwnProperty.call(m, "trailSpread"))
                    w.uint32(121).double(m.trailSpread);
                if (m.orderIDEx != null && Object.hasOwnProperty.call(m, "orderIDEx"))
                    w.uint32(130).string(m.orderIDEx);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_ModifyOrder.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.packetID = $root.Common.PacketID.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.orderID = r.uint64();
                            break;
                        }
                    case 4: {
                            m.modifyOrderOp = r.int32();
                            break;
                        }
                    case 5: {
                            m.forAll = r.bool();
                            break;
                        }
                    case 6: {
                            m.trdMarket = r.int32();
                            break;
                        }
                    case 8: {
                            m.qty = r.double();
                            break;
                        }
                    case 9: {
                            m.price = r.double();
                            break;
                        }
                    case 10: {
                            m.adjustPrice = r.bool();
                            break;
                        }
                    case 11: {
                            m.adjustSideAndLimit = r.double();
                            break;
                        }
                    case 12: {
                            m.auxPrice = r.double();
                            break;
                        }
                    case 13: {
                            m.trailType = r.int32();
                            break;
                        }
                    case 14: {
                            m.trailValue = r.double();
                            break;
                        }
                    case 15: {
                            m.trailSpread = r.double();
                            break;
                        }
                    case 16: {
                            m.orderIDEx = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_ModifyOrder.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            S2C.prototype.orderIDEx = "";
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(16).uint64(m.orderID);
                if (m.orderIDEx != null && Object.hasOwnProperty.call(m, "orderIDEx"))
                    w.uint32(26).string(m.orderIDEx);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_ModifyOrder.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.orderID = r.uint64();
                            break;
                        }
                    case 3: {
                            m.orderIDEx = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_ModifyOrder.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_ModifyOrder.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_ModifyOrder.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_ModifyOrder.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_ModifyOrder.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_ModifyOrder.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_ModifyOrder.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_ModifyOrder.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_ModifyOrder;
    })();
    
    $root.Trd_PlaceOrder = (function() {
    
        var Trd_PlaceOrder = {};
    
        Trd_PlaceOrder.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.packetID = null;
            C2S.prototype.header = null;
            C2S.prototype.trdSide = 0;
            C2S.prototype.orderType = 0;
            C2S.prototype.code = "";
            C2S.prototype.qty = 0;
            C2S.prototype.price = 0;
            C2S.prototype.adjustPrice = false;
            C2S.prototype.adjustSideAndLimit = 0;
            C2S.prototype.secMarket = 0;
            C2S.prototype.remark = "";
            C2S.prototype.timeInForce = 0;
            C2S.prototype.fillOutsideRTH = false;
            C2S.prototype.auxPrice = 0;
            C2S.prototype.trailType = 0;
            C2S.prototype.trailValue = 0;
            C2S.prototype.trailSpread = 0;
            C2S.prototype.session = 0;
            C2S.prototype.positionID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.packetID != null && Object.hasOwnProperty.call(m, "packetID"))
                    $root.Common.PacketID.encode(m.packetID, w.uint32(10).fork()).ldelim();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(18).fork()).ldelim();
                if (m.trdSide != null && Object.hasOwnProperty.call(m, "trdSide"))
                    w.uint32(24).int32(m.trdSide);
                if (m.orderType != null && Object.hasOwnProperty.call(m, "orderType"))
                    w.uint32(32).int32(m.orderType);
                if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                    w.uint32(42).string(m.code);
                if (m.qty != null && Object.hasOwnProperty.call(m, "qty"))
                    w.uint32(49).double(m.qty);
                if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                    w.uint32(57).double(m.price);
                if (m.adjustPrice != null && Object.hasOwnProperty.call(m, "adjustPrice"))
                    w.uint32(64).bool(m.adjustPrice);
                if (m.adjustSideAndLimit != null && Object.hasOwnProperty.call(m, "adjustSideAndLimit"))
                    w.uint32(73).double(m.adjustSideAndLimit);
                if (m.secMarket != null && Object.hasOwnProperty.call(m, "secMarket"))
                    w.uint32(80).int32(m.secMarket);
                if (m.remark != null && Object.hasOwnProperty.call(m, "remark"))
                    w.uint32(90).string(m.remark);
                if (m.timeInForce != null && Object.hasOwnProperty.call(m, "timeInForce"))
                    w.uint32(96).int32(m.timeInForce);
                if (m.fillOutsideRTH != null && Object.hasOwnProperty.call(m, "fillOutsideRTH"))
                    w.uint32(104).bool(m.fillOutsideRTH);
                if (m.auxPrice != null && Object.hasOwnProperty.call(m, "auxPrice"))
                    w.uint32(113).double(m.auxPrice);
                if (m.trailType != null && Object.hasOwnProperty.call(m, "trailType"))
                    w.uint32(120).int32(m.trailType);
                if (m.trailValue != null && Object.hasOwnProperty.call(m, "trailValue"))
                    w.uint32(129).double(m.trailValue);
                if (m.trailSpread != null && Object.hasOwnProperty.call(m, "trailSpread"))
                    w.uint32(137).double(m.trailSpread);
                if (m.session != null && Object.hasOwnProperty.call(m, "session"))
                    w.uint32(144).int32(m.session);
                if (m.positionID != null && Object.hasOwnProperty.call(m, "positionID"))
                    w.uint32(152).uint64(m.positionID);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_PlaceOrder.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.packetID = $root.Common.PacketID.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 3: {
                            m.trdSide = r.int32();
                            break;
                        }
                    case 4: {
                            m.orderType = r.int32();
                            break;
                        }
                    case 5: {
                            m.code = r.string();
                            break;
                        }
                    case 6: {
                            m.qty = r.double();
                            break;
                        }
                    case 7: {
                            m.price = r.double();
                            break;
                        }
                    case 8: {
                            m.adjustPrice = r.bool();
                            break;
                        }
                    case 9: {
                            m.adjustSideAndLimit = r.double();
                            break;
                        }
                    case 10: {
                            m.secMarket = r.int32();
                            break;
                        }
                    case 11: {
                            m.remark = r.string();
                            break;
                        }
                    case 12: {
                            m.timeInForce = r.int32();
                            break;
                        }
                    case 13: {
                            m.fillOutsideRTH = r.bool();
                            break;
                        }
                    case 14: {
                            m.auxPrice = r.double();
                            break;
                        }
                    case 15: {
                            m.trailType = r.int32();
                            break;
                        }
                    case 16: {
                            m.trailValue = r.double();
                            break;
                        }
                    case 17: {
                            m.trailSpread = r.double();
                            break;
                        }
                    case 18: {
                            m.session = r.int32();
                            break;
                        }
                    case 19: {
                            m.positionID = r.uint64();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_PlaceOrder.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
            S2C.prototype.orderIDEx = "";
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderID != null && Object.hasOwnProperty.call(m, "orderID"))
                    w.uint32(16).uint64(m.orderID);
                if (m.orderIDEx != null && Object.hasOwnProperty.call(m, "orderIDEx"))
                    w.uint32(26).string(m.orderIDEx);
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_PlaceOrder.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.orderID = r.uint64();
                            break;
                        }
                    case 3: {
                            m.orderIDEx = r.string();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_PlaceOrder.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_PlaceOrder.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_PlaceOrder.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_PlaceOrder.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_PlaceOrder.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_PlaceOrder.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_PlaceOrder.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_PlaceOrder.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_PlaceOrder;
    })();
    
    $root.Trd_SubAccPush = (function() {
    
        var Trd_SubAccPush = {};
    
        Trd_SubAccPush.C2S = (function() {
    
            function C2S(p) {
                this.accIDList = [];
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.accIDList = $util.emptyArray;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.accIDList != null && m.accIDList.length) {
                    w.uint32(10).fork();
                    for (var i = 0; i < m.accIDList.length; ++i)
                        w.uint64(m.accIDList[i]);
                    w.ldelim();
                }
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_SubAccPush.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            if (!(m.accIDList && m.accIDList.length))
                                m.accIDList = [];
                            if ((t & 7) === 2) {
                                var c2 = r.uint32() + r.pos;
                                while (r.pos < c2)
                                    m.accIDList.push(r.uint64());
                            } else
                                m.accIDList.push(r.uint64());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_SubAccPush.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_SubAccPush.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_SubAccPush.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_SubAccPush.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_SubAccPush.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_SubAccPush.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_SubAccPush.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_SubAccPush.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_SubAccPush.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_SubAccPush.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_SubAccPush;
    })();
    
    $root.Trd_UnlockTrade = (function() {
    
        var Trd_UnlockTrade = {};
    
        Trd_UnlockTrade.C2S = (function() {
    
            function C2S(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            C2S.prototype.unlock = false;
            C2S.prototype.pwdMD5 = "";
            C2S.prototype.securityFirm = 0;
    
            C2S.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.unlock != null && Object.hasOwnProperty.call(m, "unlock"))
                    w.uint32(8).bool(m.unlock);
                if (m.pwdMD5 != null && Object.hasOwnProperty.call(m, "pwdMD5"))
                    w.uint32(18).string(m.pwdMD5);
                if (m.securityFirm != null && Object.hasOwnProperty.call(m, "securityFirm"))
                    w.uint32(24).int32(m.securityFirm);
                return w;
            };
    
            C2S.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UnlockTrade.C2S();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.unlock = r.bool();
                            break;
                        }
                    case 2: {
                            m.pwdMD5 = r.string();
                            break;
                        }
                    case 3: {
                            m.securityFirm = r.int32();
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return C2S;
        })();
    
        Trd_UnlockTrade.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UnlockTrade.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_UnlockTrade.Request = (function() {
    
            function Request(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Request.prototype.c2s = null;
    
            Request.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.c2s != null && Object.hasOwnProperty.call(m, "c2s"))
                    $root.Trd_UnlockTrade.C2S.encode(m.c2s, w.uint32(10).fork()).ldelim();
                return w;
            };
    
            Request.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UnlockTrade.Request();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.c2s = $root.Trd_UnlockTrade.C2S.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Request;
        })();
    
        Trd_UnlockTrade.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_UnlockTrade.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UnlockTrade.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_UnlockTrade.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_UnlockTrade;
    })();
    
    $root.Trd_UpdateOrder = (function() {
    
        var Trd_UpdateOrder = {};
    
        Trd_UpdateOrder.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.order = null;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.order != null && Object.hasOwnProperty.call(m, "order"))
                    $root.Trd_Common.Order.encode(m.order, w.uint32(18).fork()).ldelim();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UpdateOrder.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.order = $root.Trd_Common.Order.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_UpdateOrder.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_UpdateOrder.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UpdateOrder.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_UpdateOrder.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_UpdateOrder;
    })();
    
    $root.Trd_UpdateOrderFill = (function() {
    
        var Trd_UpdateOrderFill = {};
    
        Trd_UpdateOrderFill.S2C = (function() {
    
            function S2C(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            S2C.prototype.header = null;
            S2C.prototype.orderFill = null;
    
            S2C.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.header != null && Object.hasOwnProperty.call(m, "header"))
                    $root.Trd_Common.TrdHeader.encode(m.header, w.uint32(10).fork()).ldelim();
                if (m.orderFill != null && Object.hasOwnProperty.call(m, "orderFill"))
                    $root.Trd_Common.OrderFill.encode(m.orderFill, w.uint32(18).fork()).ldelim();
                return w;
            };
    
            S2C.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UpdateOrderFill.S2C();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.header = $root.Trd_Common.TrdHeader.decode(r, r.uint32());
                            break;
                        }
                    case 2: {
                            m.orderFill = $root.Trd_Common.OrderFill.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return S2C;
        })();
    
        Trd_UpdateOrderFill.Response = (function() {
    
            function Response(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }
    
            Response.prototype.retType = 0;
            Response.prototype.retMsg = "";
            Response.prototype.errCode = 0;
            Response.prototype.s2c = null;
    
            Response.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.retType != null && Object.hasOwnProperty.call(m, "retType"))
                    w.uint32(8).int32(m.retType);
                if (m.retMsg != null && Object.hasOwnProperty.call(m, "retMsg"))
                    w.uint32(18).string(m.retMsg);
                if (m.errCode != null && Object.hasOwnProperty.call(m, "errCode"))
                    w.uint32(24).int32(m.errCode);
                if (m.s2c != null && Object.hasOwnProperty.call(m, "s2c"))
                    $root.Trd_UpdateOrderFill.S2C.encode(m.s2c, w.uint32(34).fork()).ldelim();
                return w;
            };
    
            Response.decode = function decode(r, l, e) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.Trd_UpdateOrderFill.Response();
                while (r.pos < c) {
                    var t = r.uint32();
                    if (t === e)
                        break;
                    switch (t >>> 3) {
                    case 1: {
                            m.retType = r.int32();
                            break;
                        }
                    case 2: {
                            m.retMsg = r.string();
                            break;
                        }
                    case 3: {
                            m.errCode = r.int32();
                            break;
                        }
                    case 4: {
                            m.s2c = $root.Trd_UpdateOrderFill.S2C.decode(r, r.uint32());
                            break;
                        }
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };
    
            return Response;
        })();
    
        return Trd_UpdateOrderFill;
    })();

    return $root;
})(protobuf);
