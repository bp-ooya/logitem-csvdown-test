﻿const iconExportCsv = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title></title><g id="Layer_23"><path d="M21,31H8a3,3,0,0,1-3-3V22a3,3,0,0,1,3-3H21a3,3,0,0,1,3,3v6A3,3,0,0,1,21,31ZM8,21a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V22a1,1,0,0,0-1-1Z"></path><path d="M25,16H15a1,1,0,0,1-.92-.62,1,1,0,0,1,.21-1.09l10-10a1,1,0,0,1,1.09-.21A1,1,0,0,1,26,5V15A1,1,0,0,1,25,16Zm-7.59-2H24V7.41Z"></path><path d="M10.78,27.29a2.49,2.49,0,0,1-2.55-2.55,2.48,2.48,0,0,1,2.55-2.55A2.61,2.61,0,0,1,12,22.5a2.32,2.32,0,0,1,.88.85l-.84.48a1.25,1.25,0,0,0-.51-.51,1.51,1.51,0,0,0-.76-.19,1.52,1.52,0,0,0-1.15.45,1.75,1.75,0,0,0,0,2.32,1.51,1.51,0,0,0,1.15.44,1.61,1.61,0,0,0,.76-.18,1.2,1.2,0,0,0,.51-.51l.84.48A2.32,2.32,0,0,1,12,27,2.44,2.44,0,0,1,10.78,27.29Z"></path><path d="M15.15,27.29A2.16,2.16,0,0,1,13.93,27a1.69,1.69,0,0,1-.7-.88l.82-.48a1.12,1.12,0,0,0,1.13.74,1,1,0,0,0,.6-.14.47.47,0,0,0,.19-.37.45.45,0,0,0-.24-.41,3.53,3.53,0,0,0-.82-.31,5.15,5.15,0,0,1-.56-.19,2.68,2.68,0,0,1-.45-.27,1.07,1.07,0,0,1-.35-.41,1.38,1.38,0,0,1-.12-.59,1.32,1.32,0,0,1,.47-1.06,1.76,1.76,0,0,1,1.14-.4,1.92,1.92,0,0,1,1.05.29,2,2,0,0,1,.7.81l-.81.47a1,1,0,0,0-.94-.63.73.73,0,0,0-.47.14.44.44,0,0,0-.17.35.45.45,0,0,0,.19.38,2.77,2.77,0,0,0,.74.31l.34.11.31.11a1.72,1.72,0,0,1,.31.16,1.51,1.51,0,0,1,.25.18.93.93,0,0,1,.21.25,1.42,1.42,0,0,1,.13.3,1.6,1.6,0,0,1,.05.39,1.31,1.31,0,0,1-.49,1.08A2,2,0,0,1,15.15,27.29Z"></path><path d="M18.63,27.19,17,22.29H18l1.2,3.77,1.19-3.77h1.05l-1.65,4.9Z"></path><path d="M40,43H33.43a1,1,0,0,1,0-2H40a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H25.41L16,15.41V20a1,1,0,0,1-2,0V15a1,1,0,0,1,.29-.71l10-10A1,1,0,0,1,25,4H40a3,3,0,0,1,3,3V40A3,3,0,0,1,40,43Z"></path><path d="M30.57,43H17a3,3,0,0,1-3-3V30a1,1,0,0,1,2,0V40a1,1,0,0,0,1,1H30.57a1,1,0,0,1,0,2Z"></path><path d="M32,45a1,1,0,0,1-.81-.42l-5-7A1,1,0,0,1,27,36h1V31a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v5h1a1,1,0,0,1,.81,1.58l-5,7A1,1,0,0,1,32,45Zm-3.06-7L32,42.28,35.06,38H35a1,1,0,0,1-1-1V32H30v5a1,1,0,0,1-1,1Z"></path></g></svg>'
const iconCardBatch = '<svg id="Layer_1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#231f20;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title></title><rect class="cls-1" height="25" width="38" x="1" y="7"></rect><polyline class="cls-1" points="39 17 47 17 47 42 9 42 9 32"></polyline><line class="cls-1" x1="10" x2="30" y1="17" y2="17"></line><line class="cls-1" x1="10" x2="30" y1="23" y2="23"></line></svg'


miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
//      bottomBar: {
//        title: 'ｶｰﾄﾞ一括登録',
//        svgIcon: iconCardBatch, 
//        positionPriority: 1,
//        onClick: async () => {
//	 	    await miro.board.ui.openModal('createstickerBatch.html', { width: 300, height: 200 });
//        }
//      },  
      toolbar: {
        title: 'CSVﾀﾞｳﾝﾛｰﾄﾞ',
        toolbarSvgIcon: iconExportCsv, 
        librarySvgIcon: iconExportCsv, 
        positionPriority: 2,
        onClick: async () => {

          const client_id = '3074457361560843499';        // MetaData読み込み用

          const frameclass = class{
            constructor(name, x1, x2, y1, y2){
              this.name = name;
              this.x1 = x1;
              this.x2 = x2;
              this.y1 = y1;
              this.y2 = y2;
  //            this.comment = comment;
            }
          }

          var frames = [];
        
          // 全エリアFrameオブジェクトの取得
          let allFrames = await miro.board.widgets.get({type: 'Frame'});
          
//          // 全Stickerオブジェクトの取得(エリア上に配置されている備考)
//          let allStickers = await miro.board.widgets.get({type: 'Sticker'});

          // クラス配列に追加
          allFrames.forEach(frame => {
          
			var x1 = frame.bounds.x - frame.bounds.width/2;
            var x2 = frame.bounds.x + frame.bounds.width/2;
			var y1 = frame.bounds.y - frame.bounds.height/2;
			var y2 = frame.bounds.y + frame.bounds.height/2;
          
          	var comment = "";
//          	// Frame内に備考Stickerが存在するか確認
//          	allStickers.forEach(sticker => {
//                if(sticker.x >= x1 && sticker.x <= x2 && sticker.y >= y1 && sticker.y <= y2){
//                	comment = sticker.plainText;
//                }
//          	});

            frames.push(new frameclass(frame.title, x1, x2, y1, y2));
          });

          frames = frames.filter(frame=> frame.name.indexOf('出勤者') === -1);

          // 全イメージオブジェクトの取得
          let allCards = await miro.board.widgets.get({type: 'IMAGE'});

          //ファイル名(Out_yyyymmdd.csv)
          var d = new Date();
          var formatted = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + (d.getDate())).slice(-2) + "_" + ('0' + (d.getHours())).slice(-2)  + ('0' + (d.getMinutes())).slice(-2)  + ('0' + (d.getSeconds())).slice(-2) ;
          const fileName = "Out_" + formatted + '.csv';
          
          var csvData = "";

          allCards.forEach(card => {
            var areaName = "";

            var tojson = JSON.stringify(card.metadata);
            var fromjson = JSON.parse(tojson);

            if(([client_id] in fromjson) && ('staffid' in fromjson[client_id])){
              var staffid = fromjson[client_id]['staffid'];
              // カードがエリアFrameの範囲内に入っていたら出力する
              for(let i=0; i< frames.length; i++){
              	var frame = frames[i];
                if(card.x >= frame.x1 && card.x <= frame.x2 && card.y >= frame.y1 && card.y <= frame.y2){
                  areaName = frame.name;
                  csvData+= staffid + "," + frame.name + "\n";
                  break;
                }
              }
            }

          });
          
          // 周知事項Frame内のオブジェクトを取得
		  let notificationfrs = allFrames.filter(frame=> frame.title.indexOf('周知事項') != -1);
            		  
  		  for(var i=0; i<notificationfrs.length; i++){
  		  	
  		  		var frame = notificationfrs[i];
				var widgets = frame.childrenIds;
				var strCsv = "*" + frame.title;
				
				for(var j=0; j< widgets.length; j++){
					let childwidget = await miro.board.widgets.get({id: widgets[j]});
					var widgettext = childwidget[0].plainText;
					if( widgettext != null){
						strCsv = strCsv + "," + widgettext;
					}
				}
				// CSV出力
				csvData += strCsv + "\n";
		 }
  		 

          // CSVダウンロード
          const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
          const blob = new Blob([bom, csvData], { type: "text/csv" });
          const url = (window.URL || window.webkitURL).createObjectURL(blob);
          const download = document.createElement("a");
          download.href = url;
          download.download = fileName;
          download.click();
          //createObjectURLで作成したオブジェクトURLを開放する
          (window.URL || window.webkitURL).revokeObjectURL(url);

	        // Show success message
	         miro.showNotification('Exportが正常に完了しました。')  
			
		  }

      }
    }
  })  
})

