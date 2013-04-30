    TodosTwo.WelcomeView = SC.LabelView.extend({
      layout: { centerX: 0, centerY: 0, width: 300, height: 18 },
    	textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
      value: "Welcome to SproutCore!"
    });; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_two');