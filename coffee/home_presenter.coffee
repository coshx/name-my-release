class HomePresenter extends BasePresenter

  random: (list) ->
    i = Math.floor(Math.random() * (list.length))
    list[i]

  engineName: (value) ->
    name = value.trim()
    i = 0
    while i < name.length
      c = name[i]
      if c is '\s'
        name[i] = "-"
      else if c is c.toUpperCase() and i > 0
        name = name.substr(0, i) + "-" + name.substr(i, name.length)
        i++
      i++
    name.toLowerCase()

  generateName: () ->
    color = @engineName(@random(ColorList))
    animal = @engineName(@random(AnimalList))
    "#{color}-#{animal}"

  onCreate: () ->
    @releaseNameField = $('.js-release-name')

    @releaseNameField.text @generateName()

    $('.js-generate').on 'click', () => @releaseNameField.text @generateName()
