class HomePresenter extends BasePresenter

  random: (list) ->
    i = Math.floor(Math.random() * (list.length))
    list[i]

  engineName: (value) ->
    trimmedValue = value.trim()
    outcome = ""

    for i in [0...trimmedValue.length]
      c = trimmedValue[i]

      if c is " "
        outcome += "-"
      else if c is c.toUpperCase() and i > 0 and trimmedValue[i - 1] != " "
        outcome += "-" + c.toLowerCase()
      else
        outcome += c.toLowerCase()

    outcome

  generateName: () ->
    color = @engineName(@random(ColorList))
    animal = @engineName(@random(AnimalList))
    "#{color}-#{animal}"

  onCreate: () ->
    super

    @releaseNameField = $('.js-release-name')
    @clipboardAction = new Clipboard('.js-clipboard-action')

    @releaseNameField.text @generateName()

    $('.js-generate').on 'click', () => @releaseNameField.text @generateName()
