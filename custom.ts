
// register definitions
const AS7341_I2CADDR_DEFAULT    = 0x39 // AS7341 default i2c address
const AS7341_CHIP_ID            = 0x09 // AS7341 default device id from WHOAMI
const AS7341_WHOAMI             = 0x92 // Chip ID register
//const AS7341_ASTATUS            = 0x60 // AS7341_ASTATUS
//const AS7341_CH0_DATA_L         = 0x61 // AS7341_CH0_DATA_L  
//const AS7341_CH0_DATA_H         = 0x62 // AS7341_CH0_DATA_H  
const AS7341_ITIME_L            = 0x63 // AS7341_ITIME_L  
const AS7341_ITIME_M            = 0x64 // AS7341_ITIME_M  
const AS7341_ITIME_H            = 0x65 // AS7341_ITIME_H  
const AS7341_CONFIG             = 0x70 // Enables LED control and sets light sensing mode
const AS7341_STAT               = 0x71 // AS7341_STAT  
const AS7341_EDGE               = 0x72 // AS7341_EDGE  
const AS7341_GPIO               = 0x73 // Connects photo diode to GPIO or INT pins
const AS7341_LED                = 0x74 // LED Register; Enables and sets current limit
const AS7341_ENABLE             = 0x80 // Main enable register. Controls SMUX, Flicker Detection, Spectral Measurements and Power
const AS7341_ATIME              = 0x81 // Sets ADC integration step count
const AS7341_WTIME              = 0x83 // AS7341_WTIME  
const AS7341_SP_LOW_TH_L        = 0x84 // Spectral measurement Low Threshold low byte
const AS7341_SP_LOW_TH_H        = 0x85 // Spectral measurement Low Threshold high byte
const AS7341_SP_HIGH_TH_L       = 0x86 // Spectral measurement High Threshold low byte
const AS7341_SP_HIGH_TH_H       = 0x87 // Spectral measurement High Threshold low byte
const AS7341_AUXID              = 0x90 // AS7341_AUXID  
const AS7341_REVID              = 0x91 // AS7341_REVID  
const AS7341_ID                 = 0x92 // AS7341_ID  
const AS7341_STATUS             = 0x93 // Interrupt status registers. Indicates the occourance of an interrupt
const AS7341_ASTATUS            = 0x94    // AS7341_ASTATUS  
const AS7341_CH0_DATA_L         = 0x95 // ADC Channel Data
const AS7341_CH0_DATA_H         = 0x96 // ADC Channel Data
const AS7341_CH1_DATA_L         = 0x97 // ADC Channel Data
const AS7341_CH1_DATA_H         = 0x98 // ADC Channel Data
const AS7341_CH2_DATA_L         = 0x99 // ADC Channel Data
const AS7341_CH2_DATA_H         = 0x9A // ADC Channel Data
const AS7341_CH3_DATA_L         = 0x9B // ADC Channel Data
const AS7341_CH3_DATA_H         = 0x9C // ADC Channel Data
const AS7341_CH4_DATA_L         = 0x9D // ADC Channel Data
const AS7341_CH4_DATA_H         = 0x9E // ADC Channel Data
const AS7341_CH5_DATA_L         = 0x9F // ADC Channel Data
const AS7341_CH5_DATA_H         = 0xA0 // ADC Channel Data
const AS7341_STATUS2            = 0xA3 // Measurement status flags; saturation, validity
const AS7341_STATUS3            = 0xA4 // Spectral interrupt source, high or low threshold
const AS7341_STATUS5            = 0xA6 // AS7341_STATUS5  
const AS7341_STATUS6            = 0xA7 // AS7341_STATUS6  
const AS7341_CFG0               = 0xA9 // Sets Low power mode, Register bank, and Trigger lengthening
const AS7341_CFG1               = 0xAA // Controls ADC Gain
const AS7341_CFG3               = 0xAC // AS7341_CFG3  
const AS7341_CFG6               = 0xAF // Used to configure Smux
const AS7341_CFG8               = 0xB1 // AS7341_CFG8  
const AS7341_CFG9               = 0xB2 // Enables flicker detection and smux command completion system interrupts
const AS7341_CFG10              = 0xB3 // AS7341_CFG10  
const AS7341_CFG12              = 0xB5 // Spectral threshold channel for interrupts, persistence and auto-gain
const AS7341_PERS               = 0xBD // Number of measurement cycles outside thresholds to trigger an interupt
const AS7341_GPIO2              = 0xBE // GPIO Settings and status: polarity, direction, sets output, reads input
const AS7341_ASTEP_L            = 0xCA // Integration step size low byte
const AS7341_ASTEP_H            = 0xCB // Integration step size high byte
const AS7341_AGC_GAIN_MAX       = 0xCF // AS7341_AGC_GAIN_MAX  
const AS7341_AZ_CONFIG          = 0xD6 // AS7341_AZ_CONFIG  
const AS7341_FD_TIME1           = 0xD8 // Flicker detection integration time low byte
const AS7341_FD_TIME2           = 0xDA // Flicker detection gain and high nibble
const AS7341_FD_CFG0            = 0xD7 // AS7341_FD_CFG0  
const AS7341_FD_STATUS          = 0xDB // Flicker detection status; measurement valid, saturation, flicker type
const AS7341_INTENAB            = 0xF9 // Enables individual interrupt types
const AS7341_CONTROL            = 0xFA // Auto-zero, fifo clear, clear SAI active
const AS7341_FIFO_MAP           = 0xFC // AS7341_FIFO_MAP  
const AS7341_FIFO_LVL           = 0xFD // AS7341_FIFO_LVL  
const AS7341_FDATA_L            = 0xFE  // AS7341_FDATA_L  
const AS7341_FDATA_H            = 0xFF  // AS7341_FDATA_H  
//const AS7341_SPECTRAL_INT_HIGH_MSK = 0b00100000 // bitmask to check for a high threshold interrupt
//const AS7341_SPECTRAL_INT_LOW_MSK =  0b00010000 // bitmask to check for a low threshold interrupt

