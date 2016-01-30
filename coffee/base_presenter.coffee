class BasePresenter
  constructor: () ->
    $(document).ready () => @onCreate()

  onCreate: () ->