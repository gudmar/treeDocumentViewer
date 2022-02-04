# treeDocumentViewer

This is a short app in react, that displayes nested JS object documents. Documents should be in the form:

{
  title: '',
  description: '',
  content: [
    {
      title: '',
      description: '',
      content: [
      ...
      ]
    },
    {
          title: '',
      description: '',
      content: [
      ...
      ]

    }
  ]
}

Each nested document can be hidden,
the whole document may be filtered (title and description fields are filtered).

If future it is planned to allow editing the tree document and save it in the local storage or to the file

For now it is made to serve as a MTG cheet sheet