/** Gain values */
enum AS7341_GAIN {
    AS7341_GAIN_0_5X,
    AS7341_GAIN_1X,
    AS7341_GAIN_2X,
    AS7341_GAIN_4X,
    AS7341_GAIN_8X,
    AS7341_GAIN_16X,
    AS7341_GAIN_32X,
    AS7341_GAIN_64X,
    AS7341_GAIN_128X,
    AS7341_GAIN_256X,
    AS7341_GAIN_512X,
};

/** Available SMUX configuration commands */
enum AS7341_SMUX_CMD {
    AS7341_SMUX_CMD_ROM_RESET,  // ROM code initialization of SMUX
    AS7341_SMUX_CMD_READ,       // Read SMUX configuration to RAM from SMUX chain
    AS7341_SMUX_CMD_WRITE,      // Write SMUX configuration from RAM to SMUX chain
};

/** ADC Channel specifiers for configuration */
enum AS7341_ADC_CH {
    AS7341_ADC_CHANNEL_0,
    AS7341_ADC_CHANNEL_1,
    AS7341_ADC_CHANNEL_2,
    AS7341_ADC_CHANNEL_3,
    AS7341_ADC_CHANNEL_4,
    AS7341_ADC_CHANNEL_5,
};

/** Spectral Channel specifiers for configuration and reading */
enum AS7341_SPECTRAL_CH {
    AS7341_CHANNEL_415nm_F1,
    AS7341_CHANNEL_445nm_F2,
    AS7341_CHANNEL_480nm_F3,
    AS7341_CHANNEL_515nm_F4,
    AS7341_CHANNEL_CLEAR_0,
    AS7341_CHANNEL_NIR_0,
    AS7341_CHANNEL_555nm_F5,
    AS7341_CHANNEL_590nm_F6,
    AS7341_CHANNEL_630nm_F7,
    AS7341_CHANNEL_680nm_F8,
    AS7341_CHANNEL_CLEAR,
    AS7341_CHANNEL_NIR,
};

// /**
//  * @brief The number of measurement cycles with spectral data outside of a
//  * threshold required to trigger an interrupt
//  *
//  */
// typedef enum {
//     AS7341_INT_COUNT_ALL, // 0
//     AS7341_INT_COUNT_1,   // 1
//     AS7341_INT_COUNT_2,   // 2
//     AS7341_INT_COUNT_3,   // 3
//     AS7341_INT_COUNT_5,   // 4
//     AS7341_INT_COUNT_10,  // 5
//     AS7341_INT_COUNT_15,  // 6
//     AS7341_INT_COUNT_20,  // 7
//     AS7341_INT_COUNT_25,  // 8
//     AS7341_INT_COUNT_30,  // 9
//     AS7341_INT_COUNT_35,  // 10
//     AS7341_INT_COUNT_40,  // 11
//     AS7341_INT_COUNT_45,  // 12
//     AS7341_INT_COUNT_50,  // 13
//     AS7341_INT_COUNT_55,  // 14
//     AS7341_INT_COUNT_60,  // 15
// } as7341_int_cycle_count_t;

