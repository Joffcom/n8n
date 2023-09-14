name: Bug report
description: Create a report to help us improve
title: '[Bug]: '
body:
  - type: textarea
    id: description
    attributes:
      label: Describe the bug
      description: A clear and concise description of the problem
    validations:
      required: true
  - type: textarea
    id: toReproduce
    attributes:
      label: To Reproduce
      description: provide steps to reproduce the problem
    validations:
      required: true
  - type: textarea
    id: exceptionOrError
    attributes:
      label: Exception or Error
      description: provide error logs
    validations:
      required: true
  - type: textarea
    id: expectedBehavior
    attributes:
      label: Expected Behavior
      description: A clear and concise description of what you expected to happen.
    validations:
      required: true
  - type: input
    id: os
    attributes:
      label: OS
      description: '[e.g. Ubuntu Linux 22.04]'
  - type: input
    id: n8nVersion
    attributes:
      label: n8n Version
      description: '[e.g. 1.0.1]'
    validations:
      required: true
  - type: input
    id: nodeVersion
    attributes:
      label: Node.js Version
      description: e.g 18.16.0
  - type: dropdown
    id: database
    attributes:
      label: Database
      description: e.g SQLite; n8n uses SQLite as default
      options:
        - SQLite
        - Postgres
        - MySQL
        - MariaDB
    validations:
      required: true
  - type: dropdown
    id: operationMode
    attributes:
      label: Operation Mode
      description: e.g. main
      options:
        - Main
        - Queue
        - Own
    validations:
      required: true
