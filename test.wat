(module
  (func (export "add") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add
  )
  (func (export "test") (param i32 i32 i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add
    local.get 2
    i32.add
    local.get 3
    i32.add
  )
  (func (export "sub") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.sub
  )
  (func (export "mul") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.mul
  )
  (func (export "div") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.div_s
  )
)