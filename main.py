pins.i2c_write_number(57, 146, NumberFormat.UINT8_BE, True)
OD01.print_number(pins.i2c_read_number(57, NumberFormat.UINT16_BE, False),
    True)

def on_forever():
    pass
basic.forever(on_forever)
