import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Counterapp } from "../target/types/counterapp";

describe("counterapp", () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.Counterapp as Program<Counterapp>;
  const counterAccount = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {
    await program.methods
      .create()
      .accounts({
        counterAccount: counterAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([counterAccount])
      .rpc();
  });

  it("Increment counter", async () => {
    await program.methods
      .increment()
      .accounts({
        counterAccount: counterAccount.publicKey,
      })
      .rpc();
  });

  it("Fetch account", async () => {
    const account: any = await program.account.counterAccount.fetch(
      counterAccount.publicKey
    );
    console.log(account.count);
  });
});
