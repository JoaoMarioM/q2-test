import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { Modal, Platform, Text, View } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
  DateTimePickerAndroid
} from "@react-native-community/datetimepicker";
import format from "date-fns/format";

import { InputPickerProps, InputProps } from "./interface";
import {
  ButtonPicker,
  ButtonPickerText,
  Container,
  InputContainer,
  InputIconContainer,
  Label,
  PickerContainer,
  PickerHeader,
  ButtonPickerHeader,
  ButtonPickerHeaderText,
} from "./styles";

export const InputPicker = ({
  icon,
  iconFocus,
  label,
  mt,
  type,
  onChange,
}: InputPickerProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [valuePicker, setValuePicker] = useState<Date>(new Date());

  const handleChange = (_: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setValuePicker(date);
      onChange(date);
    }
  };

  const handleConfirm = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      setIsOpen(false);
    }
  }, []);

  const handleOpen = () => {
    if(Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: valuePicker,
        onChange: handleChange,
        mode: type,
        is24Hour: true,
      });

      return;
    }

    setIsOpen(true)
  };

  return (
    <View>
      <Container style={{ marginTop: mt ? mt : 0 }}>
        {label && <Label>{label}</Label>}

        <InputContainer isFocus={isFocus}>
          <InputIconContainer isFocus={isFocus}>
            {isFocus ? iconFocus : icon}
          </InputIconContainer>

          <ButtonPicker onPress={handleOpen}>
            <ButtonPickerText>
              {type === "date"
                ? format(valuePicker, "dd/MM/yyyy")
                : format(valuePicker, "HH:mm")}
            </ButtonPickerText>
          </ButtonPicker>
        </InputContainer>
      </Container>

      {Platform.OS ===
        "ios" && (
          <Modal
            animationType="slide"
            visible={isOpen}
            transparent={true}
            onRequestClose={() => setIsOpen(false)}
          >
            <PickerContainer>
              <PickerHeader>
                <ButtonPickerHeader isBlue onPress={handleConfirm}>
                  <ButtonPickerHeaderText>Fechar</ButtonPickerHeaderText>
                </ButtonPickerHeader>
              </PickerHeader>

              <DateTimePicker
                mode={type}
                value={valuePicker}
                minimumDate={new Date()}
                is24Hour={true}
                display={Platform.OS === "ios" ? "spinner" : "default"}
                textColor="#000"
                onChange={handleChange}
                locale="pt-BR"
              />
            </PickerContainer>
          </Modal>
        )}
    </View>
  );
};
