TodosThree.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    if (SC.instanceOf(TodosThree.store.dataSource, SC.FixturesDataSource)) {
      TodosThree.todosController.set('content', TodosThree.store.find(SC.Query.local(TodosThree.Todo, { orderBy: 'timestamp DESC' })));
      TodosThree.completedTodosController.set('content', TodosThree.store.find(SC.Query.local(TodosThree.Todo, 'isCompleted = true')));
		} else {
      this.gotoState('LOGGING_IN');
    }
  },
  
  didLoad: function () {
    if (TodosThree.todosController.get('status') === SC.Record.READY_CLEAN) {
      this.gotoState('SHOWING_APP');
    }
  }.stateObserves('TodosThree.todosController.status'),

  exitState: function() {
    // no-op
  }

});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos_three');