// /**
//  * @brief Pin directions to set how the GPIO pin is to be used
//  *
//  */
// typedef enum {
//     AS7341_GPIO_OUTPUT, // THhe GPIO pin is configured as an open drain output
//     AS7341_GPIO_INPUT,  // The GPIO Pin is set as a high-impedence input
// } as7341_gpio_dir_t;

// /**
//  * @brief Wait states for async reading
//  */
// typedef enum {
//     AS7341_WAITING_START, //
//     AS7341_WAITING_LOW,   //
//     AS7341_WAITING_HIGH,  //
//     AS7341_WAITING_DONE,  //
// } as7341_waiting_t;



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace AS7341 {

    /**
       Class that stores state and functions for interacting with
       the AS7341 11-Channel Spectral Sensor
    */
    export class AS7341 {
        // properties
        i2c: number;

        // constructur
        constructor(address: number){
            this.i2c = address;
        }  

        // methods

        /** Initializer */
        //% blockId="" 
        //% block="Initialize | %AS7341"
        //% weight=90 blockGap=8
        init(): boolean {
            pins.i2cWriteNumber(this.i2c, AS7341_WHOAMI, NumberFormat.UInt8BE,true);
            let chip_id = pins.i2cReadNumber(this.i2c,NumberFormat.UInt8BE,false);

            this.powerEnable(true);
            return chip_id >> 2 == AS7341_CHIP_ID; // check bits 2:7, discard 0:1   
        }

        /** Power ON/OFF */
        //% blockId="" 
        //% block="Power enable | %AS7341 | %enable_power"
        //% weight=90 blockGap=8
        powerEnable(enable_power: boolean): void {
            pins.i2cWriteNumber(this.i2c, AS7341_ENABLE, NumberFormat.UInt8BE, true);
            let enable_reg = pins.i2cReadBuffer(this.i2c, 1, false);
            let bfr = Buffer.create(2);
            bfr[0] = AS7341_ENABLE;
            // Power ON (pon) is the first (0th bit) 
            if (enable_power) {
                bfr[1] = 0x01;
            } else {
                bfr[1] = 0x00;
            }
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pins.i2cWriteNumber(this.i2c, AS7341_ENABLE, NumberFormat.UInt8BE, true);
            pause(20)
        }

        /** Disable all */
        //% blockId="" 
        //% block="Disable | %AS7341 "
        //% weight=90 blockGap=8
        disableAll(): void {
            let bfr = Buffer.create(2);
            bfr[0] = AS7341_ENABLE;
            bfr[1] = 0x00;
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
        }

        /** Enable spectral measurement */
        //% blockId="" 
        //% block="Enable spectral measurement | %AS7341| %spectra_enable"
        //% weight=90 blockGap=8
        enableSpectral(spectra_enable: boolean): void {
            pins.i2cWriteNumber(this.i2c, AS7341_ENABLE, NumberFormat.UInt8BE, true);
            let enable_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            if (spectra_enable) {
                enable_reg |= 1 << 1; // set fifth bit 
            } else {
                enable_reg &= ~(1 << 1); // clear fifth bit
            }
            
            let bfr = Buffer.create(2);
            bfr[0] = AS7341_ENABLE;
            bfr[1] = enable_reg;

            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
        }

        /** Enable SMUX */
        //% blockId="" 
        //% block="Enable SMUX | %AS7341 | %smux_enable"
        //% weight=90 blockGap=8
        enableSMUX(smux_enable: boolean): void {
            pins.i2cWriteNumber(this.i2c, AS7341_ENABLE, NumberFormat.UInt8BE, true);
            let enable_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            if (smux_enable) {
                enable_reg |= 1 << 4; // set fifth bit 
            } else {
                enable_reg &= ~(1 << 4); // clear fifth bit
            }

            let bfr = Buffer.create(2);
            bfr[0] = AS7341_ENABLE;
            bfr[1] = enable_reg;

            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
        }

        /** Enable flicker detection */
        //% blockId="" 
        //% block="Enable flicker detection | %AS7341 "
        //% weight=90 blockGap=8
        enableFlicker(): void {
            pins.i2cWriteNumber(this.i2c, AS7341_ENABLE, NumberFormat.UInt8BE, true);
            let enable_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            enable_reg |= 1 << 6; // set seventh bit 

            let bfr = Buffer.create(2);
            bfr[0] = AS7341_ENABLE;
            bfr[1] = enable_reg;

            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
        }

        setBank(val: boolean): void {
            pins.i2cWriteNumber(this.i2c, AS7341_CFG0, NumberFormat.UInt8BE, true);
            let cfg0_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);

            if (val) {
                cfg0_reg |= 1 << 4; // set fifth bit 
            } else {
                cfg0_reg &= ~(1 << 4); // clear fifth bit
            }

            let bfr = Buffer.create(2);
            bfr[0] = AS7341_CFG0;
            bfr[1] = cfg0_reg;
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
        }

        setSMUXLowChannels(f1_f4: boolean) {
            this.enableSpectral(false);
            this.setSMUXCommand(AS7341_SMUX_CMD.AS7341_SMUX_CMD_WRITE);
            if (f1_f4) {
                this.setup_F1F4_Clear_NIR();
            } else {
                this.setup_F5F8_Clear_NIR();
            }
            this.enableSMUX(true);
        }

        setSMUXCommand(cmd: AS7341_SMUX_CMD) {
            pins.i2cWriteNumber(this.i2c, AS7341_CFG6, NumberFormat.UInt8BE, true);
            let cfg6_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);

            // OD01.printNumber(1111)
            // OD01.printNumber(cfg6_reg)

            // reset fourth and fifth bits
            cfg6_reg &= ~0x18;
            // write new command
            cfg6_reg |= cmd<<3;
            // send to buffer
            let bfr = Buffer.create(2);
            bfr[0] = AS7341_CFG6;
            bfr[1] = cfg6_reg;
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)        

            // OD01.printNumber(cfg6_reg)
            // pins.i2cWriteNumber(this.i2c, AS7341_CFG6, NumberFormat.UInt8BE, true);
            // cfg6_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            // OD01.printNumber(cfg6_reg)

            // pause(10000)

        }

        writeRegister(byte_address: number, byte_value: number) {
           // OD01.printString("---")
          //  OD01.printNumber(byte_address)

           // pins.i2cWriteNumber(this.i2c, byte_address, NumberFormat.UInt8BE, false);
            //let val = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
           // OD01.printNumber(val)

            let bfr = Buffer.create(2);
            bfr[0] = byte_address;
            bfr[1] = byte_value;
            pins.i2cWriteBuffer(this.i2c,bfr,false)
           // pins.i2cWriteNumber(this.i2c, byte_address, NumberFormat.UInt8BE, false);
           // pins.i2cWriteNumber(this.i2c, byte_value, NumberFormat.UInt8BE, false);
           // pause(5000)

            //pins.i2cWriteNumber(this.i2c, byte_address, NumberFormat.UInt8BE, false);
            //val = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            //OD01.printNumber(val)
        }

        setup_F1F4_Clear_NIR() {
            // SMUX Config for F1,F2,F3,F4,NIR,Clear
            this.writeRegister(0x00, 0x30); // F3 left set to ADC2
            this.writeRegister(0x01, 0x01); // F1 left set to ADC0
            this.writeRegister(0x02, 0x00); // Reserved or disabled
            this.writeRegister(0x03, 0x00); // F8 left disabled
            this.writeRegister(0x04, 0x00); // F6 left disabled
            this.writeRegister(0x05, 0x42); // F4 left connected to ADC3/f2 left connected to ADC1
            this.writeRegister(0x06, 0x00); // F5 left disbled
            this.writeRegister(0x07, 0x00); // F7 left disbled
            this.writeRegister(0x08, 0x50); // CLEAR connected to ADC4
            this.writeRegister(0x09, 0x00); // F5 right disabled
            this.writeRegister(0x0A, 0x00); // F7 right disabled
            this.writeRegister(0x0B, 0x00); // Reserved or disabled
            this.writeRegister(0x0C, 0x20); // F2 right connected to ADC1
            this.writeRegister(0x0D, 0x04); // F4 right connected to ADC3
            this.writeRegister(0x0E, 0x00); // F6/F8 right disabled
            this.writeRegister(0x0F, 0x30); // F3 right connected to AD2
            this.writeRegister(0x10, 0x01); // F1 right connected to AD0
            this.writeRegister(0x11, 0x50); // CLEAR right connected to AD4
            this.writeRegister(0x12, 0x00); // Reserved or disabled
            this.writeRegister(0x13, 0x06); // NIR connected to ADC5
            }

        setup_F5F8_Clear_NIR() {
            // SMUX Config for F5,F6,F7,F8,NIR,Clear
            this.writeRegister(0x00, 0x00); // F3 left disable
            this.writeRegister(0x01, 0x00); // F1 left disable
            this.writeRegister(0x02, 0x00); // reserved/disable
            this.writeRegister(0x03, 0x40); // F8 left connected to ADC3
            this.writeRegister(0x04, 0x02); // F6 left connected to ADC1
            this.writeRegister(0x05, 0x00); // F4/ F2 disabled
            this.writeRegister(0x06, 0x10); // F5 left connected to ADC0
            this.writeRegister(0x07, 0x03); // F7 left connected to ADC2
            this.writeRegister(0x08, 0x50); // CLEAR Connected to ADC4
            this.writeRegister(0x09, 0x10); // F5 right connected to ADC0
            this.writeRegister(0x0A, 0x03); // F7 right connected to ADC2
            this.writeRegister(0x0B, 0x00); // Reserved or disabled
            this.writeRegister(0x0C, 0x00); // F2 right disabled
            this.writeRegister(0x0D, 0x00); // F4 right disabled
            this.writeRegister(0x0E, 0x24); // F8 right connected to ADC2/ F6 right connected to ADC1
            this.writeRegister(0x0F, 0x00); // F3 right disabled
            this.writeRegister(0x10, 0x00); // F1 right disabled
            this.writeRegister(0x11, 0x50); // CLEAR right connected to AD4
            this.writeRegister(0x12, 0x00); // Reserved or disabled
            this.writeRegister(0x13, 0x06); // NIR connected to ADC5
            
        }





    // PORTED BUT DOES NOT SEEM TO WORK!!!!
        /** Set LED ON/OFF */
        //% blockId="" 
        //% block="Set LED of | %AS7341 | to | %val "
        //% weight=90 blockGap=8
        setLED(val: boolean): void {
            // configure AS7341 to control LED state
            pins.i2cWriteNumber(this.i2c, AS7341_CONFIG, NumberFormat.UInt8BE, true);
            let config_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            let bfr = Buffer.create(2);
            bfr[0] = AS7341_CONFIG;
            bfr[1] = config_reg |= 1<<3; 
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)

            this.setBank(true);  // Access 0x60-0x74
            pins.i2cWriteNumber(this.i2c, AS7341_LED, NumberFormat.UInt8BE, true);
            let led_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            bfr[0] = AS7341_LED;
            if (val) {
                led_reg |= 1 << 7; // set 8th bit 

            } else {
                led_reg &= ~(1 << 7); // clear 8th bit
            }

            bfr[1] = led_reg;
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)

            this.setBank(false);  // Access registers 0x80 and above (reset to default)
        }

        /** Sets the integration time step count
         *  Total integration time will be `(ATIME + 1) * (ASTEP + 1) * 2.78µS
         */
        //% blockId="" 
        //% block="Set ATIME of | %AS7341 | to | %val "
        //% weight=90 blockGap=8
        setATIME(val: number){
            let bfr = Buffer.create(2);
            bfr[0] = AS7341_ATIME;
            bfr[1] = val;
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
        }

        /** Gets the integration time step count
         *  Total integration time will be `(ATIME + 1) * (ASTEP + 1) * 2.78µS
         */
        //% blockId="" 
        //% block="Get ATIME of | %AS7341 "
        //% weight=90 blockGap=8
        getATIME():number {
            pins.i2cWriteNumber(this.i2c, AS7341_ATIME, NumberFormat.UInt8BE, true);
            let val=pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            return val
        }

        /**Sets the integration time step size
        *  Total integration time will be `(ATIME + 1) * (ASTEP + 1) * 2.78µS
        */
        //% blockId="" 
        //% block="Set ASTEP of | %AS7341 | to | %val "
        //% weight=90 blockGap=8
        setASTEP(val: number) {
            let bfr = Buffer.create(3);
            bfr[0] = AS7341_ASTEP_L; // set 2x bytes to also fill ASTEP_H
            // need to handle low endiannes 
            bfr[1] = val & 0xFF; 
            bfr[2] = (val >> 8) & 0xFF;
           // bfr.fill(val,1,2)
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
            
        }

        /** Gets the integration time step size
         *  Total integration time will be `(ATIME + 1) * (ASTEP + 1) * 2.78µS
         */
        //% blockId="" 
        //% block="Get ASTEP of | %AS7341 "
        //% weight=90 blockGap=8
        getASTEP(): number {
            pins.i2cWriteNumber(this.i2c, AS7341_ASTEP_L, NumberFormat.UInt8BE, true);
            let bfr = pins.i2cReadBuffer(this.i2c, 2, false);
            return bfr.getNumber(NumberFormat.UInt16LE,0)
        }

        /** Sets ADC Gain */
        //% blockId="" 
        //% block="Set ADC Gain of | %AS7341 | to | %val "
        //% weight=90 blockGap=8
        setGain(val: AS7341_GAIN) {
            //pins.i2cWriteNumber(this.i2c, AS7341_CFG1, NumberFormat.UInt8BE, true);
            //let cfg1_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            let bfr = Buffer.create(1);
            bfr[0] = AS7341_CFG1;
            bfr[1] = val;
            pins.i2cWriteBuffer(this.i2c, bfr, false)
            pause(20)
        }
 
        /** Gets ADC Gain */
        //% blockId="" 
        //% block="Get ADC Gain of | %AS7341 "
        //% weight=90 blockGap=8
        getGain(): AS7341_GAIN {
            pins.i2cWriteNumber(this.i2c, AS7341_CFG1, NumberFormat.UInt8BE, true);
            let val = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            return val
        }

        /** Check if sensor completed measurement */
        //% blockId="" 
        //% block="Is data read? | %AS7341 "
        //% weight=90 blockGap=8
        getIsDataReady(): boolean {
            pins.i2cWriteNumber(this.i2c, AS7341_STATUS2, NumberFormat.UInt8BE, true);
            let status2_reg = pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false);
            return (status2_reg & 0x40)==64 // check 7th bit for AVALID
        }

        /** Read all channels */
        //% blockId="" 
        //% block="Read | %AS7341"
        //% weight=90 blockGap=8
        read() {
            this.setSMUXLowChannels(true);        // Configure SMUX to read low channels
            this.enableSpectral(true); // Start Measurement

            let c=0; // set timeout
            while (true) {
                c+=1;
                pause(20)
                if (this.getIsDataReady() || c>100) {
                    break;
                }
            }
            pins.i2cWriteNumber(this.i2c, AS7341_CH0_DATA_L,NumberFormat.UInt8BE, true);
            let bfr = pins.i2cReadBuffer(this.i2c, 12, false); // read 12 bytes
            let ch0 = bfr.getNumber(NumberFormat.UInt16LE, 0);
            let ch1 = bfr.getNumber(NumberFormat.UInt16LE, 2);
            let ch2 = bfr.getNumber(NumberFormat.UInt16LE, 4);
            let ch3 = bfr.getNumber(NumberFormat.UInt16LE, 6);
            let ch4 = bfr.getNumber(NumberFormat.UInt16LE, 8);
            let ch5 = bfr.getNumber(NumberFormat.UInt16LE, 10);
            OD01.showNumber(ch0, 0, 0)
            OD01.showNumber(ch1, 0, 1)
            OD01.showNumber(ch2, 0, 2)
            OD01.showNumber(ch3, 0, 3)
            OD01.showNumber(ch4, 0, 4)
            OD01.showNumber(ch5, 0, 5)

            this.setSMUXLowChannels(false);       // Configure SMUX to read high channels
            this.enableSpectral(true); // Start integration
            c = 0; // set timeout
            while (true) {
                c += 1;
                pause(20)
                if (this.getIsDataReady() || c > 100) {
                    break;
                }
            }
            pins.i2cWriteNumber(this.i2c, AS7341_CH0_DATA_L, NumberFormat.UInt8BE, true);
            let bfrb = pins.i2cReadBuffer(this.i2c, 12, false); // read 12 bytes
            let ch0b = bfrb.getNumber(NumberFormat.UInt16LE, 0);
            let ch1b = bfrb.getNumber(NumberFormat.UInt16LE, 2);
            let ch2b = bfrb.getNumber(NumberFormat.UInt16LE, 4);
            let ch3b = bfrb.getNumber(NumberFormat.UInt16LE, 6);
            let ch4b = bfrb.getNumber(NumberFormat.UInt16LE, 8);
            let ch5b = bfrb.getNumber(NumberFormat.UInt16LE, 10);
            OD01.showNumber(ch0b, 50, 0)
            OD01.showNumber(ch1b, 50, 1)
            OD01.showNumber(ch2b, 50, 2)
            OD01.showNumber(ch3b, 50, 3)
            OD01.showNumber(ch4b, 50, 4)
            OD01.showNumber(ch5b, 50, 5)

        }






    };










    //  export class AS7341 {
    //      // properties
    //     i2c: number;

    //     // constructur
    //     constructor(address: number){
    //         this.i2c = address;
    //     }  

    //      /** set integration time (ATIME + 1) * (ASTEP + 1) * 2.78µs */
    //      //% blockId="" 
    //      //% block="Set ATIME of sensor | %AS7341 | to | %atime_val"
    //      //% weight=90 blockGap=8
    //      setATIME(atime_val: number) {
    //          pins.i2cWriteNumber(this.i2c, 0x81, NumberFormat.UInt16BE, true);
    //          pins.i2cWriteNumber(this.i2c, atime_val, NumberFormat.UInt8BE, false)
    //      }
    //      /** Get integration time (ATIME + 1) * (ASTEP + 1) * 2.78µs */
    //      //% blockId="" 
    //      //% block="Get ATIME of sensor | %AS7341"
    //      //% weight=90 blockGap=8
    //      getATIME(): number {
    //          pins.i2cWriteNumber(this.i2c, 0x81, NumberFormat.UInt16BE, true);
    //          return pins.i2cReadNumber(this.i2c,  NumberFormat.UInt8BE, false)
    //      }

    //      /** set ASTEP integration value (ATIME + 1) * (ASTEP + 1) * 2.78µs */
    //      //% blockId="" 
    //      //% block="Set ASTEP of sensor | %AS7341 | to | %astep_val"
    //      //% weight=90 blockGap=8
    //      setASTEP(astep_val: number) {
    //          pins.i2cWriteNumber(this.i2c, 0x81, NumberFormat.UInt16BE, true);
    //          pins.i2cWriteNumber(this.i2c, astep_val, NumberFormat.UInt16BE, false)
    //      }

    //      /** Get ADC gain multiplier */
    //      //% blockId="" 
    //      //% block="Get ATIME of sensor | %AS7341"
    //      //% weight=90 blockGap=8
    //      getGain(): number {
    //          pins.i2cWriteNumber(this.i2c, 0xAA, NumberFormat.UInt8BE, true);
    //          return pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE, false)
    //      }


    //     //  /**
    //     //   * @brief Returns the ADC gain multiplier
    //     //   *
    //     //   * @return as7341_gain_t The current ADC gain multiplier
    //     //   */
    //     //  as7341_gain_t Adafruit_AS7341:: getGain() {
    //     //      Adafruit_BusIO_Register cfg1_reg =
    //     //          Adafruit_BusIO_Register(i2c_dev, AS7341_CFG1);
    //     //      return (as7341_gain_t)cfg1_reg.read();
    //     //  }


    //     /** who am I? */
    //     //% blockId="" 
    //     //% block="Read chipset | %AS7341"
    //     //% weight=90 blockGap=8
    //     getId(){
    //         pins.i2cWriteNumber(this.i2c, 0x92, NumberFormat.UInt8BE, true);
    //         return pins.i2cReadNumber(this.i2c, NumberFormat.UInt8BE,false);
    //     }


    //     //  bool Adafruit_AS7341:: setATIME(uint8_t atime_value) {
    //     //      Adafruit_BusIO_Register atime_reg =
    //     //          Adafruit_BusIO_Register(i2c_dev, AS7341_ATIME);
    //     //      return atime_reg.write(atime_value);
    //     //  }








    //      /** Read sensor value  */
    //     //% blockId="ob_read_sensor" 
    //     //% block="Read sensor | %Sensor"
    //     //% weight=90 blockGap=8
    //     getValue(){return 0};

    //  };

    // coding this one...@ae
    // CREATE OPTOFARM INSTANCE (custom sensor)
    //% blockId="" 
    //% block="Set AS7341 sensor  at I2C | %address | address"
    //% weight=100 blockGap=8
    //% blockSetVariable=OptoFarm
    //% inlineInputMode=inline
    export function NewAS7341(address: number) {
        let SensorId = new AS7341(address)
        return SensorId;
    };


}
