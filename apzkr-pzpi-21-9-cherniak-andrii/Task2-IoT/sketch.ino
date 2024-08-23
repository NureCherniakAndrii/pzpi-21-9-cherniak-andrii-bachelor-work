#include <Keypad.h>
#include <LiquidCrystal_I2C.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <WiFi.h>

const uint8_t ROWS = 4;
const uint8_t COLS = 4;

const int barcodeLength = 13;
const String host = "https://my-server.loca.lt/api/product/byBarcode/";

int cursorRow = 0;
int cursorCol = 0;

char keys[ROWS][COLS] = {
  { '1', '2', '3', 'A' },
  { '4', '5', '6', 'B' },
  { '7', '8', '9', 'C' },
  { '*', '0', '#', 'D' }
};

uint8_t colPins[COLS] = { 12, 14, 13, 15 }; // Pins connected to C1, C2, C3, C4
uint8_t rowPins[ROWS] = { 2, 4, 5, 18 }; // Pins connected to R1, R2, R3, R4

Keypad keypad = Keypad(makeKeymap(keys), rowPins, colPins, ROWS, COLS);

LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(9600);

  lcd.init();
  lcd.backlight();

  WiFi.begin("Wokwi-GUEST", "");

}

HTTPClient http;
StaticJsonDocument<1024> doc;

// 4820024700016

String barcode = "";

void loop() {
  char key = keypad.getKey();
  

  if (key != NO_KEY) {
    Serial.println(key);

    lcd.setCursor(cursorCol, cursorRow);
    lcd.print(key);

    if(cursorCol < 15 && cursorRow < 2){
      cursorCol += 1;
    } else if(cursorCol >= 15 && cursorRow < 2){
      cursorRow += 1;
      cursorCol = 0;
    } else {
      lcd.clear();
      cursorRow = 0;
      cursorCol = 0;
    }

  }


  if(key) {

    barcode += key;

  }

  if(barcode.length() == barcodeLength) {
    lcd.clear();

    if(http.begin(host + barcode)){
      
      if(http.GET() > 0){
        DeserializationError error = deserializeJson(doc, http.getString());
        barcode = "";
        if(error){
          Serial.print("ERROR");
        } else {
          lcd.setCursor(0, 0);
          lcd.print(String(doc["name"].as<String>()));
          lcd.setCursor(0, 1);
          lcd.print("Count: " + String(doc["count"].as<String>()));
        }
      }

      http.end();
    }

    
  }




}