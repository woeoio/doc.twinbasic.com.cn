---
title: WebView2
parent: WebView2 Package
permalink: /tB/Packages/WebView2/WebView2/
---

# WebView2 绫?
**WebView2** 鏄竴涓壙杞?Microsoft Edge **WebView2** 杩愯鏃剁殑 twinBASIC 鎺т欢 --- 灏嗗叾鎷栨斁鍒癧**Form**](/official/Reference/VB/Form/)涓婏紝杩愯涓殑 Edge 寮曟搸浼氬湪鍏剁煩褰㈠尯鍩熷唴娓叉煋 Web 鍐呭銆傚簲鐢ㄧ▼搴忎唬鐮佸彲浠ュ鑸埌 URL銆佽繍琛?JavaScript銆佹嫤鎴?HTTP 璇锋眰銆佷笌椤甸潰鍏变韩 BASIC 瀵硅薄銆佸弻鍚戜紶閫掓秷鎭紝浠ュ強灏嗘枃妗ｆ墦鍗颁负 PDF銆?
璇ユ帶浠跺皝瑁呬簡搴曞眰 `ICoreWebView2*` COM 鎺ュ彛锛屽苟灏嗗叾鏆撮湶涓烘櫘閫氱殑 BASIC 灞炴€с€佹柟娉曞拰浜嬩欢銆傚ぇ閮ㄥ垎宸ヤ綔鍦ㄦ祻瑙堝櫒杩涚▼鍐呭紓姝ュ畬鎴?--- 鎺т欢鍦?WebView2 鐜鍜屾帶鍒跺櫒鍒涘缓瀹屾垚鍚庤Е鍙?[**Ready**](#ready) 浜嬩欢锛屽湪姝や箣鍓嶈皟鐢ㄥぇ澶氭暟鎴愬憳浼氬紩鍙?WebView2 control is not ready"锛堣繍琛屾椂閿欒 5锛夈€?
```vb
Private Sub Form_Load()
    WebView21.Navigate "https://www.twinbasic.com"
End Sub

Private Sub WebView21_Ready()
    Debug.Print "WebView2 ready: browser process " & WebView21.BrowserProcessId
End Sub

Private Sub WebView21_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long)
    If Not IsSuccess Then
        Debug.Print "Navigation failed: " & WebErrorStatus
    End If
End Sub
```

## 鐢熷懡鍛ㄦ湡

WebView2 鎺т欢鍦ㄦ瀯寤轰笌浣跨敤涔嬮棿缁忓巻涓変釜涓嶅悓闃舵锛屾瘡涓樁娈电敱 Edge 杩愯鏃朵腑鐨勫紓姝ユ楠よЕ鍙戯細

| 浜嬩欢                                | 浣曟椂瑙﹀彂                                                                                                              |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| [**Create**](#create)                | 瀹瑰櫒绐楀彛宸插瓨鍦ㄤ箣鍚庯紝WebView2 鐜鏋勫缓涔嬪墠銆傝缃?[**EnvironmentOptions**](#environmentoptions) 鐨勬渶鍚庢満浼氥€?|
| [**Error**](#error)                  | 鐜鎴栨帶鍒跺櫒鏃犳硶鍒涘缓 --- 閫氬父鏄洜涓虹己灏?WebView2 杩愯鏃躲€?           |
| [**Ready**](#ready)                  | 鐜銆佹帶鍒跺櫒鍜屾牳蹇冭鍥惧潎宸插氨缁€傛帶浠剁幇鍦ㄥ畬鍏ㄥ彲鐢ㄣ€?                     |

鍦?[**Ready**](#ready) 涔嬪墠璋冪敤瀵艰埅銆佽剼鏈垨璁剧疆璁块棶鍣ㄤ細寮曞彂杩愯鏃堕敊璇?5锛屾彁绀?WebView2 control is not ready"銆傚綋鏌愰」璁剧疆渚濊禆杈冩柊鐗堟湰鐨勮繍琛屾椂鎺ュ彛鏃讹紝鍚屾牱鐨勯敊璇細浠?The executing version of WebView2 does not support the requested feature"鐨勫舰寮忓嚭鐜?--- 璇峰厛鏌ヨ瀵瑰簲鐨?`Supports鈥eatures` 灞炴€с€?
濡傛灉 [**DocumentURL**](#documenturl) 瀛楁鍦?[**Ready**](#ready) 瑙﹀彂鏃跺叿鏈夐潪绌哄€硷紙璁捐鏃堕粯璁や负 `https://www.twinbasic.com`锛夛紝鎺т欢浼氳嚜鍔ㄥ鑸埌璇?URL銆?
## 寤惰繜浜嬩欢

澶氫釜杩愯鏃跺洖璋?--- [**PermissionRequested**](#permissionrequested)銆乕**NavigationStarting**](#navigationstarting)銆乕**WebResourceRequested**](#webresourcerequested)銆乕**ScriptDialogOpening**](#scriptdialogopening)銆乕**DownloadStarting**](#downloadstarting) 鍜?[**NewWindowRequested**](#newwindowrequested) --- 鍦?Edge 渚ф槸鍙噸鍏ョ殑锛屾剰鍛崇潃瀹冧滑鍦?WebView2 绾跨▼涓婅Е鍙戯紝鍚屾椂鏈熸湜瀹夸富鍚屾杩斿洖鎴栨寔鏈?寤惰繜*锛坉eferral锛夌洿鍒板仛鍑哄喅瀹氥€傚湪鍚屾澶勭悊绋嬪簭鍐呭洖璋冩帶浠跺彲鑳藉鑷存祻瑙堝櫒杩涚▼姝婚攣銆?
褰?[**UseDeferredEvents**](#usedeferredevents) 涓?**True**锛堥粯璁ゅ€硷級鏃讹紝鎺т欢浠ｈ〃瀹夸富鑾峰彇杩愯鏃剁殑寤惰繜锛屽皢浜嬩欢鎶曢€掑埌 BASIC 娑堟伅寰幆锛屽苟鍦ㄥ鐞嗙▼搴忚繑鍥炲悗瀹屾垚寤惰繜銆傚洜姝わ紝搴旂敤绋嬪簭浠ｇ爜鍦ㄨ繖浜涗簨浠朵腑鍙互瀹夊叏鍦拌皟鐢ㄤ换浣曞叾浠?**WebView2** 鏂规硶銆備粎褰撻渶瑕佸悓姝ヨ涔変笖瀹夸富宸茶嚜琛屽畨鎺掗噸鍏ヤ繚鎶ゆ椂锛屾墠灏?[**UseDeferredEvents**](#usedeferredevents) 璁句负 **False**銆?
[**AcceleratorKeyPressed**](#acceleratorkeypressed) 濮嬬粓鏄悓姝ョ殑 --- 鍏惰繍琛屾椂鍙傛暟涓嶆毚闇插欢杩熴€?
## JavaScript 浜掓搷浣?
鎺т欢鎻愪緵涓夌被 BASIC 鈫?JavaScript 妗ユ帴锛?
- **瀹夸富瀵硅薄鍏变韩** --- [**AddObject**](#addobject) 灏?COM 瀵硅薄浠?`chrome.webview.hostObjects.<Name>` 鐨勫悕绉板彂甯冨埌 JavaScript銆傞〉闈㈠彲浠ョ洿鎺ヨ皟鐢?BASIC 瀵硅薄鐨勬柟娉曞拰璇?鍐欏睘鎬с€傞渶瑕?[**AreHostObjectsAllowed**](#arehostobjectsallowed)锛堥粯璁?**True**锛夈€傚綋椤甸潰鍙兘鍦?BASIC 鎿嶄綔鏈熼棿鍥炶皟鏃讹紝浼犲叆 `UseDeferredInvoke:=True`锛涗娇鐢ㄥ欢杩熻皟鐢ㄦ椂锛屽涓绘棤娉曞悜椤甸潰杩斿洖鍊笺€?- **娑堟伅浼犻€?* --- [**PostWebMessage**](#postwebmessage) 鍚戦〉闈㈠彂閫佸€硷紝椤甸潰閫氳繃 `window.chrome.webview.addEventListener('message', 鈥?` 鎺ユ敹銆傞〉闈娇鐢?`window.chrome.webview.postMessage(鈥?` 鍥炲锛屼粠鑰岃Е鍙?[**JsMessage**](#jsmessage) 浜嬩欢銆傞渶瑕?[**IsWebMessageEnabled**](#iswebmessageenabled)锛堥粯璁?**True**锛夈€?- **鎵ц鑴氭湰** --- [**JsRun**](#jsrun) 璋冪敤鍛藉悕 JavaScript 鍑芥暟骞跺悓姝ョ瓑寰呯粨鏋滐紝[**JsRunAsync**](#jsrunasync) 寮傛璋冪敤骞跺湪缁撴灉鍒拌揪鏃惰Е鍙?[**JsAsyncResult**](#jsasyncresult)锛孾**JsProp**](#jsprop) 姹傚€煎 `document.title` 鐨勮〃杈惧紡锛孾**ExecuteScript**](#executescript) 瑙﹀彂鍚庡嵆蹇樿銆?
## 鎷︽埅璇锋眰

瑕侀噸鍐欍€佹ā鎷熸垨浠呰瀵熼〉闈㈢殑 HTTP 娴侀噺锛岃浣跨敤 [**AddWebResourceRequestedFilter**](#addwebresourcerequestedfilter) 娉ㄥ唽 URL 杩囨护鍣紝骞跺鐞?[**WebResourceRequested**](#webresourcerequested) 浜嬩欢銆備簨浠跺弬鏁版毚闇?[**WebView2Request**](/official/Reference/WebView2/WebView2Request)锛堝彧璇诲厓鏁版嵁锛屽彲鍙樿姹備綋锛夊拰 [**WebView2Response**](/official/Reference/WebView2/WebView2Response) --- 鍚戝搷搴斿璞″垎閰?**StatusCode**銆?*ReasonPhrase**銆?*Headers** 鍜屽唴瀹瑰嵆鍙煭璺綉缁滆姹傦紱淇濇寔涓嶅彉鍒欒杩愯鏃舵甯稿鐞嗐€?
灞炴€?----------

鎺т欢浠?`BaseControlFocusableNoFont` 缁ф壙鏍囧噯鐨勫ぇ灏忋€佸竷灞€鍜岀劍鐐规垚鍛樸€傚ぇ閮ㄥ垎 WebView2 鐗瑰畾鎴愬憳鍒嗕负涓夌被锛氭槧灏勫埌 Edge 杩愯鏃剁殑璁剧疆銆佹帰娴嬪凡鍔犺浇杩愯鏃剁増鏈殑鑳藉姏鏍囧織锛屼互鍙婅繍琛屾椂鍙鐘舵€併€?
### AdditionalAllowedFrameAncestors

褰撴鎺т欢鎵胯浇椤甸潰鏃跺厑璁哥殑棰濆 `Content-Security-Policy: frame-ancestors` 鎸囦护銆?*String**銆傞粯璁わ細绌恒€傚湪涓嬫瀵艰埅鏃剁敓鏁堬紱浠呭湪瀹炵幇浜?`ICoreWebView2NavigationStartingEventArgs2` 鐨勮繍琛屾椂涓婃湁鏁堛€?
### Anchors

鎺у埗鐖剁骇 **Form** 璋冩暣澶у皬鏃惰嚜鍔ㄨ皟鏁村ぇ灏忕殑瀹瑰櫒杈圭紭閿氱偣銆傜户鎵胯嚜 `BaseControlRectDockable`銆?
### AreBrowserAcceleratorKeysEnabled

Edge 鍐呯疆鐨勫姞閫熼敭鏄惁婵€娲?--- **F5** 鍒锋柊銆?*Ctrl+P** 鎵撳嵃銆?*Ctrl+F** 椤靛唴鏌ユ壘绛夈€?*Boolean**锛岄粯璁?**True**銆傞渶瑕?[**SupportsAcceleratorKeysFeatures**](#supportsacceleratorkeysfeatures)銆?
### AreDefaultContextMenusEnabled

鏄惁鏄剧ず Edge 鐨勫彸閿笂涓嬫枃鑿滃崟銆?*Boolean**锛岄粯璁?**True**銆傝涓?**False** 骞跺鐞?[**UserContextMenu**](#usercontextmenu) 浠ョ粯鍒惰嚜瀹氫箟鑿滃崟銆?
### AreDefaultScriptDialogsEnabled

Edge 鏄惁涓?`alert()`銆乣confirm()`銆乣prompt()` 鍜?`beforeunload` 纭妗嗘樉绀哄唴缃璇濇銆?*Boolean**锛岄粯璁?**True**銆傝涓?**False** 骞跺鐞?[**ScriptDialogOpening**](#scriptdialogopening) 浠ユ彁渚涜嚜瀹氫箟瀵硅瘽妗嗐€?
### AreDevToolsEnabled

鐢ㄦ埛鏄惁鍙互閫氳繃涓婁笅鏂囪彍鍗曟垨閿洏蹇嵎閿墦寮€ DevTools 绐楀彛銆?*Boolean**锛岄粯璁?**True**銆備笌 [**OpenDevToolsWindow**](#opendevtoolswindow) 鏃犲叧锛屽悗鑰呭缁堝彲鐢ㄣ€?
### AreHostObjectsAllowed

鏄惁鍏佽閫氳繃 [**AddObject**](#addobject) 灏嗗涓?BASIC 瀵硅薄鏆撮湶缁欓〉闈€?*Boolean**锛岄粯璁?**True**銆?
### BackColor

鍦?WebView2 琛ㄩ潰浠嶅湪鍔犺浇鍜岃璁℃ā寮忎笅鏃剁粯鍒剁殑鑳屾櫙棰滆壊銆?*OLE_COLOR**锛岄粯璁?`&HA0BD95`锛堟祬缁胯壊锛夈€傞〉闈㈡覆鏌撳畬鎴愬悗锛孍dge 鎺у埗鍙鍍忕礌銆?
### BrowserProcessId

澶栭儴 `msedgewebview2.exe` 瀹夸富杩涚▼鐨?Win32 杩涚▼ ID銆?*Long**銆傚彧璇汇€俒**Ready**](#ready) 鍚庡彲鐢ㄣ€?
### CanGoBack

娴忚鍘嗗彶涓綋鍓嶆枃妗ｄ箣鍓嶆槸鍚︽湁鏉＄洰銆?*Boolean**銆傚彧璇汇€俒**Ready**](#ready) 鍚庡彲鐢ㄣ€?
### CanGoForward

娴忚鍘嗗彶涓綋鍓嶆枃妗ｄ箣鍚庢槸鍚︽湁鏉＄洰銆?*Boolean**銆傚彧璇汇€俒**Ready**](#ready) 鍚庡彲鐢ㄣ€?
### CausesValidation

鐒︾偣绉诲叆鎺т欢鏃舵槸鍚﹁Е鍙戝墠涓€涓劍鐐规帶浠剁殑 **Validate** 浜嬩欢銆?*Boolean**锛岄粯璁?**True**銆傜户鎵裤€?
### Container

鎵胯浇姝ゆ帶浠剁殑鐖剁骇 **Form** / **Frame** / **PictureBox** / **UserControl**銆傜户鎵裤€?
### ControlType

濮嬬粓涓?**vbWebView2**锛圼**ControlTypeConstants**](/official/Reference/VBRUN/Constants/ControlTypeConstants)锛夈€傚彧璇汇€傜户鎵裤€?
### DocumentTitle

褰撳墠鏂囨。鐨?`<title>` 鏂囨湰銆?*String**銆傚彧璇汇€傛瘡娆￠〉闈㈡洿鏀规爣棰樻椂鏇存柊 --- 姣忔鏇存柊閮戒細瑙﹀彂 [**DocumentTitleChanged**](#documenttitlechanged) 浜嬩欢銆?
### DocumentURL

褰撳墠鏂囨。鐨?URL銆?*String**銆傝鍙栨椂杩斿洖姣忔瀵艰埅鍚庣殑瀹炴椂 URL锛涜祴鍊肩瓑鍚屼簬璋冪敤 [**Navigate**](#navigate)銆傝璁℃椂榛樿涓?`https://www.twinbasic.com`锛岀敤浣?[**Ready**](#ready) 瑙﹀彂鏃剁殑鑷姩瀵艰埅鐩爣銆?
### DragIcon

浠庤鎺т欢鎵嬪姩鎷栧姩鏃剁敤浣滈紶鏍囧厜鏍囩殑 **StdPicture**銆傜户鎵裤€?
### DragMode

鎷栨斁鎿嶄綔濡備綍鍚姩銆俒**DragModeConstants**](/official/Reference/VBRUN/Constants/DragModeConstants) 鐨勬垚鍛橈細**vbManual**锛?锛岄粯璁?--- 浠庝唬鐮佽皟鐢?[**Drag**](#drag)锛夋垨 **vbAutomatic**锛?锛夈€傜户鎵裤€?
### Enabled

鎺т欢鏄惁鎺ュ彈鐢ㄦ埛杈撳叆銆?*Boolean**锛岄粯璁?**True**銆傜户鎵裤€?
### EnvironmentOptions

閰嶇疆 WebView2 鐜鐨?[**WebView2EnvironmentOptions**](/official/Reference/WebView2/WebView2/EnvironmentOptions) 瀵硅薄 --- 鐢ㄦ埛鏁版嵁鏂囦欢澶广€佸彲鎵ц鏂囦欢鏂囦欢澶广€佸尯鍩熻缃€佽窡韪槻鎶ゃ€佸崟鐐圭櫥褰曞拰棰濆鐨勫懡浠よ鍙傛暟銆傛帶浠跺湪鍒濆鍖栨椂鑷姩鍒涘缓涓€涓紱鍦?[**Create**](#create) 浜嬩欢涔嬪墠鎴栨湡闂村鍏跺瓧娈佃祴鍊煎嵆鍙敓鏁堛€?
### Height

鎺т欢鐨勯珮搴︺€?*Single**銆傜户鎵裤€?
### hWnd

鎵胯浇 WebView2 琛ㄩ潰鐨?瀹瑰櫒*绐楀彛鐨?Win32 绐楀彛鍙ユ焺 --- 涓嶆槸 Edge 娴忚鍣ㄩ€夐」鍗℃湰韬殑 HWND锛屽悗鑰呭瓨鍦ㄤ簬鍗曠嫭鐨勮繘绋嬩腑銆?*LongPtr**銆傚彧璇汇€傝鐩栫户鎵跨殑瀹氫箟銆?
### Index

鎺т欢涓烘暟缁勪竴閮ㄥ垎鏃剁殑鎺т欢鏁扮粍绱㈠紩銆?*Long**銆傚彧璇汇€傜户鎵裤€?
### IsBuiltInErrorPageEnabled

鏄惁鏄剧ず Edge 鐨勯粯璁ら敊璇〉闈紙渚嬪"鍡紝鏃犳硶璁块棶姝ら〉闈?锛夈€?*Boolean**锛岄粯璁?**True**銆?
### IsDefaultDownloadDialogOpen

鍐呯疆 Edge 涓嬭浇绠＄悊鍣ㄥ璇濇褰撳墠鏄惁鍙銆?*Boolean**銆傚彧璇汇€傞渶瑕?[**SupportsDownloadDialogFeatures**](#supportsdownloaddialogfeatures)銆?
### IsDocumentPlayingAudio

褰撳墠鏂囨。鏄惁姝ｅ湪鎾斁闊抽銆?*Boolean**銆傚彧璇汇€傞渶瑕?[**SupportsAudioFeatures**](#supportsaudiofeatures)銆?
### IsGeneralAutoFillEnabled

Edge 鏄惁鎻愪緵淇濆瓨鍜岃嚜鍔ㄥ～鍏呴潪瀵嗙爜琛ㄥ崟鍊硷紙鍦板潃銆佺數璇濆彿鐮佺瓑锛夈€?*Boolean**锛岄粯璁?**True**銆傞渶瑕?[**SupportsAutoFillFeatures**](#supportsautofillfeatures)銆?
### IsMuted

鏂囨。鐨勯煶棰戞槸鍚﹂潤闊炽€?*Boolean**锛岄粯璁?**False**銆傞渶瑕?[**SupportsAudioFeatures**](#supportsaudiofeatures)銆?
### IsPasswordAutoSaveEnabled

Edge 鏄惁鎻愪緵淇濆瓨鍦ㄩ〉闈腑杈撳叆鐨勫瘑鐮併€?*Boolean**锛岄粯璁?**True**銆傞渶瑕?[**SupportsAutoFillFeatures**](#supportsautofillfeatures)銆?
### IsPinchZoomEnabled

瑙︽懜纭欢涓婄殑鎹忓悎鎵嬪娍鏄惁鏇存敼缂╂斁鍥犲瓙銆?*Boolean**锛岄粯璁?**True**銆傞渶瑕?[**SupportsPinchZoomFeatures**](#supportspinchzoomfeatures)銆?
### IsScriptEnabled

椤甸潰涓槸鍚﹁繍琛?JavaScript銆?*Boolean**锛岄粯璁?**True**銆傜鐢ㄥ悗涔熶細绂佺敤鎺т欢涓婄殑鎵€鏈?JavaScript 浜掓搷浣滃姛鑳姐€?
### IsStatusBarEnabled

Edge 鏄惁鏄剧ず鎮仠閾炬帴鐨勫唴缃姸鎬佹爮銆?*Boolean**锛岄粯璁?**True**銆?
### IsSuspended

WebView2 澶勭悊绠￠亾鏄惁宸茶 [**Suspend**](#suspend) 璋冪敤鏆傚仠銆?*Boolean**銆傚彧璇汇€傞渶瑕?[**SupportsSuspendResumeFeatures**](#supportssuspendresumefeatures)銆?
### IsSwipeNavigationEnabled

瑙︽懜纭欢涓婄殑姘村钩婊戝姩鎵嬪娍鏄惁鍦ㄥ巻鍙茶褰曚腑鍓嶈繘/鍚庨€€銆?*Boolean**锛岄粯璁?**True**銆傞渶瑕?[**SupportsSwipeNavigationFeatures**](#supportsswipenavigationfeatures)銆?
### IsWebMessageEnabled

[**PostWebMessage**](#postwebmessage) 妗ユ帴鍜?[**JsMessage**](#jsmessage) 浜嬩欢鏄惁婵€娲汇€?*Boolean**锛岄粯璁?**True**銆?
### IsZoomControlEnabled

鐢ㄦ埛鏄惁鍙互閫氳繃 **Ctrl+** 榧犳爣婊氳疆鎴?**Ctrl+** 鍔?鍑忓彿鏇存敼缂╂斁鍥犲瓙銆?*Boolean**锛岄粯璁?**True**銆?
### JsCallTimeOutSeconds

[**JsRun**](#jsrun) 鍜?[**JsProp**](#jsprop) 鍦ㄥ紩鍙?`RPC_E_TIMEOUT` 涔嬪墠绛夊緟鍚屾 JavaScript 缁撴灉鐨勬椂闀裤€?*Double** 绉掞紱`0`锛堥粯璁わ級鏃犻檺绛夊緟銆?
### Left

鎺т欢鍦ㄥ叾瀹瑰櫒鍐呯殑姘村钩浣嶇疆銆?*Double**銆傜户鎵裤€?
### MouseIcon

褰?[**MousePointer**](#mousepointer) 涓?**vbCustom** 鏃剁敤浣滈紶鏍囧厜鏍囩殑 **StdPicture**銆傜户鎵裤€?
### MousePointer

鎺т欢涓婄殑榧犳爣鍏夋爣銆俒**MousePointerConstants**](/official/Reference/VBRUN/Constants/MousePointerConstants) 鐨勬垚鍛樸€傜户鎵裤€?
### Name

璁捐鏃跺悕绉般€?*String**銆傝繍琛屾椂鍙銆傜户鎵裤€?
### SupportsAcceleratorKeysFeatures

宸插姞杞界殑 WebView2 杩愯鏃舵槸鍚︽敮鎸佸姞閫熼敭璁剧疆 --- 鍗虫槸鍚︽毚闇?`ICoreWebView2Settings3`銆?*Boolean**銆傚彧璇汇€?
### SupportsAudioFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸侀煶棰戣缃?--- 鍗虫槸鍚︽毚闇?`ICoreWebView2_8`銆?*Boolean**銆傚彧璇汇€?
### SupportsAutoFillFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸佽嚜鍔ㄥ～鍏呰缃?--- 鍗虫槸鍚︽毚闇?`ICoreWebView2Settings4`銆?*Boolean**銆傚彧璇汇€?
### SupportsDownloadDialogFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸佹帶鍒朵笅杞藉璇濇 --- 鍗虫槸鍚︽毚闇?`ICoreWebView2_9`銆?*Boolean**銆傚彧璇汇€?
### SupportsFolderMappingFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸佽櫄鎷熶富鏈哄悕鍒版枃浠跺す鐨勬槧灏?--- 鍗虫槸鍚︽毚闇?`ICoreWebView2_5`銆?*Boolean**銆傚彧璇汇€?
### SupportsNavigateCustomFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸?[**NavigateCustom**](#navigatecustom) 浣跨敤鐨勮嚜瀹氫箟璇锋眰瀵艰埅鍔熻兘 --- 鍗虫槸鍚︽毚闇?`ICoreWebView2_2`銆?*Boolean**銆傚彧璇汇€?
### SupportsPdfFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸?[**PrintToPdf**](#printtopdf) --- 鍗虫槸鍚︽毚闇?`ICoreWebView2_7`銆?*Boolean**銆傚彧璇汇€?
### SupportsPinchZoomFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸佹崗鍚堢缉鏀捐缃?--- 鍗虫槸鍚︽毚闇?`ICoreWebView2Settings5`銆?*Boolean**銆傚彧璇汇€?
### SupportsSuspendResumeFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸?[**Suspend**](#suspend) / [**Resume**](#resume) --- 鍗虫槸鍚︽毚闇?`ICoreWebView2_3`銆?*Boolean**銆傚彧璇汇€?
### SupportsSwipeNavigationFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸佹粦鍔ㄥ鑸缃?--- 鍗虫槸鍚︽毚闇?`ICoreWebView2Settings6`銆?*Boolean**銆傚彧璇汇€?
### SupportsTaskManagerFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸?[**OpenTaskManagerWindow**](#opentaskmanagerwindow) --- 鍗虫槸鍚︽毚闇?`ICoreWebView2_6`銆?*Boolean**銆傚彧璇汇€?
### SupportsUserAgentFeatures

宸插姞杞界殑杩愯鏃舵槸鍚︽敮鎸?[**UserAgent**](#useragent) 璁剧疆 --- 鍗虫槸鍚︽毚闇?`ICoreWebView2Settings2`銆?*Boolean**銆傚彧璇汇€?
### TabIndex

鎺т欢鍦ㄧ獥浣?TAB 閿鑸『搴忎腑鐨勪綅缃€?*Long**銆傜户鎵裤€?
### TabStop

鐢ㄦ埛鏄惁鍙互閫氳繃 **TAB** 閿埌杈炬帶浠躲€?*Boolean**锛岄粯璁?**True**銆傜户鎵裤€?
### Tag

搴旂敤绋嬪簭鍙敤浜庡皢鑷畾涔夋暟鎹笌鎺т欢鍏宠仈鐨勮嚜鐢辨牸寮?**String**銆傜户鎵裤€?
### Top

鎺т欢鍦ㄥ叾瀹瑰櫒鍐呯殑鍨傜洿浣嶇疆銆?*Double**銆傜户鎵裤€?
### UseDeferredEvents

鍙噸鍏ョ殑杩愯鏃朵簨浠讹紙[**PermissionRequested**](#permissionrequested)銆乕**NavigationStarting**](#navigationstarting)銆乕**WebResourceRequested**](#webresourcerequested)銆乕**ScriptDialogOpening**](#scriptdialogopening)銆乕**DownloadStarting**](#downloadstarting)銆乕**NewWindowRequested**](#newwindowrequested)锛夋槸鍚﹀湪瑙﹀彂鍓嶅欢杩熷埌 BASIC 娑堟伅寰幆銆?*Boolean**锛岄粯璁?**True**銆傚弬瑙乕寤惰繜浜嬩欢](#deferred-events)銆?
### UserAgent

Edge 鍦ㄦ瘡涓?HTTP 璇锋眰涓彂閫佺殑 `User-Agent` 瀛楃涓层€?*String**銆傝缃悗鍦ㄧ幆澧冪敓鍛藉懆鏈熷唴鎸佺画鏈夋晥銆傞渶瑕?[**SupportsUserAgentFeatures**](#supportsuseragentfeatures)銆?
### Visible

鎺т欢鏄惁鍙銆?*Boolean**锛岄粯璁?**True**銆傜户鎵裤€?
### Width

鎺т欢鐨勫搴︺€?*Single**銆傜户鎵裤€?
### ZoomFactor

褰撳墠缂╂斁鍥犲瓙 --- `1.0` 涓?100%锛宍1.5` 涓?150%锛屼互姝ょ被鎺ㄣ€?*Double**銆傝璁℃椂榛樿涓?`0`锛岃〃绀?涓嶈鐩?Edge 鐨勯粯璁ゅ€?1.0"銆?
::: info
鐢变簬璁捐鏃堕粯璁ゅ€间负 `0` 鑰岄潪 `1.0`锛屽褰撳墠鍊艰繘琛屼箻娉曡繍绠楁椂浼氶粯榛樹粠闆跺紑濮嬶紝闄ら潪瀹夸富鍏堝皢鍏堕挸浣嶅埌 `1`锛?
```vb
If WebView21.ZoomFactor = 0 Then WebView21.ZoomFactor = 1
WebView21.ZoomFactor *= 1.1   ' 棣栨鐐瑰嚮 110%锛岀浜屾 121%锛屸€?```
:::

鏂规硶
-------

### AddObject

灏?BASIC COM 瀵硅薄浠?`chrome.webview.hostObjects.<ObjName>` 鐨勫悕绉版毚闇茬粰椤甸潰銆傞〉闈㈠彲浠ヤ綔涓烘櫘閫?JavaScript 瀵硅薄璇诲啓鍏跺睘鎬у拰璋冪敤鍏舵柟娉曘€?
璇硶锛?object*.**AddObject** *ObjName*, *Object* [, *UseDeferredInvoke* ]

*ObjName*
: *蹇呴渶* 涓€涓?**String** 鍚嶇О锛岄〉闈㈤€氳繃姝ゅ悕绉板紩鐢ㄥ璞°€?
*Object*
: *蹇呴渶* 瑕佸彂甯冪殑 **Object**銆?
*UseDeferredInvoke*
: *鍙€? 涓€涓?**Boolean**锛岄粯璁?**False**銆備负 **True** 鏃讹紝鏉ヨ嚜椤甸潰鐨勮皟鐢ㄨ寤惰繜鍒?BASIC 娑堟伅寰幆 --- 鍙互瀹夊叏鍦颁粠鍐呴儴鎺у埗閲嶅叆 WebView2 鎺т欢锛屼絾椤甸潰鏃犳硶璇诲彇杩斿洖鍊笺€傚綋椤甸潰闇€瑕佽鍙栬繑鍥炲€兼椂浣跨敤 **False**銆?
```vb
Private Sub WebView21_Ready()
    WebView21.AddObject "myCalculator", New MyCalculator
End Sub

Class MyCalculator
    Public Function MultiplyByTen(ByVal Value As Long) As Long
        Return Value * 10
    End Function
End Class
```

```js
async function callHostCalculator() {
    let result = await chrome.webview.hostObjects.myCalculator.MultiplyByTen(7);
    alert("BASIC returned: " + result);   //  -> 70
}
```

瀵瑰涓诲璞＄殑璋冪敤鍦?JavaScript 渚ф槸寮傛鐨勶紝蹇呴』鍦?`async` 鍑芥暟鍐?`await` --- 鍗充娇 *UseDeferredInvoke* 涓?**False**銆傚叧浜庝綍鏃朵紶鍏?**True**锛屽弬瑙乕閲嶅叆](/official/Tutorials/WebView2/Re-entrancy)鏁欑▼銆?
### AddScriptToExecuteOnDocumentCreated

娉ㄥ唽涓€娈?JavaScript 浠ｇ爜锛屽湪 WebView2 瀵艰埅鍒扮殑姣忎釜鏂版枃妗ｉ《閮ㄨ嚜鍔ㄨ繍琛屻€傚湪*涓嬩竴娆?瀵艰埅鏃剁敓鏁?--- 涓嶅奖鍝嶅綋鍓嶅凡鍔犺浇鐨勯〉闈€?
璇硶锛?object*.**AddScriptToExecuteOnDocumentCreated** *jsCode*

*jsCode*
: *蹇呴渶* 涓€涓寘鍚娉ㄥ叆鐨?JavaScript 浠ｇ爜鐨?**String**銆?
### AddWebResourceRequestedFilter

娉ㄥ唽涓€涓?URL 妯″紡銆俇RI 鍖归厤璇ユā寮忕殑璇锋眰灏嗚Е鍙?[**WebResourceRequested**](#webresourcerequested) 浜嬩欢锛屼互渚垮涓昏瀵熸垨瑕嗙洊瀹冧滑銆?
璇硶锛?object*.**AddWebResourceRequestedFilter** *sFilter*, *FilterContext*

*sFilter*
: *蹇呴渶* 涓€涓?**String** URL 妯″紡銆俙*` 鍜?`?` 涓洪€氶厤绗︺€?
*FilterContext*
: *蹇呴渶* [**wv2WebResourceContext**](/official/Reference/WebView2/Enumerations/wv2WebResourceContext) 鐨勬垚鍛橈紝灏嗗尮閰嶉檺鍒朵负鐗瑰畾璧勬簮绫诲瀷銆?
### CallDevToolsProtocolMethod

鍚戣繍琛屼腑鐨?Edge 瀹炰緥鍙戦€?Chrome DevTools Protocol 娑堟伅銆傛彁渚?*CustomEventId* 鏃讹紝杩愯鏃剁殑鍥炲浼氫互鐩稿悓鐨?*CustomEventId* 鍜?JSON 鍝嶅簲瑙﹀彂 [**DevToolsProtocolResponse**](#devtoolsprotocolresponse) 浜嬩欢銆?
璇硶锛?object*.**CallDevToolsProtocolMethod** *MethodName*, *ParamsAsJson* [, *CustomEventId* ]

*MethodName*
: *蹇呴渶* 涓€涓?**String**锛屽 `"Emulation.setScriptExecutionDisabled"`銆?
*ParamsAsJson*
: *蹇呴渶* 涓€涓寘鍚?JSON 缂栫爜鍙傛暟瀵硅薄鐨?**String**銆?
*CustomEventId*
: *鍙€? 涓€涓湪 [**DevToolsProtocolResponse**](#devtoolsprotocolresponse) 涓洖浼犵殑 **Variant**銆傜渷鐣ユ椂锛屽洖澶嶈涓㈠純銆?
### ClearVirtualHostNameToFolderMapping

绉婚櫎鍏堝墠鐢?[**SetVirtualHostNameToFolderMapping**](#setvirtualhostnametofoldermapping) 瀹夎鐨勮櫄鎷熶富鏈哄悕 鈫?鏈湴鏂囦欢澶规槧灏勩€?
璇硶锛?object*.**ClearVirtualHostNameToFolderMapping** *hostName*

*hostName*
: *蹇呴渶* 涓€涓笌浼犲叆 **SetVirtualHostNameToFolderMapping** 鐨勪富鏈哄悕鍖归厤鐨?**String**銆?
闇€瑕?[**SupportsFolderMappingFeatures**](#supportsfoldermappingfeatures)銆?
### CloseDefaultDownloadDialog

闅愯棌鍐呯疆鐨?Edge 涓嬭浇绠＄悊鍣ㄥ璇濇銆?
璇硶锛?object*.**CloseDefaultDownloadDialog**

闇€瑕?[**SupportsDownloadDialogFeatures**](#supportsdownloaddialogfeatures)銆?
### Drag

寮€濮嬨€佸畬鎴愭垨鍙栨秷鎵嬪姩鎷栨斁鎿嶄綔銆傜户鎵裤€?
璇硶锛?object*.**Drag** [ *Action* ]

### ExecuteScript

鍦ㄩ〉闈腑姹傚€?JavaScript锛屼笉绛夊緟瀹屾垚锛屼篃涓嶈繑鍥炵粨鏋溿€傞渶瑕佽繑鍥炲€兼椂璇蜂娇鐢?[**JsRun**](#jsrun) 鎴?[**JsRunAsync**](#jsrunasync)銆?
璇硶锛?object*.**ExecuteScript** *jsCode*

*jsCode*
: *蹇呴渶* 涓€涓鍦ㄩ〉闈㈠叏灞€浣滅敤鍩熶腑姹傚€肩殑 **String** JavaScript 浠ｇ爜銆?
### GoBack

鍦ㄦ祻瑙堝巻鍙蹭腑鍚庨€€涓€涓潯鐩€傚綋 [**CanGoBack**](#cangoback) 涓?**False** 鏃堕潤榛樻棤鎿嶄綔銆?
璇硶锛?object*.**GoBack**

### GoForward

鍦ㄦ祻瑙堝巻鍙蹭腑鍓嶈繘涓€涓潯鐩€傚綋 [**CanGoForward**](#cangoforward) 涓?**False** 鏃堕潤榛樻棤鎿嶄綔銆?
璇硶锛?object*.**GoForward**

### JsProp

姹傚€?JavaScript 琛ㄨ揪寮忓苟鍚屾杩斿洖缁撴灉 --- 渚夸簬璇诲彇灞炴€у `document.title`銆傜瓑寰呯粨鏋滄渶澶?[**JsCallTimeOutSeconds**](#jscalltimeoutseconds) 绉掋€?
璇硶锛?object*.**JsProp** ( *PropName* ) **As Variant**

*PropName*
: *蹇呴渶* 涓€涓寘鍚姹傚€艰〃杈惧紡鐨?**String**銆?
杩斿洖浠庤繍琛屾椂杩斿洖鐨?JSON 瑙ｇ爜鐨勭粨鏋?--- **Boolean**銆?*Double**銆?*String**銆?*Null** 鎴?**Empty**锛堝搴?`undefined`锛夈€傚皻涓嶆敮鎸佸璞″拰鏁扮粍缁撴灉 --- 璁块棶瀹冧滑浼氬紩鍙戣繍琛屾椂閿欒 5銆?
### JsRun

浣跨敤缁欏畾鍙傛暟璋冪敤鍛藉悕 JavaScript 鍑芥暟骞跺悓姝ヨ繑鍥炵粨鏋溿€傜瓑寰呯粨鏋滄渶澶?[**JsCallTimeOutSeconds**](#jscalltimeoutseconds) 绉掋€?
璇硶锛?object*.**JsRun** ( *FuncName*, [ *args* ] ) **As Variant**

*FuncName*
: *蹇呴渶* 涓€涓懡鍚?JavaScript 鍑芥暟鐨?**String** --- 濡?`"document.querySelector"`銆?
*args*
: *鍙€? 浠绘剰鏁伴噺鐨?**Variant** 鍙傛暟銆傛瘡涓弬鏁板湪浼犻€掔粰鍑芥暟鍓嶈繘琛?JSON 缂栫爜銆傛敮鎸?String銆佹暟鍊笺€?*Boolean**銆?*Null** 鍜?**Empty**銆?
```vb
' 璋冪敤椤甸潰绔嚱鏁?`multiplyTheseNumbers(a, b)` 骞剁瓑寰呯粨鏋溿€?Dim product As Long = WebView21.JsRun("multiplyTheseNumbers", 5, 6)
Debug.Print product   ' 30
```

### JsRunAsync

寮傛璋冪敤鍛藉悕 JavaScript 鍑芥暟骞剁珛鍗宠繑鍥炰竴涓护鐗屻€傜粨鏋滃埌杈炬椂锛孾**JsAsyncResult**](#jsasyncresult) 浼氫互鐩稿悓浠ょ墝瑙﹀彂銆?
璇硶锛?object*.**JsRunAsync** ( *FuncName*, [ *args* ] ) **As LongLong**

*FuncName*
: *蹇呴渶* 涓€涓懡鍚?JavaScript 鍑芥暟鐨?**String**銆?
*args*
: *鍙€? 浠绘剰鏁伴噺鐨?**Variant** 鍙傛暟锛孞SON 缂栫爜鏂瑰紡涓?[**JsRun**](#jsrun) 鐩稿悓銆?
```vb
Private Sub btnRun_Click()
    WebView21.JsRunAsync "multiplyTheseNumbers", 5, 6
End Sub

Private Sub WebView21_JsAsyncResult( _
        ByVal Result As Variant, Token As LongLong, ErrString As String)
    If LenB(ErrString) = 0 Then
        Debug.Print "Async result: "; Result
    Else
        Debug.Print "Async error: "; ErrString
    End If
End Sub
```

### Move

鍦ㄥ崟娆¤皟鐢ㄤ腑閲嶆柊瀹氫綅鍜岃皟鏁存帶浠跺ぇ灏忋€傜户鎵裤€?
璇硶锛?object*.**Move** *Left* [, *Top* [, *Width* [, *Height* ] ] ]

### MoveFocus

灏嗛敭鐩樼劍鐐硅浆绉诲埌搴曞眰 WebView2 琛ㄩ潰锛屼娇鍚庣画鍑婚敭鍒嗗彂鍒伴〉闈腑銆備笌缁ф壙鐨?[**SetFocus**](#setfocus)锛堣仛鐒﹀涓绘帶浠剁獥鍙ｏ級涓嶅悓銆?
璇硶锛?object*.**MoveFocus**

### Navigate

灏?URL 鍔犺浇鍒?WebView2 涓€傝Е鍙?[**NavigationStarting**](#navigationstarting)锛岀劧鍚庤Е鍙?[**NavigationComplete**](#navigationcomplete)銆傚鏋?URI 娌℃湁鍗忚鍓嶇紑锛屼細鑷姩娣诲姞 `https://`銆?
璇硶锛?object*.**Navigate** *uri*

*uri*
: *蹇呴渶* 涓€涓?**String** URI锛屽 `"https://www.twinbasic.com"` 鎴?`"file:///C:/page.html"`銆?
```vb
Private Sub AddressBar_KeyDown(KeyCode As Integer, Shift As Integer)
    If KeyCode = vbKeyReturn Then WebView21.Navigate AddressBar.Text
End Sub

Private Sub WebView21_NavigationComplete( _
        ByVal IsSuccess As Boolean, ByVal WebErrorStatus As Long)
    btnBack.Enabled = WebView21.CanGoBack
    btnForward.Enabled = WebView21.CanGoForward
End Sub
```

### NavigateCustom

浣跨敤浠绘剰 HTTP 鏂规硶銆佸彲閫夎姹傚ご鍜屽彲閫夎姹備綋瀵艰埅 --- 閫傜敤浜?POST 瀵艰埅鎴栭鍏堥檮鍔犳巿鏉冨ご銆傝Е鍙?[**NavigationStarting**](#navigationstarting) 鍜?[**NavigationComplete**](#navigationcomplete)銆?
璇硶锛?object*.**NavigateCustom** *uri*, *method* [, *headers* [, *postData* [, *postDataAsUTF8* ] ] ]

*uri*
: *蹇呴渶* 涓€涓?**String** URI銆備笌 [**Navigate**](#navigate) 涓€鏍凤紝缂哄皯鍗忚鍓嶇紑鏃惰嚜鍔ㄨˉ涓?`https://`銆?
*method*
: *蹇呴渶* 涓€涓?**String** HTTP 鏂规硶 --- `"GET"`銆乣"POST"` 绛夈€?
*headers*
: *鍙€? 涓€涓敱 `vbCrLf` 鍒嗛殧鐨?`Header: value` 琛岀粍鎴愮殑 **String**銆?
*postData*
: *鍙€? 涓€涓寘鍚姹備綋鐨?**Variant** --- **String**锛堟牴鎹?*postDataAsUTF8* 缂栫爜锛夋垨 **Byte()** 鏁扮粍锛堝師鏍蜂娇鐢級銆?
*postDataAsUTF8*
: *鍙€? 涓€涓?**Boolean**锛岄粯璁?**True**銆備负 **True** 涓?*postData* 涓?**String** 鏃讹紝瀛楃涓插湪鍙戦€佸墠杩涜 UTF-8 缂栫爜銆?
闇€瑕?[**SupportsNavigateCustomFeatures**](#supportsnavigatecustomfeatures)銆?
### NavigateToString

灏?HTML 瀛楃涓茬洿鎺ュ姞杞藉埌 WebView2 涓紝濡傚悓 HTTP 鍝嶅簲鐨勬鏂?--- 閫傜敤浜庡惎鍔ㄧ敾闈€佺敓鎴愮殑鎶ュ憡鎴栧叧浜庨〉闈€傝Е鍙?[**NavigationStarting**](#navigationstarting) 鍜?[**NavigationComplete**](#navigationcomplete)銆?
璇硶锛?object*.**NavigateToString** *htmlContent*

*htmlContent*
: *蹇呴渶* 涓€涓寘鍚?HTML 婧愪唬鐮佺殑 **String**銆?
```vb
WebView21.NavigateToString "<h1>Hello, world!</h1>"
```

### OpenDefaultDownloadDialog

鏄剧ず鍐呯疆鐨?Edge 涓嬭浇绠＄悊鍣ㄥ璇濇銆?
璇硶锛?object*.**OpenDefaultDownloadDialog**

闇€瑕?[**SupportsDownloadDialogFeatures**](#supportsdownloaddialogfeatures)銆?
### OpenDevToolsWindow

鍦ㄥ崟鐙殑 Edge 绐楀彛涓墦寮€椤甸潰鐨?DevTools 绐楀彛銆備笌 [**AreDevToolsEnabled**](#aredevtoolsenabled) 鏃犲叧锛屽悗鑰呬粎鎺у埗鐢ㄦ埛鍙戣捣鐨勮矾寰勩€?
璇硶锛?object*.**OpenDevToolsWindow**

### OpenTaskManagerWindow

鎵撳紑 Edge 鐨勬祻瑙堝櫒浠诲姟绠＄悊鍣ㄧ獥鍙ｏ紝鍒楀嚭鎺т欢浣跨敤鐨勬覆鏌撳櫒杩涚▼銆?
璇硶锛?object*.**OpenTaskManagerWindow**

闇€瑕?[**SupportsTaskManagerFeatures**](#supportstaskmanagerfeatures)銆?
### PostWebMessage

鍚戦〉闈㈠彂閫佸€笺€傞〉闈㈤€氳繃 `window.chrome.webview` 涓婄殑 `message` 浜嬩欢鎺ユ敹銆?*String** 浣滀负 JavaScript 瀛楃涓蹭紶閫掞紱鍏朵粬绫诲瀷鍦ㄥ彂閫佸墠杩涜 JSON 缂栫爜銆?
璇硶锛?object*.**PostWebMessage** *Message*

*Message*
: *蹇呴渶* 涓€涓鍙戦€佺殑 **Variant** 鍊笺€?
闇€瑕?[**IsWebMessageEnabled**](#iswebmessageenabled)銆?
```vb
WebView21.PostWebMessage "Hello from twinBASIC!"

Private Sub WebView21_JsMessage(ByVal Message As Variant)
    Debug.Print "Reply from page: "; Message
End Sub
```

```js
window.chrome.webview.addEventListener('message', (e) => {
    alert("Host sent: " + e.data);
    window.chrome.webview.postMessage("Thanks, twinBASIC!");
});
```

### PostWebMessageJSON

鍚戦〉闈㈠彂閫佸瓧闈?JSON 瀛楃涓茶€屼笉閲嶆柊缂栫爜 --- 閫傜敤浜庤皟鐢ㄦ柟宸叉湁搴忓垪鍖?JSON 鐨勬儏鍐点€?
璇硶锛?object*.**PostWebMessageJSON** *jsonString*

*jsonString*
: *蹇呴渶* 涓€涓寘鍚湁鏁?JSON 鐨?**String**銆?
闇€瑕?[**IsWebMessageEnabled**](#iswebmessageenabled)銆?
### PrintToPdf

灏嗗綋鍓嶆枃妗ｄ繚瀛樹负 PDF 鏂囦欢銆傚伐浣滃紓姝ュ畬鎴?--- 缁撴灉閫氳繃 [**PrintToPdfCompleted**](#printtopdfcompleted) 鎴?[**PrintToPdfFailed**](#printtopdffailed) 鍒拌揪銆傞渶瑕?[**SupportsPdfFeatures**](#supportspdffeatures)銆?
璇硶锛?object*.**PrintToPdf** *outputPath* [, *Orientation* [, *ScaleFactor* [, *PageWidth* [, *PageHeight* [, *MarginTop* [, *MarginBottom* [, *MarginLeft* [, *MarginRight* [, *ShouldPrintBackgrounds* [, *ShouldPrintSelectionOnly* [, *ShouldPrintHeaderAndFooter* [, *HeaderTitle* [, *FooterUri* ] ] ] ] ] ] ] ] ] ] ] ] ]

*outputPath*
: *蹇呴渶* 涓€涓鍐欏叆鐨?PDF 鏂囦欢鐨勭粷瀵硅矾寰?**String**銆?
*Orientation*
: *鍙€? [**wv2PrintOrientation**](/official/Reference/WebView2/Enumerations/wv2PrintOrientation) 鐨勬垚鍛樸€傞粯璁?**wv2PrintPortrait**銆?
*ScaleFactor*銆?PageWidth*銆?PageHeight*銆?MarginTop*銆?MarginBottom*銆?MarginLeft*銆?MarginRight*
: *鍙€? 鎻忚堪椤甸潰甯冨眬鐨?**Double**銆傜渷鐣ヤ换涓€鍙傛暟浠ヤ娇鐢ㄨ繍琛屾椂榛樿鍊笺€?
*ShouldPrintBackgrounds*
: *鍙€? 涓€涓?**Boolean**锛岄粯璁?**False**銆?
*ShouldPrintSelectionOnly*
: *鍙€? 涓€涓?**Boolean**锛岄粯璁?**False**銆?
*ShouldPrintHeaderAndFooter*
: *鍙€? 涓€涓?**Boolean**锛岄粯璁?**True**銆?
*HeaderTitle*銆?FooterUri*
: *鍙€? 瑕嗙洊榛樿椤电湁鏍囬鍜岄〉鑴?URI 鐨?**String**銆?
```vb
Private Sub btnSave_Click()
    WebView21.PrintToPdf Environ$("USERPROFILE") & "\Documents\page.pdf"
End Sub

Private Sub WebView21_PrintToPdfCompleted()
    MsgBox "PDF saved.", vbInformation
End Sub
```

### Reload

閲嶆柊鍔犺浇褰撳墠鏂囨。 --- 绛夊悓浜庢寜涓?**F5**銆?
璇硶锛?object*.**Reload**

### RemoveObject

绉婚櫎鍏堝墠閫氳繃 [**AddObject**](#addobject) 鍙戝竷鐨勫涓诲璞°€?
璇硶锛?object*.**RemoveObject** *ObjName*

*ObjName*
: *蹇呴渶* 涓€涓笌浼犲叆 **AddObject** 鐨勫悕绉板尮閰嶇殑 **String**銆?
### RemoveWebResourceRequestedFilter

绉婚櫎鍏堝墠閫氳繃 [**AddWebResourceRequestedFilter**](#addwebresourcerequestedfilter) 娉ㄥ唽鐨?URL 杩囨护鍣ㄣ€備紶鍏ユ敞鍐屾椂浣跨敤鐨勭浉鍚?*sFilter* 鍜?*FilterContext* 鍊笺€?
璇硶锛?object*.**RemoveWebResourceRequestedFilter** *sFilter*, *FilterContext*

*sFilter*
: *蹇呴渶* 涓€涓?**String** URL 妯″紡銆?
*FilterContext*
: *蹇呴渶* [**wv2WebResourceContext**](/official/Reference/WebView2/Enumerations/wv2WebResourceContext) 鐨勬垚鍛樸€?
### Resume

鎭㈠鍏堝墠鏆傚仠鐨?WebView2 绠￠亾銆備笉瑙﹀彂浜嬩欢 --- 涔嬪悗璇诲彇 [**IsSuspended**](#issuspended) 浠ョ‘璁ゃ€?
璇硶锛?object*.**Resume**

闇€瑕?[**SupportsSuspendResumeFeatures**](#supportssuspendresumefeatures)銆?
### SetFocus

灏嗚緭鍏ョ劍鐐圭Щ鑷冲涓绘帶浠躲€傜户鎵裤€傝鑱氱劍*椤甸潰*琛ㄩ潰浣垮嚮閿埌杈?JavaScript锛岃鏀圭敤 [**MoveFocus**](#movefocus)銆?
璇硶锛?object*.**SetFocus**

### SetVirtualHostNameToFolderMapping

灏嗚櫄鎷熶富鏈哄悕鏄犲皠鍒版湰鍦版枃浠跺す锛屼娇椤甸潰鍙互閫氳繃 HTTPS URL 寮曠敤鏈湴鏂囦欢 --- 渚嬪 `https://app.local/index.html` 瑙ｆ瀽涓?`C:\MyApp\html\index.html`銆傞€傜敤浜庡湪鏃犻渶鎼缓 HTTP 鏈嶅姟鍣ㄧ殑鎯呭喌涓嬫壙杞芥湰鍦拌祫婧愩€?
璇硶锛?object*.**SetVirtualHostNameToFolderMapping** *hostName*, *folderPath* [, *accessKind* ]

*hostName*
: *蹇呴渶* 涓€涓?**String** 铏氭嫙涓绘満鍚嶃€?
*folderPath*
: *蹇呴渶* 涓€涓?**String** 鏈湴鏂囦欢澶硅矾寰勩€?
*accessKind*
: *鍙€? [**wv2HostResourceAccessKind**](/official/Reference/WebView2/Enumerations/wv2HostResourceAccessKind) 鐨勬垚鍛樸€傞粯璁?**wv2ResourceAllow**銆?
::: info
璋ㄦ厧閫夋嫨 *hostName* --- 鏌愪簺鍙?DNS 瑙ｆ瀽鐨勪富鏈哄悕浼氬鑷?2 绉掔殑瑙ｆ瀽寤惰繜锛岀劧鍚庢湰鍦拌鐩栨墠浼氱敓鏁堛€傚弬瑙?[WebView2Feedback#2381](https://github.com/MicrosoftEdge/WebView2Feedback/issues/2381)銆?:::

闇€瑕?[**SupportsFolderMappingFeatures**](#supportsfoldermappingfeatures)銆?
```vb
Private Sub WebView21_Ready()
    Dim folderPath As String = Environ$("USERPROFILE") & "\Documents\MyApp"
    WebView21.SetVirtualHostNameToFolderMapping _
        "myapp.example", folderPath & "\", wv2ResourceAllow
    WebView21.Navigate "https://myapp.example/index.html"
End Sub
```

鍏充簬閫氳繃椤圭洰鐨?`Resources` 鏂囦欢澶规墦鍖呰祫婧愮殑鍖归厤妯″紡锛屽弬瑙乕鎵胯浇鏈湴 Web 璧勬簮](/official/Tutorials/WebView2/Hosting-local-web-assets)鏁欑▼銆?
### Suspend

鏆傚仠 WebView2 绠￠亾锛屼娇娴忚鍣ㄨ繘绋嬪彲浠ラ噴鏀惧唴瀛?--- 閫傜敤浜庡簲鐢ㄧ▼搴忓紡鐨勯€夐」鍗＄鐞嗐€備箣鍚庤鍙?[**IsSuspended**](#issuspended) 浠ョ‘璁わ紱杩愯鏃跺湪鏆傚仠鏈熼棿闅愯棌鎺т欢銆?
璇硶锛?object*.**Suspend**

闇€瑕?[**SupportsSuspendResumeFeatures**](#supportssuspendresumefeatures)銆?
### ZOrder

灏嗘帶浠剁疆浜庡悓绾у爢鏍堢殑鍓嶉潰鎴栧悗闈€傜户鎵裤€?
璇硶锛?object*.**ZOrder** [ *Position* ]

浜嬩欢
------

### AcceleratorKeyPressed

褰?Edge 妫€娴嬪埌鍔犻€熼敭鍑婚敭鏃惰Е鍙?--- 渚嬪 **F1**銆?*Alt+**銆?*Ctrl+**銆傚皢 *IsHandled* 璁句负 **True** 浠ユ秷璐瑰嚮閿紝浣?Edge 涓嶅鍏舵墽琛屾搷浣溿€傚缁堝悓姝ワ細鏃犳硶寤惰繜銆?
璇硶锛?object*\_**AcceleratorKeyPressed**( *KeyState* **As** [**wv2KeyEventKind**](/official/Reference/WebView2/Enumerations/wv2KeyEventKind), *IsExtendedKey* **As Boolean**, *WasKeyDown* **As Boolean**, *IsKeyReleased* **As Boolean**, *IsMenuKeyDown* **As Boolean**, *RepeatCount* **As Long**, *ScanCode* **As Long**, *IsHandled* **As Boolean** )

杩欎簺鏍囧織鏄?Win32 `WM_KEYDOWN` / `WM_KEYUP` *lParam* 鐨勫唴瀹?--- 璇﹁ [**COREWEBVIEW2_PHYSICAL_KEY_STATUS**](/official/Reference/WebView2/Types/COREWEBVIEW2_PHYSICAL_KEY_STATUS)銆?
### Create

鍦ㄥ鍣ㄧ獥鍙ｅ凡瀛樺湪浣?WebView2 鐜灏氭湭鏋勫缓涔嬪悗瑙﹀彂銆傚涓诲～鍏?[**EnvironmentOptions**](#environmentoptions) 鐨勬渶鍚庢満浼氥€?
璇硶锛?object*\_**Create**( )

### DevToolsProtocolResponse

鍏堝墠鍙戦€佺殑 [**CallDevToolsProtocolMethod**](#calldevtoolsprotocolmethod) 璋冪敤杩斿洖鏃惰Е鍙戙€傚寘鍚皟鐢ㄦ椂鎻愪緵鐨?*CustomEventId* 鍜?JSON 缂栫爜鐨勫搷搴斻€?
璇硶锛?object*\_**DevToolsProtocolResponse**( *CustomEventId* **As Variant**, *JsonResponse* **As String** )

### DocumentTitleChanged

鏂囨。鏇存敼鏍囬鏃惰Е鍙?--- 閫氬父鍦ㄥ鑸箣鍚庯紝涔熷湪瀹㈡埛绔?JavaScript 鍐欏叆 `document.title` 鏃躲€傝鍙?[**DocumentTitle**](#documenttitle) 鑾峰彇鏂板€笺€?
璇硶锛?object*\_**DocumentTitleChanged**( )

### DOMContentLoaded

椤甸潰鍒拌揪 `DOMContentLoaded` 鐢熷懡鍛ㄦ湡浜嬩欢鏃惰Е鍙?--- DOM 鏍戝凡鏋勫缓锛孞avaScript 鍙互瀹夊叏閬嶅巻锛屼絾澶栭儴璧勬簮鍙兘浠嶅湪鍔犺浇銆?
璇硶锛?object*\_**DOMContentLoaded**( )

### DownloadStarting

褰撶敤鎴凤紙鎴栭〉闈級寮€濮嬫枃浠朵笅杞芥椂瑙﹀彂銆傚皢 *Cancel* 璁句负 **True** 浠ュ彇娑堜笅杞斤紱灏?*Handled* 璁句负 **True** 浠ュ彇娑堣繍琛屾椂鐨勯粯璁や笅杞?UI锛屽綋搴旂敤绋嬪簭鎵撶畻鑷绠＄悊杩涘害鏃躲€備慨鏀?*ResultFilePath* 浠ュ皢涓嬭浇閲嶅畾鍚戝埌鍏朵粬璺緞銆傚彲浠ュ欢杩?--- 鍙傝[寤惰繜浜嬩欢](#deferred-events)銆?
璇硶锛?object*\_**DownloadStarting**( *ResultFilePath* **As String**, *Cancel* **As Boolean**, *Handled* **As Boolean** )

### Error

褰?WebView2 鐜鎴栨帶鍒跺櫒鍒濆鍖栧け璐ユ椂瑙﹀彂 --- 鏈€甯歌鐨勫師鍥犳槸鏈畨瑁?Edge WebView2 杩愯鏃躲€佺敤鎴锋暟鎹枃浠跺す涓嶅彲鍐欙紝鎴栧浐瀹氱増鏈枃浠跺す璺緞涓嶆纭€?
璇硶锛?object*\_**Error**( *code* **As Long**, *msg* **As String** )

::: info
浠ｇ爜 `&H80070002`锛坄ERROR_FILE_NOT_FOUND`锛夋槸 WebView2 Evergreen 杩愯鏃舵湭瀹夎鐨勫吀鍨嬩俊鍙?--- 鎻愮ず鐢ㄦ埛瀹夎鐨勯€傚綋鏃舵満銆?:::

```vb
Private Sub WebView21_Error(ByVal code As Long, ByVal msg As String)
    Const ERROR_FILE_NOT_FOUND As Long = &H80070002
    If code = ERROR_FILE_NOT_FOUND Then
        MsgBox "The WebView2 (Evergreen) runtime is not installed on this machine.", _
               vbExclamation, "WebView2"
    Else
        MsgBox "WebView2 error " & Hex$(code) & ": " & msg, _
               vbExclamation, "WebView2"
    End If
End Sub
```

### JsAsyncResult

鍏堝墠鐨?[**JsRunAsync**](#jsrunasync) 璋冪敤杩斿洖鏃惰Е鍙戙€?Token* 鏄?**JsRunAsync** 杩斿洖鐨勫€硷紝澶勭悊绋嬪簭鍙€熸灏嗗洖澶嶄笌璋冪敤閰嶅锛?ErrString* 涓鸿繍琛屾椂閿欒鎻忚堪锛屾垚鍔熸椂涓虹┖瀛楃涓层€?
璇硶锛?object*\_**JsAsyncResult**( *Result* **As Variant**, *Token* **As LongLong**, *ErrString* **As String** )

### JsMessage

褰撻〉闈笂鐨?JavaScript 璋冪敤 `window.chrome.webview.postMessage(value)` 鏃惰Е鍙戙€傞渶瑕?[**IsWebMessageEnabled**](#iswebmessageenabled)銆?
璇硶锛?object*\_**JsMessage**( *Message* **As Variant** )

### NavigationComplete

瀵艰埅瀹屾垚鏃惰Е鍙?--- 鏃犺鎴愬姛涓庡惁銆傚厛妫€鏌?*IsSuccess*锛涘鏋滀负 **False**锛?WebErrorStatus* 涓?[**wv2ErrorStatus**](/official/Reference/WebView2/Enumerations/wv2ErrorStatus) 鐨勬垚鍛樸€?
璇硶锛?object*\_**NavigationComplete**( *IsSuccess* **As Boolean**, *WebErrorStatus* **As Long** )

### NavigationStarting

姣忔瀵艰埅寮€濮嬩箣鍓嶈Е鍙戙€傚皢 *Cancel* 璁句负 **True** 浠ラ樆姝㈠鑸紱淇敼 *RequestHeaders* 浠ユ洿鏀硅繍琛屾椂鍗冲皢鍙戦€佺殑 HTTP 璇锋眰銆傚彲浠ュ欢杩?--- 鍙傝[寤惰繜浜嬩欢](#deferred-events)銆?
璇硶锛?object*\_**NavigationStarting**( *Uri* **As String**, *IsUserInitiated* **As Boolean**, *IsRedirected* **As Boolean**, *RequestHeaders* **As** [**WebView2RequestHeaders**](/official/Reference/WebView2/WebView2RequestHeaders), *Cancel* **As Boolean** )

```vb
' 闃绘浠讳綍瀵艰埅鍒版垜浠嚜宸辩殑铏氭嫙涓绘満涔嬪鐨?URL銆?Private Sub WebView21_NavigationStarting( _
        ByVal Uri As String, ByVal IsUserInitiated As Boolean, _
        ByVal IsRedirected As Boolean, _
        ByVal RequestHeaders As WebView2RequestHeaders, _
        Cancel As Boolean)
    If Not (Uri Like "https://myapp.example/*" Or Uri = "about:blank") Then
        MsgBox "External link blocked: " & Uri
        Cancel = True
    End If
End Sub
```

### NewWindowRequested

褰撻〉闈㈠皾璇曟墦寮€鏂扮獥鍙ｆ椂瑙﹀彂 --- 閫氳繃 `window.open(鈥?`銆乣target="_blank"`銆?*Ctrl+** 鐐瑰嚮绛夈€傚皢 *IsHandled* 璁句负 **True** 浠ュ彇娑堥粯璁よ涓猴紙鎵撳紑鏂扮殑 Edge 绐楀彛锛夛紝浣垮簲鐢ㄧ▼搴忓彲浠ヨ嚜琛屾壙杞芥柊鍐呭銆傜獥鍙ｅ姛鑳藉弬鏁版弿杩颁簡椤甸潰鐨勮姹傘€傚彲浠ュ欢杩?--- 鍙傝[寤惰繜浜嬩欢](#deferred-events)銆?
璇硶锛?object*\_**NewWindowRequested**( *IsUserInitiated* **As Boolean**, *IsHandled* **As Boolean**, *Uri* **As String**, *HasPosition* **As Long**, *HasSize* **As Long**, *Left* **As Long**, *Top* **As Long**, *Width* **As Long**, *Height* **As Long**, *ShouldDisplayMenuBar* **As Long**, *ShouldDisplayStatus* **As Long**, *ShouldDisplayToolbar* **As Long**, *ShouldDisplayScrollBars* **As Long** )

### PermissionRequested

褰撻〉闈㈣姹備娇鐢ㄨ澶囨垨娴忚鍣ㄥ姛鑳芥潈闄愭椂瑙﹀彂 --- 鎽勫儚澶淬€侀害鍏嬮銆佸湴鐞嗕綅缃€侀€氱煡銆佸壀璐存澘銆傚皢 *State* 璧嬪€间负 [**wv2StateAllow**](/official/Reference/WebView2/Enumerations/wv2PermissionState#wv2StateAllow)锛堝厑璁革級鎴?[**wv2StateDeny**](/official/Reference/WebView2/Enumerations/wv2PermissionState#wv2StateDeny)锛堟嫆缁濓級锛涗繚鎸?**wv2StateDefault** 璁?Edge 鎻愮ず鐢ㄦ埛銆傚彲浠ュ欢杩?--- 鍙傝[寤惰繜浜嬩欢](#deferred-events)銆?
璇硶锛?object*\_**PermissionRequested**( *IsUserInitiated* **As Boolean**, *State* **As** [**wv2PermissionState**](/official/Reference/WebView2/Enumerations/wv2PermissionState), *Uri* **As String**, *PermissionKind* **As** [**wv2PermissionKind**](/official/Reference/WebView2/Enumerations/wv2PermissionKind) )

### PrintToPdfCompleted

[**PrintToPdf**](#printtopdf) 鎴愬姛瀹屾垚鏃惰Е鍙戙€?
璇硶锛?object*\_**PrintToPdfCompleted**( )

### PrintToPdfFailed

[**PrintToPdf**](#printtopdf) 澶辫触鏃惰Е鍙?--- 渚嬪杈撳嚭璺緞涓嶅彲鍐欍€?
璇硶锛?object*\_**PrintToPdfFailed**( )

### ProcessFailed

褰?WebView2 鐨勬煇涓閮ㄨ繘绋嬶紙娴忚鍣ㄣ€佹覆鏌撳櫒銆丟PU 绛夛級鎰忓閫€鍑烘椂瑙﹀彂銆傛鏌?*Kind* --- 涓€涓?[**wv2ProcessFailedKind**](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) --- 浠ョ‘瀹氭槸鍝釜杩涚▼銆?
璇硶锛?object*\_**ProcessFailed**( *Kind* **As** [**wv2ProcessFailedKind**](/official/Reference/WebView2/Enumerations/wv2ProcessFailedKind) )

### Ready

褰?WebView2 鐜銆佹帶鍒跺櫒鍜屾牳蹇冭鍥惧潎宸插氨缁椂瑙﹀彂涓€娆°€傚湪姝や箣鍓嶏紝澶у鏁板睘鎬у拰鏂规硶浼氬紩鍙?WebView2 control is not ready"銆?
璇硶锛?object*\_**Ready**( )

### ScriptDialogOpening

褰撻〉闈㈠皾璇曟墦寮€鑴氭湰瀵硅瘽妗嗘椂瑙﹀彂 --- `alert()`銆乣confirm()`銆乣prompt()` 鎴?`beforeunload`銆備粎鍦?[**AreDefaultScriptDialogsEnabled**](#aredefaultscriptdialogsenabled) 涓?**False** 鏃惰Е鍙戙€傚皢 *Accept* 璁句负 **True** 浠ユ帴鍙楀璇濇锛堢浉褰撲簬 JavaScript 渚х偣鍑?纭畾*锛夛紱瀵逛簬鎻愮ず妗嗭紝鏇存柊 *ResultText* 涓鸿杩斿洖鐨勬枃鏈€傚彲浠ュ欢杩?--- 鍙傝[寤惰繜浜嬩欢](#deferred-events)銆?
璇硶锛?object*\_**ScriptDialogOpening**( *ScriptDialogKind* **As** [**wv2ScriptDialogKind**](/official/Reference/WebView2/Enumerations/wv2ScriptDialogKind), *Accept* **As Boolean**, *ResultText* **As String**, *URI* **As String**, *Message* **As String**, *DefaultText* **As String** )

### SourceChanged

褰?[**DocumentURL**](#documenturl) 鏇存敼鏃惰Е鍙?--- 閫氬父鍦ㄥ鑸箣鍚庯紝涔熷湪瀹㈡埛绔剼鏈皟鐢?`history.pushState(鈥?` 鏃躲€?IsNewDocument* 鍖哄垎鐪熸鐨勫鑸紙**True**锛夊拰鍚屾枃妗?URL 鏇存敼锛?*False**锛夈€?
璇硶锛?object*\_**SourceChanged**( *IsNewDocument* **As Boolean** )

### SuspendCompleted

褰?[**Suspend**](#suspend) 璇锋眰鎴愬姛瀹屾垚鏃惰Е鍙戙€?
璇硶锛?object*\_**SuspendCompleted**( )

### SuspendFailed

褰?[**Suspend**](#suspend) 璇锋眰澶辫触鏃惰Е鍙?--- 閫氬父鏄洜涓洪〉闈粛鍦ㄨ繘琛岃繍琛屾椂鏃犳硶鏆傚仠鐨勬搷浣溿€?
璇硶锛?object*\_**SuspendFailed**( )

### UserContextMenu

褰撶敤鎴峰湪鎺т欢鍐呭彸閿偣鍑讳笖 [**AreDefaultContextMenusEnabled**](#aredefaultcontextmenusenabled) 涓?**False** 鏃惰Е鍙戯紝浠ヤ究搴旂敤绋嬪簭鏄剧ず鑷畾涔変笂涓嬫枃鑿滃崟銆?
璇硶锛?object*\_**UserContextMenu**( *X* **As Single**, *Y* **As Single** )

### WebResourceRequested

褰撳緟澶勭悊鐨?HTTP 璇锋眰鍖归厤鍏堝墠閫氳繃 [**AddWebResourceRequestedFilter**](#addwebresourcerequestedfilter) 娉ㄥ唽鐨勮繃婊ゅ櫒鏃惰Е鍙戙€備慨鏀?*Response* 浠ユā鎷熸垨瑕嗙洊鍥炲锛涗繚鎸佷笉鍙樺垯璁╄繍琛屾椂姝ｅ父鑾峰彇銆傚彲浠ュ欢杩?--- 鍙傝[寤惰繜浜嬩欢](#deferred-events)銆?
璇硶锛?object*\_**WebResourceRequested**( *Request* **As** [**WebView2Request**](/official/Reference/WebView2/WebView2Request), *Response* **As** [**WebView2Response**](/official/Reference/WebView2/WebView2Response) )

## 鍙﹁

- [WebView2EnvironmentOptions](/official/Reference/WebView2/WebView2/EnvironmentOptions) --- 閫氳繃 [**EnvironmentOptions**](#environmentoptions) 璁块棶鐨勯鍒涘缓鐜閰嶇疆
- [WebView2 鏁欑▼](/official/Tutorials/WebView2/) --- 瀹夎銆侀噸鍏ュ拰 `UserDataFolder` 瀹炶返绀轰緥
- [vbWebView2](/official/Reference/VBRUN/Constants/ControlTypeConstants#vbWebView2) --- [**ControlType**](#controltype) 杩斿洖鐨?**ControlTypeConstants** 鏉＄洰