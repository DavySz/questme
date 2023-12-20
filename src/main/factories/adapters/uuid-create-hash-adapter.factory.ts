import { UuiCreateHashAdapter } from "@infra/hash";
import { CreateHash } from "@data/hash";

export function makeUuiCreateHashAdapter(): CreateHash {
  return new UuiCreateHashAdapter();
}
