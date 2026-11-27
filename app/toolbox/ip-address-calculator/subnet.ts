import { Address4, Address6 } from "ip-address";

export function calculateSubnet(input: string) {
    const cidr = input.trim();
    if (!/^[a-f\d:.]+\/(0|[1-9]\d{0,2})$/i.test(cidr)) return null;

    const Address = cidr.includes(":") ? Address6 : Address4;
    if (!Address.isValid(cidr)) return null;
    const address = new Address(cidr);
    const start = address.startAddress();
    const mask = address.subnetMaskAddress();
    const last = address.endAddress().bigInt() - start.bigInt();
    const size = last + 1n;
    const inputOffset = address.bigInt() - start.bigInt();
    const offsets =
        size <= 8n
            ? Array.from({ length: Number(size) }, (_, i) => BigInt(i))
            : [...new Set([0n, 1n, inputOffset, last - 1n, last])].sort(
                  (a, b) => (a < b ? -1 : a > b ? 1 : 0),
              );

    return {
        prefix: address.networkForm(),
        mask: mask.correctForm(),
        size,
        previous:
            start.bigInt() === 0n ? null : address.offset(-size).networkForm(),
        // The final subnet starts at the mask (all prefix bits set).
        next:
            start.bigInt() === mask.bigInt()
                ? null
                : address.nextNetwork().networkForm(),
        rows: offsets.map((offset) => {
            let label;
            if (size === 1n) label = "単一ホスト";
            else if (size === 2n)
                label = offset === 0n ? "先頭 / P2P 端点" : "末尾 / P2P 端点";
            else if (offset === 0n) label = "ネットワーク";
            else if (offset === last)
                label =
                    address instanceof Address6
                        ? "末尾アドレス"
                        : "ブロードキャスト";
            else if (address instanceof Address4 && offset === 1n)
                label = "最初のホスト";
            else if (address instanceof Address4 && offset === last - 1n)
                label = "最後のホスト";
            else label = "ホスト";
            return {
                offset,
                label,
                selected: offset === inputOffset,
                address: start.offset(offset).correctForm(),
            };
        }),
    };
}
