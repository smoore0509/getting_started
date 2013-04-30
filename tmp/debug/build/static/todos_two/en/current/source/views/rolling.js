    TodosTwo.RollingView = SC.LabelView.design({
      layout: { centerX: 0, centerY: 15, width: 300, height: 18 },
    	textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
      value: "Now we're rolling!",
      
      mouseDown: function(evt) {
        var someParam = "Woot!";
        
        TodosTwo.statechart.sendAction('proveIt', someParam);
      }
    });; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_two');