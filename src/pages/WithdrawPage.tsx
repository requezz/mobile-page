import { Container, Stack, Typography } from "@mui/material";
import { Section } from "../components";
import { PaymentMethodTabs } from "../components";
import { AmountInput } from "../components";
import { RequisiteCard } from "../components";
import { EditableInput } from "../components";
import { SaveRequisitesCheckbox } from "../components";
import {
  REQUISITE_TYPES,
  REQUISITE_PLACEHOLDERS,
  TEXT_ALIGN,
} from "../constants";

export function WithdrawPage() {
  return (
    <Container maxWidth="xs">
      <Stack spacing={3} py={3}>
        <Section title="Способ вывода">
          <PaymentMethodTabs />
        </Section>

        <Section title="Объемы">
          <Stack direction={{ xs: "column", sm: "row" }} gap={0.5}>
            <AmountInput
              label="Отдаете (лот 1000)"
              currency="Ethereum, ETH"
              value="1 300.00000"
              align={TEXT_ALIGN.LEFT}
            />
            <AmountInput
              label="Получаете (лот 1000)"
              currency="Рубль, RUR"
              value="1 200.00"
              align={TEXT_ALIGN.RIGHT}
            />
          </Stack>
        </Section>

        <Stack spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6">Реквизиты</Typography>
            <SaveRequisitesCheckbox checked />
          </Stack>

          <RequisiteCard
            selectedValue={REQUISITE_TYPES.CARD}
            inputPlaceholder={REQUISITE_PLACEHOLDERS.CARD}
          />

          <EditableInput placeholder="ФИО владельца" />
          <EditableInput placeholder="Адрес" />
        </Stack>
      </Stack>
    </Container>
  );
}
