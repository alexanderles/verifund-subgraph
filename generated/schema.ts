// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CampaignCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CampaignCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CampaignCreated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CampaignCreated", id.toString(), this);
    }
  }

  static load(id: string): CampaignCreated | null {
    return changetype<CampaignCreated | null>(store.get("CampaignCreated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get c(): Bytes {
    let value = this.get("c");
    return value!.toBytes();
  }

  set c(value: Bytes) {
    this.set("c", Value.fromBytes(value));
  }

  get targetAmount(): BigInt {
    let value = this.get("targetAmount");
    return value!.toBigInt();
  }

  set targetAmount(value: BigInt) {
    this.set("targetAmount", Value.fromBigInt(value));
  }
}
