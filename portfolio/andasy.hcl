# andasy.hcl app configuration file generated for eloiportfolio on Wednesday, 25-Mar-26 23:39:13 EET
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "eloiportfolio"

app {

  env = {}

  port = 3000

  primary_region = "kgl"

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "eloiportfolio"
  }

}
