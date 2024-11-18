import Link from "next/link";
import React from "react";

const page = () => {
  const contact = [
    {
      title: "Email",
      description: "contact@NestPay.com",
    },
    {
      title: "Messaging",
      description:
        "You can send NestPay a message via the customer support function on the app",
    },
    {
      title: "Telephone",
      description: "+44 7901258881.",
    },
  ];
  const info = [
    {
      title: "Post",
      description:
        "using the address which NestPay holds for you which is set out on the profile section of the app.",
    },
    {
      title: "Call you or send a message to you",
      description:
        "using the telephone number NestPay holds for you which is set out on the profile section of the app.",
    },
    {
      title: "Email",
      description:
        "using the email address NestPay holds for you which is set out on the profile section of the app.",
    },
    {
      title: "Messaging",
      description:
        "using the WhatsApp app or another secure messaging app as designated by NestPay",
    },
    {
      title: "In the event of security threats or fraud",
      description:
        "We will contact you (provided NestPay is not prohibited from doing so by law) via one or a combination of the communication methods set out in this table",
    },
  ];

  const features = [
    {
      key: "(a)",
      description: "Upload money into your wallet.",
    },
    {
      key: "(b)",
      description:
        "Interact with Pagatech in relation to your NGN wallet - please see section 4.2 for more information.",
    },
    {
      key: "(c)",
      description: "Receive money from your family / friends into your wallet.",
    },
    {
      key: "(d)",
      description:
        "Exchange money in your wallet for money in other currencies.",
    },
    {
      key: "(e)",
      description:
        "Send money, in various currencies, to wallets belonging to other persons (for example your friends and family).",
    },
    {
      key: "(f)",
      description:
        "Send money, in various currencies, to payment accounts which are not wallets (for example payment accounts belonging to your friends and family which live overseas).",
    },
    {
      key: "(g)",
      description: "View the balance of your wallets on the NestPay app.",
    },
    {
      key: "(h)",
      description:
        "See foreign exchange transactions that you have entered into with NestPay via the app.",
    },
    {
      key: "(i)",
      description:
        "See payments that you have executed from your wallet(s) via the app.",
    },
    {
      key: "(j)",
      description:
        "Send and receive payments within the United Kingdom using the Faster Payment System.",
    },
  ];

  const definitions = [
    {
      key: "(a)",
      definition: `‘app’ means the "NestPay Finance" mobile application, which is available on Google Play and the App Store.`,
    },
    {
      key: "(b)",
      definition: `“APP Fraud” means Authorised Push Payment Fraud, which might arise if you are tricked into sending money to a fraudster or a fraudulent business unbeknown to you at the time of initiating a transaction.`,
    },
    {
      key: "(c)",
      definition: `‘beneficiary’ means the person who will receive money, if you execute a payment using the app.`,
    },
    {
      key: "(d)",
      definition: `‘beneficiary account’ is the wallet or payment account belonging to the beneficiary.`,
    },
    {
      key: "(e)",
      definition: `‘electronic money’ means an electronic alternative to money. By way of explanation, when you send NestPay money, NestPay will credit your wallet. The balance of your wallet(s) will be backed by an equivalent amount of money which NestPay holds in its safeguarded accounts. The value in your wallet(s) is technically referred to as “electronic money.”`,
    },
    {
      key: "(f)",
      definition: `‘money’ - when ‘money’ is referred to in these terms, this refers to money (as you would normally understand it) and electronic money stored in your wallet.`,
    },
    {
      key: "(g)",
      definition: `“payment” means us sending money from your wallet (other than an NGN wallet - please see section 4.2 for more information) to another wallet or to a non-wallet payment account.`,
    },
    {
      key: "(h)",
      definition: `‘payment account’ means any type of account that can hold money, including a bank account and an electronic money account.`,
    },
    {
      key: "(i)",
      definition: `‘wallet’ means an electronic money account with NestPay.`,
    },
  ];

  return (
    <div className="bg-white  pt-5  text-gray-800">
      <div className="container mx-auto">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Terms of Service
        </h1>

        <section className="mb-8">
          {/* <h2 className="text-2xl font-bold mb-4">Introduction</h2> */}
          <p className="text-lg font-bold mb-8">
            1 Introduction to NestPay, information on how to contact NestPay and
            on how NestPay will contact you
          </p>
          <p className="mt-8 font-medium">
            1.1 When the word “NestPay” is used in these terms, Nestpay Digital
            Limited (“Nestpay”, "we", “us”, “our” and “ours”) is a digital
            wealth management and payment application geared towards improving
            the financial well being of its users through carefully curated
            features . We are registered in England and Wales as a company under
            number 14911087, and our registered office is at Nestpay Limited 128
            City Road, London. NestPay operates the website at{" "}
            <Link href="https://www.nestpay.co" className="text-blue-500">
              www.nestpay.co
            </Link>
          </p>

          <p className="my-8 font-medium">1.2 How you can contact NestPay:</p>
        </section>

        <section className="space-y-8">
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <tbody>
              {contact.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    {item.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <ul className="flex flex-col gap-y-6  lg:mx-0">
            {contact.map((item, index) => (
              <li key={index} className="flex  justify-start gap-2">
                <span className="font-bold">{item.title}:</span>
                <span className="">{item.description}</span>
              </li>
            ))}
          </ul> */}
          <p className="">
            You can call us between the hours of 8:00 a.m. to 8:00 p.m., UK
            time, seven days a week. You can contact us via email or via the
            customer support function on the app at any time.
          </p>

          <p className="font-medium">
            1.3 NestPay is authorised by the Financial Conduct Authority under
            the Electronic Money Regulations 2011 (register reference 14911087)
            for the issuing of electronic money.
          </p>

          <p className="font-medium">
            1.4 “you” and “your” in these terms means you, being the individual
            that wishes to use NestPay’s services and has therefore agreed to
            these terms and satisfied NestPay’s onboarding requirements. Please
            note that you must be over 18 to use NestPay’s services.
          </p>

          <p className="font-medium">1.5 How NestPay can contact you:</p>

          <p className="">
            NestPay shall contact you using the methods set out below. It is
            your sole responsibility to keep your contact details up to date
            with NestPay. You can update your details by sending customer
            support a message via the app or by telephone or email
          </p>

          {/* <ul className="flex flex-col gap-y-6  lg:mx-0">
            {info.map((item, index) => (
              <li key={index} className="flex flex-col justify-start gap-2">
                <span className="font-bold">{item.title}</span>
                <span className="capitalize">{item.description}</span>
              </li>
            ))}
          </ul> */}

          <table className="table-auto border-collapse border border-gray-300 w-full">
            <tbody>
              {info.map((item, index) => (
                <tr key={index} className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    {item.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 capitalize">
                    {item.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="space-y-8 mt-8">
          <p className="text-lg font-bold mb-8">
            2 Main characteristics of NestPay’s service
          </p>

          <p className="font-medium">2.1 NestPay’s services allow you to</p>

          <ul className="list-disc pl-8 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-bold">{feature.key}</span>
                <span>{feature.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-5 mt-8">
          <p className="text-lg font-bold mb-8 ">
            3. Information on these terms
          </p>

          <p className="">
            We have drafted these terms in a question and answer format so that
            they are easy to read and understand. However, if you have any
            queries at all, please do not hesitate to get in touch with customer
            support.
          </p>

          <p className="font-medium">3.1 Why should you read these terms?</p>

          <p className="">
            Services NestPay can provide to you. They explain your
            responsibilities to NestPay and NestPay’s responsibilities to you,
            how and when these terms can be terminated and the extent of
            NestPay’s liability to you
          </p>

          <p className="font-medium">3.2 How do you accept these terms?</p>
          <p className="">
            You can accept these terms by ticking the relevant box online when
            you register with NestPay, or by otherwise agreeing to these terms
            on the app.
          </p>

          <p className="font-medium">
            3.3 When do these terms come into force and when do they end?
          </p>
          <p className="">
            These terms come into force when you have accepted them and we have
            onboarded you as our client, or as otherwise advised, and shall
            remain in force until terminated.
          </p>

          <p className="font-medium">3.4 How can these terms be terminated?</p>
          <p className="">
            You can terminate these terms immediately at any time by contacting
            NestPay’s support team using one of the methods set out in section
            1.2. We can terminate these terms at any time by providing you with
            2 months’ notice using one of the methods set out in section 1.5.
            NestPay can also close or suspend your access to the app in
            accordance with section 9.
          </p>

          <p className="font-medium">
            3.5 What happens when these terms are terminated?
          </p>
          <p>
            Among other things, you will no longer be a client of NestPay and
            will therefore be unable to use the app. Accordingly, it is your
            sole responsibility to ensure that there is no money in any of your
            wallets prior to terminating these terms and closing your account.
            For 6 years after these terms are terminated, you will be able to
            contact NestPay by email to ask NestPay to send money in your
            wallets to a payment account belonging to you. During this period,
            NestPay may deduct money from your wallet to pay money you owe to
            NestPay.
          </p>
          <p className="font-medium">
            3.6 On agreeing to these terms and onboarding you as a client, what
            are NestPay’s obligations to you?
          </p>
          <p>NestPay will:</p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>provide you with access to the app</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                provide you with one or more wallets for you to store money in;
                and
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(c)</span>
              <span>
                make NestPay’s customer service team available to you.
              </span>
            </li>
          </ul>

          <p className="font-medium">
            3.7 On agreeing to these terms, what are your obligations to
            NestPay?
          </p>
          <p>
            By accepting these terms, you agree to abide by these terms and pay
            NestPay the fees.
          </p>

          <p className="font-medium">
            3.8 Are there any words used in these terms which might need further
            explanation?
          </p>
          <p>Yes. The following words have the following meaning:</p>

          <ul className="list-disc pl-8 space-y-2">
            {definitions.map((feature, index) => (
              <li key={index} className="flex gap-2">
                <span className="font-bold">{feature.key}</span>
                <span>{feature.definition}</span>
              </li>
            ))}
          </ul>

          <p className="font-medium">
            3.9 Is there anything else you should be aware of when reading these
            terms?
          </p>
          <p className="">Yes:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>
                {" "}
                these terms are concluded in English. If you are reading a
                non-English version, please note that this is provided for
                reference only and that the English version is the version which
                applies;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                {" "}
                when reference is made to a business day, this means a day other
                than a Saturday, Sunday or a bank holiday in England.
              </span>
            </li>
          </ul>
        </section>

        <section className="space-y-5 mt-8">
          <p className="text-lg font-bold mb-8">4. Information on wallets</p>
          <p className="font-medium">4.1 What are wallets? </p>

          <p>
            Your wallets are your electronic money accounts with NestPay within
            which you can hold money. At the time of writing these terms,
            NestPay can provide you with a wallet in GBP. As NestPay’s service
            develops, NestPay will seek to offer you wallets in other
            currencies. A reference to wallets in these terms means your
            wallets, held with NestPay.
          </p>

          <p className="font-medium">
            4.3 What can you use the money in your wallet for?
          </p>
          <p>
            Once you have money in one of your wallets, you will be able to:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>
                exchange money from one currency to another by transferring
                money from a wallet you hold in one currency to a wallet you
                hold in a different currency;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                send money to persons, other than you, which hold a wallet with
                NestPay;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(c)</span>
              <span>
                send money in various currencies to payment accounts located in
                the UK and other countries that NestPay allows you to send money
                to, the details of which are specified on the app (and are
                subject to change from time to time but at the time of writing
                include Nigeria, Kenya, Ghana, Senegal, Ivory Coast, Cameroon,
                Benin, Tanzania, Uganda and Rwanda), India, Pakistan, China.
              </span>
            </li>
          </ul>

          <p className="font-medium">
            4.4 How does your wallet differ from a bank account?
          </p>
          <p>
            Your wallet differs from a bank account in that money in your
            wallet:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>will not be invested or lent to third parties;</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>will not accrue interest; and</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(c)</span>
              <span>
                will be safeguarded in accordance with section 5, but will not
                be covered by the Financial Services Compensation Scheme.
              </span>
            </li>
          </ul>

          <p className="font-medium">
            4.5 How do you add money to your wallet?
          </p>
          <p>You can add money to your wallet:</p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>
                by utilising instant bank transfer, from within the app, whereby
                the app connects to your own bank (using a third party payment
                initiation service provider) and allows you to instruct your
                bank to send money directly to your desired wallet;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                by sending money from your bank account (by placing a payment
                order with your bank using a method otherwise than through the
                app) to your wallet using the IBAN linked to your wallet;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(c)</span>
              <span>
                by sending money from your bank account using NestPay’s sort
                code, account number and your reference number;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(d)</span>
              <span>
                via debit card, by entering your card details on the app; or
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(e)</span>
              <span>
                by using Apple Pay, Google Pay and Samsung Pay on the app. You
                cannot add money to your wallet by using cash
              </span>
            </li>
          </ul>

          <p className="font-medium">
            4.6 Are there limits on how much money you can send and exchange
            using the app?
          </p>
          <p>
            Yes, these limits are set out in the app. If you have any queries on
            these limits or would like to ask to change them, please contact
            customer support.
          </p>

          <p className="font-medium">
            4.7 Are you able to set spending limits on the app?
          </p>
          <p>No, only NestPay is able to set spending limits.</p>
          <p className="font-medium">
            4.8 How long will it take for the money to be added to your wallet?
          </p>
          <p>This depends on the payment method used. If you pay by</p>
          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>
                bank transfer: NestPay will add money your wallet at the time
                your money has arrived with NestPay in cleared funds; and
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                debit card: NestPay will put money in your wallet at the time
                your bank (card issuer) authorises the payment
              </span>
            </li>
          </ul>

          <p className="font-medium">
            4.9 What if you add money to your wallet in a currency other than
            the currency of your wallet?{" "}
          </p>
          <p>
            When you add money to your wallet, it is added in the currency of
            the wallet you are topping up and not the currency of the money you
            send. If:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>
                you send NestPay money by bank transfer in a currency other than
                the currency of your wallet; or
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                you use a debit card and the money arrives with NestPay in a
                currency other than that of your wallet,
              </span>
            </li>
          </ul>

          <p>
            this money will be converted into the currency of your wallet using
            NestPay’s standard exchange rates. Your statement will show the
            exchange rate which applied on the date that the money was added to
            your wallet. Exchange rates may change and the exchange rate which
            applies when you check may not be the exchange rate that was used to
            convert your funds. Please see section 6.12 for more information on
            exchange rates
          </p>

          <p className="font-medium">
            4.10 How do you find out the balance of money in your wallets and
            how will you know when money has been added to your wallets?{" "}
          </p>
          <p>
            You can check the balance of your wallets by viewing the balance and
            transaction history of your wallet on the app. You can view such
            information from the app at any time until your account with NestPay
            is closed. We will send a notification to your mobile device each
            time you receive money into one of your wallets. You can turn off
            these notifications through your device’s settings at any time. If
            you turn off notifications, you should regularly check your payments
            on the app. It’s important that you know what payments go into and
            out of your account, so NestPay recommends that you do not turn off
            notifications
          </p>
          <p className="font-medium">
            4.11 Will you receive a statement relating to your wallets?
          </p>
          <p>
            Yes, NestPay shall issue monthly statements on the app. NestPay
            shall email you to let you know when these are available (unless
            there have been no changes to your wallets during the relevant month
            in which case NestPay shall not email you). Please note that once
            you are no longer a client of NestPay, you will no longer have
            access to the app to obtain your online statement history.
            Accordingly, you may wish to print or download any of your account
            information before requesting the closure of your account to ensure
            your records are complete. Alternatively, you may request your
            account statements from customer support. After verification of your
            identity, NestPay shall email the statements to you
          </p>

          <p className="font-medium">
            4.12 Can someone other than you add money to your wallet?
          </p>
          <p>
            A person other than you can add money to your wallet only by sending
            money from their own wallet with NestPay.
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>sending money from their own wallet with NestPay; or</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                by sending money from another account they hold and entering the
                details of the IBAN linked to your wallet as the beneficiary
                details.
              </span>
            </li>
          </ul>

          <p className="font-medium">
            4.13 Will NestPay ever deduct money from your wallet?
          </p>
          <p>Yes, NestPay will deduct money from your wallet when:</p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>
                you send money from your wallet to another wallet you or a third
                party holds or to a payment account which is not a wallet;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                you owe NestPay money in one currency as you are using it to
                purchase money in another currency (foreign exchange), whether
                this money in the purchased currency will be credited to another
                wallet you or a third party holds or sent to a payment account
                which is not a wallet;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(c)</span>
              <span>
                you owe NestPay fees – please see section 11 (fees and interest)
                for more information
              </span>
            </li>
          </ul>

          <p className="font-medium">
            4.14 Can you ever have a negative balance in your wallet?
          </p>
          <p>
            NestPay will check that you have enough money in your wallet before
            deducting money from it. However, you may fall into negative balance
            if you are charged fees in excess of your balance. If this ever
            happens, you must immediately top up your wallet. Please see section
            4.4 for information on how to do this.
          </p>

          <p className="font-medium">
            4.15 What if money is paid into your wallet by mistake?{" "}
          </p>
          <p>
            NestPay reasonably believes that money has been paid into your
            wallet by mistake, NestPay:
          </p>

          <ul className="list-disc pl-8 space-y-2">
            <li className="flex gap-2">
              <span className="font-bold">(a)</span>
              <span>shall contact you and let you know;</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(b)</span>
              <span>
                shall be entitled to share your personal information with the
                paying bank so that you can be contacted directly;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(c)</span>
              <span>
                shall be entitled to freeze an amount of money up to the amount
                received by you; and/or
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">(d)</span>
              <span>
                shall be entitled to deduct the appropriate amount of money from
                your wallet and send it to the payment service provider of the
                payer where NestPay deems that you have been paid by mistake
              </span>
            </li>
          </ul>

          <p>
            You must let NestPay know if you think that a payment made to you
            was not a mistake. If you think a payment made to you from a payment
            service provider based in the UK or in the EEA was not a mistake,
            NestPay may share your personal information with the payment service
            provider of the payer so that you can be contacted directly. This is
            because NestPay is required to cooperate with other payment service
            providers and share all relevant information in order to assist with
            tracing money sent to the wrong person
          </p>

          <section className="space-y-5 mt-8">
            <p className="text-lg font-bold mb-8">
              5. Information on how money in your wallet is safeguarded
            </p>

            <p className="font-medium">
              5.1 When is money safeguarded by NestPay on your behalf?{" "}
            </p>

            <p>
              When NestPay receives money for your wallet, NestPay will add
              electronic money to your wallet and place the equivalent amount of
              money in segregated bank accounts. This is commonly known as
              safeguarding.
            </p>

            <p className="font-medium">
              5.2 What are segregated bank accounts?
            </p>
            <p>
              These are bank accounts which NestPay holds with tier 1 banks and
              only hold client money and not NestPay’s own money to keep your
              money safe.
            </p>

            <p className="font-medium">
              5.3 What is the point of safeguarding?
            </p>
            <p>
              Safeguarding your money means that in the unlikely event that
              NestPay gets into financial difficulties, the money which NestPay
              safeguards on your behalf will be protected from the claims of
              NestPay’s creditors and should be returned to you in full.
            </p>

            <p className="font-medium">
              5.4 When will NestPay stop safeguarding?
            </p>

            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold"></th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                    Transaction type
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                    When (if at all) will NestPay stop safeguarding money
                    credited to your wallet?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    1
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Transfer of money from a wallet (other than an NGN wallet)
                    belonging to you to another wallet (other than an NGN
                    wallet) belonging to you, whether or not there is an
                    exchange of money from one currency to another.
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    NestPay will safeguard the appropriate amount of money for
                    you throughout this transaction.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    2
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    Transfer of money from a wallet (other than an NGN wallet)
                    belonging to you to a wallet (other than an NGN wallet)
                    belonging to another person, whether or not there is an
                    exchange of money from one currency to another
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    NestPay shall stop safeguarding money for you when your
                    wallet is debited and start safeguarding for the beneficiary
                    wallet holder when their wallet is credited.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    3
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    Transfer of money from a wallet (other than an NGN wallet)
                    belonging to you to a payment account which is not provided
                    by NestPay (including an NGN wallet), whether or not there
                    is an exchange of money from one currency to another (unless
                    circumstances in transaction 4 apply).
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    NestPay shall cease safeguarding when money subject to the
                    transfer has been transferred to another payment service
                    provider that holds this money on behalf of the beneficiary.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    4
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    Transfer of money from one of your wallets (other than an
                    NGN wallet) to a payment account which belongs to you but is
                    not provided by NestPay (for example your NGN wallet).
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    {" "}
                    Foreign exchange linked to the transfer.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-bold">
                    5
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    NestPay shall cease safeguarding when money is debited from
                    your wallet to pay money you owe NestPay under the foreign
                    exchange transaction.
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    {" "}
                    Money in the exchanged currency will not be safeguarded as
                    we deem this transaction to be a pure foreign exchange
                    transaction (which we are allowed to safeguard) and not a
                    payment contract (which we have to safeguard).
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="font-medium">
              5.5 How will money in my NGN wallet be safeguarded?
            </p>
            <p>
              Please see Pagatech’s terms for information on how money in your
              NGN wallet will be safeguarded. A link to these terms can be found
              in section <span className="font-bold">4.2.</span>{" "}
            </p>
          </section>

          <section className="space-y-5 mt-8">
            <p className="text-lg font-bold mb-8">6. The app</p>

            <p className="font-medium">6.1 What is the app?</p>
            <p>
              The app is NestPay’s mobile application where you can, among other
              things:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  {" "}
                  view the amount and currency of money held in your wallet with
                  NestPay and your NGN wallet with Pagatech;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  exchange money in your wallet from one currency to the
                  currency of another wallet you hold;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>
                  send money in one of your wallets to other wallets and to any
                  payment accounts which are not wallets;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(d)</span>
                <span>
                  exchange money in one of your wallets to another currency
                  prior to it being sent to the beneficiary account you provide
                  NestPay with the details of;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(e)</span>
                <span>
                  send a payment order to Pagatech relating to money in your NGN
                  wallet;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(f)</span>
                <span>
                  view the details of money you have exchanged and payments you
                  have executed;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(g)</span>
                <span>download your monthly statements.</span>
              </li>
            </ul>

            <p className="font-medium">6.2 How do you access the app? </p>
            <p>
              You can access the app by downloading it onto your phone from your
              usual app provider. To use NestPay’s mobile app, you need at least
              the following operating systems:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>iOS - version 12 minimum;</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>android – version 5.0 minimum.</span>
              </li>{" "}
            </ul>

            <p className="font-medium">
              6.3 How do you make a payment using the app?{" "}
            </p>
            <p>
              You can make a request for money in one of your wallets to be sent
              to another wallet or a payment account which is not a wallet via
              the app by following the instructions on the app, which will
              include inserting the following details:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  the amount of money in the currency of your wallet you wish to
                  make the payment from;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  {" "}
                  the currency of the money you wish to send to the beneficiary
                  account;
                </span>
              </li>{" "}
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>
                  the name of the person, company or institution you want to
                  send the money to; and
                </span>
              </li>{" "}
              <li className="flex gap-2">
                <span className="font-bold">(d)</span>
                <span>
                  if the payment is to a non-wallet payment account, the payment
                  account’s sort code and account number or for international
                  payments the account’s BIC and IBAN or such other information
                  NestPay requests.
                </span>
              </li>
            </ul>

            <p>
              You can also make a request for money in one of your wallets to be
              sent to a payment account by using a payment initiation service
              provider.
            </p>
            <p className="font-medium">
              6.4 If the currency of the money you wish to send to the
              beneficiary account is different to the currency of the wallet you
              are making the payment from then NestPay will carry out a foreign
              exchange transaction for you at the foreign exchange rate set out
              in the app prior to sending money in the exchanged currency to the
              beneficiary account.
            </p>

            <p className="font-medium">
              6.5 Can you set up a payment to be made at a date in the future?{" "}
            </p>
            <p>
              No, you can only ask NestPay to make payments for immediate
              execution.
            </p>

            <p className="font-medium">
              6.6 Can you cancel a payment once you have asked NestPay to
              execute it?{" "}
            </p>
            <p>
              No, however, if you suspect that you have been a victim of fraud
              or made the transaction in error you must notify us immediately.
            </p>

            <p className="font-medium">
              6.7 How long will it take for the money to reach the desired
              account?
            </p>
            <p>
              We are obliged by regulation to let you know the maximum times (as
              set by law) it should take for money to arrive with the
              beneficiary’s payment service provider from the date you told
              NestPay to make a payment. NestPay sets out these maximum times in
              the table below. Please note that it may take much less time for
              your money to reach the beneficiary’s payment service provider.
            </p>

            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                    Payment type
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                    If you provide your payment order at this time…
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                    When will money arrive in the beneficiary’s account
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 ">
                    Payment to a wallet in any currency
                  </td>
                  <td className="border border-gray-300 px-4 py-2">Any time</td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    There is no statutory deadline. However, in most cases the
                    money will arrive very shortly after you have placed the
                    payment order with us.
                  </td>
                </tr>

                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 ">
                    Payment in euro or sterling
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    Before 4 pm on a business day
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    by the end of the business day after NestPay receives your
                    payment order
                  </td>
                </tr>

                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 ">
                    Payment in euro or sterling
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    After 4 pm on a business day or not on a business day
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    by the end of the second business day after NestPay receives
                    your payment order
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 ">
                    Payment not in euro or sterling where the beneficiary
                    account is in the European Economic Area
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    by the end of the fourth business day after NestPay receives
                    your payment order
                  </td>
                  <td className="border border-gray-300 px-4 py-2 "></td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 ">
                    Payment not in euro or sterling where the beneficiary
                    account is in the European Economic Area
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    After 4 pm on a business day or not on a business day
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    By the end of the fifth business day after NestPay receives
                    your payment order
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 ">
                    Payment not in euro or sterling and beneficiary’s account is
                    outside the European Economic Area
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    At any time
                  </td>
                  <td className="border border-gray-300 px-4 py-2 ">
                    There is no statutory deadline. However, we aim for your
                    money to arrive with the beneficiary’s payment service
                    provider by the end of the third business day after NestPay
                    receives your payment order
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="font-medium">
              6.8 Will NestPay ever refuse to execute a payment or delay in
              executing a payment?
            </p>
            <p>
              Yes, NestPay may do so for one or more of the following reasons:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  if NestPay is prevented from doing so for legal or regulatory
                  reasons, including if NestPay has to carry out further checks;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  if there is not enough money available in your wallet to make
                  the payment and pay the charge for the payment;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>
                  if a bankruptcy order is made against you or you’ve entered
                  into an individual voluntary arrangement with your creditors;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(d)</span>
                <span>if you owe NestPay money;</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(e)</span>
                <span>
                  if NestPay has asked you for important information NestPay
                  reasonably needs and you have not given NestPay that
                  information; or
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(f)</span>
                <span>if NestPay has suspended your access to the app; or</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(g)</span>
                <span>to prevent fraud.</span>
              </li>
            </ul>

            <p className="font-medium">
              6.9 What if the money does not reach its destination?
            </p>
            <p>
              There may be occasions where NestPay sends money on your behalf to
              a beneficiary account which is not a wallet and it is returned to
              NestPay (for whatever reason). If NestPay has to carry out a
              currency exchange when NestPay sent the payment, when the money is
              returned it will be converted back into the original currency at
              the then prevalent exchange rate. This means that the amount you
              receive might be more or less than the amount you originally held
              in your account. NestPay is not responsible for any losses in such
              cases.
            </p>
            <p className="font-medium">
              6.10 How do you exchange money in your wallet from one currency to
              another?
            </p>
            <p>You can exchange money from one currency to another by:</p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  clicking on the "convert" button on the app, whereby you can
                  transfer money in one of your wallets to another wallet in a
                  different currency, in which case you will be provided with
                  the foreign exchange rate prior to agreeing to the conversion;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  clicking on the "send" button on the app, whereby you will be
                  asked which wallet you want to send money from and the
                  currency of the money you want the beneficiary account to
                  receive, if these currencies are different you will be
                  provided with the foreign exchange rate prior to requesting
                  that NestPay sends this money to the beneficiary account.
                </span>
              </li>
            </ul>

            <p className="font-medium">
              6.11 What exchange rates does NestPay use?
            </p>
            <p>
              When you exchange money from one currency to another within the
              app (either by moving from one wallet to another or prior to money
              in the exchanged currency being sent to a beneficiary account)
              NestPay will use an exchange rate that is a mark-up on rate which
              NestPay obtains from the wholesale currency markets. You will be
              informed of the exchange rate NestPay is offering you prior to you
              agreeing to the currency exchange.
            </p>
            <p className="font-medium">
              6.12 How do you find out NestPay’s currency exchange rates?
            </p>
            <p>
              You can find out NestPay’s exchange rates at any given time by
              following the instructions on the app.
            </p>

            <p className="font-medium">
              6.13 Do you have any obligations to keep the app safe? `
            </p>
            <p>
              {" "}
              Yes, it is your responsibility to take all reasonable steps to
              keep safe the app and your password to gain access to the app.
              This includes you: not allowing anyone to access the app or your
              wallet on your behalf; not telling anyone your password; notifying
              NestPay using the methods set out in section 1.2, without undue
              delay, on becoming aware of someone (who is not you): knowing your
              password; accessing or being able to access the app on your
              behalf; logging off the app every time the mobile or other device
              used to gain access to the app is left by you; ensuring that the
              password is not stored by the browser or cached, or otherwise
              recorded by the mobile or other device used to gain access to the
              app; and ensuring that the email account(s), phone number, mobile
              phone number, computer and other network used to communicate with
              NestPay are secure and only accessed by you.
            </p>
          </section>

          <section className="space-y-5 mt-8">
            <p className="text-lg font-bold mb-8">
              7. What happens if something goes wrong?
            </p>

            <p className="font-medium">
              7.1 What if you forget your password to gain access to the app?
            </p>
            <p>
              Please contact customer services using the contact details set out
              in
              <span className="font-bold"> section 1.2.</span>
            </p>
            <p className="font-medium">7.2 What if you think that</p>
            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>a payment has been sent to the wrong account; or</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  money has been sent from your wallet without your
                  authorisation; or
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>you believe you are a victim of fraud</span>
              </li>
            </ul>

            <div className="p-5 bg-gray-200 text-green-500 rounded-lg">
              <p className="font-medium w-fit ">
                If this is the case, you must contact NestPay as soon as
                possible and in any event within 13 months of the date of the
                payment using the contact details set out in section 1.2.
              </p>
            </div>

            <p className="font-medium">
              7.3 When might you be entitled to a refund?{" "}
            </p>
            <p>
              Provided that you have notified NestPay in accordance with section
              7.2 you are entitled to a refund where:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  payment has been executed from your wallet without your
                  authorisation (subject to section 7.4 and section 7.5); and
                  you have authorised a payment but we sent the money, subject
                  to the payment, to an account other than the beneficiary
                  account which you provided us with the details of (subject to
                  section 7.5)
                </span>
              </li>
            </ul>

            <p className="font-medium">
              7.4 When might you be liable for some of the losses you have
              incurred from an unauthorised payment from your wallet?{" "}
            </p>
            <p>
              You are responsible for up to £35 of your losses arising from the
              misuse of the app except where:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  you couldn’t have known that the app was at risk of being
                  misused prior to it being misused; the payment happened
                  because someone were responsible for made a mistake;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  the payment was taken after you told NestPay that someone knew
                  your password or could gain access to the app and had NestPay
                  acted on this information, this would have prevented your
                  loss;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>
                  NestPay didn’t give you a way to tell them about the
                  circumstances set out in section 7.2 and if NestPay had
                  provided this, this would have prevented the loss;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(d)</span>
                <span>
                  the law required NestPay to make you follow certain security
                  procedures when you instructed NestPay to make a payment and
                  NestPay didn’t do this.
                </span>
              </li>
            </ul>

            <p className="font-medium">
              7.5 Are there any circumstances where you are not entitled to a
              refund in accordance with section 7.3?
            </p>
            <p>Yes:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  NestPay won’t refund you any money if you have acted
                  fraudulently or have intentionally or carelessly failed to
                  comply with section 6.13. For example, NestPay wouldn’t make a
                  refund if you gave someone access to your app and they made a
                  payment using the app without your permission;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  NestPay won’t refund you any money if you have acted
                  fraudulently or have intentionally or carelessly failed to
                  comply with section 6.13. For example, NestPay wouldn’t make a
                  refund if you gave someone access to your app and they made a
                  payment using the app without your permission;
                </span>
              </li>
            </ul>
            <p className="font-medium">
              7.6 If you are entitled to a refund in accordance with section
              7.3, how long will this take?
            </p>
            <p>
              NestPay will refund you by the end of the business day following
              the day NestPay becomes aware of the unauthorised or incorrectly
              executed payment, unless NestPay suspects fraud, conducts a review
              and notifies the appropriate authorities.
            </p>

            <p className="font-medium">
              7.7 What happens if you give NestPay incorrect beneficiary account
              details or are scammed into executing a payment or into providing
              NestPay with the beneficiary account details belonging to a
              fraudster?
            </p>
            <p>
              NestPay’s job is to send your money to the beneficiary account
              that you provide NestPay with the details of. NestPay is unable to
              look behind the payments that you wish to make to find out if you
              have provided NestPay with the correct beneficiary account details
              or might have been the subject of a scam. NestPay is not liable
              where you have provided NestPay with beneficiary account details
              for a payment but later tell NestPay that these details were wrong
              except that you were subject of a scam. Accordingly, it is
              essential that you ensure that the beneficiary account details you
              provide NestPay are correct and that you take all the steps that
              you can to ensure that you are not the subject of a scam when
              executing a payment and providing NestPay with beneficiary account
              details. If you tell NestPay that the beneficiary account details
              that you provided NestPay were wrong or that you were the subject
              of a scam, NestPay will try and trace the payment for you. NestPay
              may charge you a reasonable fee for trying to trace this payment.
            </p>

            <p>
              Where you are a victim of APP Fraud, you would be entitled to a
              full refund of your remittance, provided you meet the following
              conditions:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  Your payment or remittance was carried out through Faster
                  Payment System (within United Kingdom);
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  Your transaction was sent to a UK financial institution and a
                  UK based account;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>
                  You are not directly or indirectly involved in the APP Fraud;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(d)</span>
                <span>
                  You did not act with carelessness in adhering to any fraud
                  warnings we gave to you nor have you objected to any
                  interventions we have undertaken to safeguard your payments;;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(e)</span>
                <span>
                  You comply with our reasonable request to furnish information
                  to help us to assess your claim for the refund and provide us
                  with proof that you have reported the fraud to the relevant
                  authorities or otherwise your written consent for us to report
                  the fraud to Police and any other relevant authorities;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(f)</span>
                <span>
                  You have promptly reported to us your knowledge or suspicion
                  of being a victim of APP Fraud and in any event within 13
                  months from the date of the fraudulent transaction; and
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(g)</span>
                <span>
                  You have otherwise acted with appropriate care in using your
                  account.
                </span>
              </li>
            </ul>
            <p className="font-medium">
              7.8 What if it takes longer than it should for money to be
              deposited in the beneficiary account?{" "}
            </p>
            <p>
              Please let NestPay know and it can make a request to the
              beneficiary’s account provider to treat the payment as if it was
              made on time.
            </p>
            <p className="font-medium">
              7.9 What happens if these terms are terminated before you realise
              that you might be entitled to a refund?
            </p>
            <p>
              If this happens, both you and NestPay shall still be entitled to
              rely on this section.
            </p>
          </section>

          <section className="space-y-5 mt-8">
            <p className="text-lg font-bold mb-8">
              8. Information NestPay requires and checks NestPay carries out
              when onboarding you as a client and throughout the term of
              NestPay’s relationship
            </p>

            <p className="font-medium">
              8.1 Does NestPay require any documentation or information from you
              prior to being able to provide you with its services?
            </p>
            <p>
              Yes, NestPay requires documentation and information from you.
              NestPay does this to comply with its legal and regulatory
              obligations. The minimum due diligence NestPay requires to open an
              account with you is your full name, date of birth, mobile phone
              number, residential address and email address. You will also need
              to provide NestPay with a selfie and a photograph of your valid
              government-issued proof of identification (for example, your
              passport). Please note that if you open an NGN wallet with
              Pagatech then we maypass your personal data onto Pagatech only if
              required to do so under limited circumstances.
            </p>

            <p>
              We may require additional documentation and information from you
              during the lifetime of these terms. If you do not provide NestPay
              with the information or documentation it requires, NestPay may
              withhold its services and freeze your money until NestPay receives
              the documentation or information that NestPay requires.
            </p>

            <p className="font-medium">
              8.2 Does NestPay carry out electronic verification checks and, if
              so, what is the effect of this?{" "}
            </p>
            <p>
              Yes, NestPay or someone NestPay instructs may carry out an
              electronic verification check in order to verify your identity.
              This will leave a soft footprint on your credit history. By
              agreeing to these terms, you consent to such searches being
              carried out.
            </p>
            <p className="font-medium"></p>
            <p></p>
            <p className="font-medium"></p>
            <p></p>
          </section>

          <section className="space-y-5 mt-8">
            <p className="text-lg font-bold mb-8">
              9. Are there any circumstances where NestPay may close or suspend
              access to the app?
            </p>

            <p>
              We may close or suspend your access to the app without notice:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  on reasonable grounds relating to the security of the app or
                  the suspected unauthorised or fraudulent use of the app;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  if NestPay has good reason to suspect that you are behaving
                  fraudulently;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>
                  if you haven’t given NestPay (or someone acting on its behalf)
                  any information NestPay needs, or NestPay has good reason to
                  believe that the information you have provided is incorrect,
                  misleading or not true;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(d)</span>
                <span>
                  if you’ve broken these terms and conditions in a serious or
                  persistent way and you haven’t put the matter right within a
                  reasonable amount of time after NestPay has asked you to;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(e)</span>
                <span>
                  if NestPay has good reason to believe that your use of the app
                  is harmful to NestPay or its software, systems or hardware;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(f)</span>
                <span>
                  if NestPay has good reason to believe that you continuing to
                  use the app could damage its reputation or goodwill;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(g)</span>
                <span>
                  if NestPay has asked you to pay money you owe to NestPay and
                  you have not done so within a reasonable period of time;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(h)</span>
                <span>if you’ve been declared bankrupt;</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(i)</span>
                <span>
                  if NestPay has to do so under any law, regulation, court order
                  or ombudsman’s instructions; or at our discretion.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-5 mt-8">
            <p className="text-lg font-bold mb-8">
              10. Other important general terms
            </p>

            <p className="font-medium">
              10.1 Where can you find out information on how NestPay processes
              personal data?
            </p>
            <p>
              Information on how NestPay processes your personal data is set out
              in its privacy policy, which is available on the following weblink
              NestPay/privacy-policy.
            </p>

            <p className="font-medium">
              10.2 What are NestPay’s obligations of confidentiality?
            </p>
            <p>
              {" "}
              NestPay shall keep your confidential information confidential and
              shall not use such confidential information except for the purpose
              of exercising or performing its rights and obligations.
            </p>

            <p className="font-medium">
              10.3 Are there any exceptions to NestPay’s obligation of
              confidentiality?
            </p>
            <p>
              {" "}
              Yes. The provisions of this section shall not apply to any
              information that:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  is or becomes generally available to the public; or was, is or
                  becomes available to NestPay on a non-confidential basis from
                  a person who, to the best of its knowledge, is not bound by a
                  confidentiality agreement or is otherwise prohibited from
                  disclosing the information to NestPay.
                </span>
              </li>
            </ul>

            <p className="font-medium">
              10.4 In addition, NestPay may disclose confidential information
              to:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  its staff and any partners, provided that NestPay ensures that
                  such persons be bound by obligations which are similar to
                  those set out in this section;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  Pagatech for the purposes of them fulfilling their obligations
                  to you under their terms and condition with you;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(c)</span>
                <span>
                  to the extent required to by law or by any governmental or
                  other regulatory authority or by a court or other authority of
                  competent jurisdiction;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(d)</span>
                <span>
                  the bank(s) NestPay uses to provide it with banking facilities
                  (including safeguarding accounts), which will be able to
                  access your confidential information in the normal course of
                  its business.
                </span>
              </li>
            </ul>

            <p className="font-medium">
              10.5 What happens to confidential information on termination of
              these terms?{" "}
            </p>
            <p>
              On termination of this agreement, NestPay shall keep your
              confidential information safe and shall not be under an obligation
              to return it to you or delete it unless required to do so by law.
              Accordingly, the provisions of this section shall continue to
              apply after termination of these terms.
            </p>

            <p className="font-medium">10.6 What happens if you die?</p>
            <p>
              {" "}
              If you die, the money in your account will be dealt with in
              accordance with the administration of your estate. If you have
              appointed a power of attorney, NestPay may provide them with
              access to your account provided that NestPay is satisfied that the
              documentation provided to NestPay is valid and legally binding.
            </p>

            <p className="font-medium">
              10.7 What information can NestPay provide you on intellectual
              property rights?{" "}
            </p>
            <p>
              NestPay’s parent company, NestPay Technology Inc, owns all the
              intellectual property in its products (for example, the content in
              the app and on the NestPay website, the NestPay logo and the
              NestPay card designs). You must not use NestPay’s intellectual
              property as your own, except to enjoy its products. You also must
              not reverse-engineer any of NestPay’s products (that is, reproduce
              them after a detailed examination of their construction or
              composition).
            </p>

            <p className="font-medium">
              10.8 How do you make a complaint about the service NestPay has
              provided to you?{" "}
            </p>
            <p>
              If you feel that NestPay has not met your expectations in the
              delivery of its services or if you think that NestPay has made a
              mistake, please get in touch with NestPay using the contact
              details set out in section 1.2. NestPay has internal procedures
              for handling complaints fairly and promptly. We will send a final
              response to your complaint by the end of 15 business days after
              the day on which we received the complaint. In exceptional
              circumstances, where NestPay cannot send a final response within
              this period of time for reasons beyond NestPay’s reasonable
              control, NestPay shall send a final response to you within 35
              business days of the day on which NestPay received the complaint.
            </p>

            <p className="font-medium">
              10.9 What if you are still not happy once NestPay has responded to
              your complaint?{" "}
            </p>
            <p>
              If you are still not happy once NestPay has responded to your
              complaint, there are options open to you. If you are an eligible
              complainant (i.e. you are acting for purposes which are wholly or
              mainly outside your trade, business, craft, or profession) and
              your complaint falls within the Financial Ombudsman Service’s
              jurisdiction, you may be able to take your complaint to the
              Financial Ombudsman Service. Further information on eligibility
              criteria and the procedures involved in referring your complaint
              to the Financial Ombudsman Service are available on the following
              weblink (
              <Link
                href={"http://www.financial-ombudsman.org.uk"}
                className="text-blue-500"
              >
                www.financial-ombudsman.org.uk
              </Link>
              ).
            </p>
            <p className="font-medium">
              10.10 If you are not an eligible complainant (i.e. you are acting
              for purposes which are wholly or mainly related to your trade,
              business, craft, or profession) or your complaint does not fall
              within the Financial Ombudsman Service’s jurisdiction or you do
              not wish to refer your complaint to the Financial Ombudsman
              Service, you may refer your complaint to the courts in accordance
              with section 10.12, should you not be satisfied with NestPay's
              final response to your complaint.
            </p>

            <p className="font-medium">10.11 Which laws govern these terms?</p>
            <p>
              These terms and any contract to which these terms apply and any
              disputes or claims arising out of or in connection with these
              terms or any such contract or its or their subject matter or
              formation (including non-contractual disputes or claims) are
              governed by, and construed in accordance with, the laws of England
            </p>

            <p className="font-medium">10.12 How will disputes be resolved?</p>
            <p>
              Unless you take your complaint to the Financial Ombudsman Service
              (and the Financial Ombudsman Service is satisfied that your
              complaint falls within its jurisdiction), you irrevocably agree
              that the courts of England & Wales have exclusive jurisdiction to
              settle any dispute or claim or other matter that arises out of or
              in connection with these terms or their subject matter or
              formation (including non-contractual disputes or claims) and any
              contract to which these terms apply or its subject matter or
              formation (including non-contractual disputes or claims) or any of
              the documents to be entered into pursuant to these terms. In
              addition:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li className="flex gap-2">
                <span className="font-bold">(a)</span>
                <span>
                  if you live in Scotland, you can bring legal proceedings in
                  either the English or Scottish courts;
                </span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">(b)</span>
                <span>
                  if you live in Northern Ireland, you can bring legal
                  proceedings in either the English or Northern Irish courts.
                </span>
              </li>
            </ul>

            <p className="font-medium">
              10.13 Who can make changes to these terms?
            </p>
            <p>
              You are unable to make changes to these terms. If NestPay adds a
              new product or service that doesn’t change the existing terms and
              conditions, NestPay may add the product or service immediately and
              let you know the applicable terms before you use it. Otherwise,
              NestPay may amend these terms by giving you no less than two
              months’ notice in writing. If you object to the proposed
              amendments, you have the right to terminate these terms before the
              date proposed by NestPay for the entry into force of the changes.
              You will be deemed to have accepted the proposed amendments unless
              you notify NestPay and terminate these terms before the date
              proposed by NestPay for the entry into force of the changes. If
              NestPay receives no objection from you, such amendments shall take
              effect from the date specified by NestPay but may not affect any
              rights or obligations that have already arisen and will not be
              retrospective.
            </p>

            <p className="font-medium">
              10.14 Can you use account information services and payment
              initiation services?{" "}
            </p>
            <p>
              Yes. You can choose to allow account information service
              provider(s) to access information on your wallets, to combine and
              display information about your account with information from
              accounts you have with other payment service providers, and
              payment initiation service providers to make payments for you from
              your wallet, provided they are authorised by the FCA or another
              relevant regulator and you have given your explicit consent.
            </p>

            <p className="font-medium">
              10.16 If you are thinking of using an account information service
              provider or a payment initiation service provider, it is important
              that you check with the regulator to determine whether it is
              authorised before you use it.
            </p>

            <p className="font-medium">
              10.17 We may stop or suspend your ability to use an account
              information service provider or a payment initiation service
              provider if NestPay has reasonably justified and duly evidenced
              reasons for this relating to unauthorised or fraudulent access to
              information relating to your wallet by that account information
              service provider or payment initiation service provider and/or the
              risk of unauthorised or fraudulent initiation of a payment. If
              NestPay does deny access to an account information service
              provider or payment initiation service provider, unless doing so
              would compromise security or is unlawful, NestPay shall notify you
              as soon as possible.
            </p>

            <p className="font-medium">
              10.18 Can this agreement and associated contracts be transferred
              to another person?
            </p>
            <p>
              Yes, NestPay may transfer its rights and obligations under these
              terms and any associated contract(s) to another organisation
              without your consent. NestPay will always tell you in writing if
              this happens and will ensure that the transfer will not affect
              your rights under these terms or any associated contract(s). You
              may only transfer your rights or your obligations under these
              terms or any associated contract to another person if NestPay
              agrees to this in writing.
            </p>

            <p className="font-medium">
              10.19 Does NestPay record telephone conversations?
            </p>
            <p>
              Yes, by agreeing to these terms you agree that NestPay may record
              telephone conversations between you and NestPay and use such
              recordings or transcripts from such recordings, as evidence in any
              dispute or anticipated dispute. If NestPay makes any recording or
              transcript it may also destroy them in accordance with its normal
              procedure.
            </p>

            <p className="font-medium">
              10.20 Can you obtain a copy of these terms?
            </p>
            <p>
              A copy of these terms and NestPay’s privacy policy will always be
              available on the app, on NestPay’s website and by contacting
              NestPay using the contact details set out in{" "}
              <span className="font-bold">section 1.2. </span>
            </p>

            <p className="font-medium">
              10.21 What if something unexpected happens?{" "}
            </p>
            <p>
              If any abnormal or unforeseeable circumstances outside NestPay’s
              reasonable control (for example, a failure of computer systems
              which happens for reasons outside NestPay’s reasonable control or
              any industrial action which happens for reasons outside NestPay’s
              reasonable control) prevents NestPay from providing NestPay’s
              usual service, NestPay shall not be liable for the this.
            </p>

            <p className="font-medium">
              10.22 What if NestPay delays in taking action?{" "}
            </p>
            <p>
              If NestPay does not insist immediately that you do anything you
              are required to do under these terms, or if NestPay delays in
              taking steps against you in respect of your breach of these terms
              or any contract, that will not mean that you do not have to do
              those things and it will not prevent NestPay from taking steps
              against you at a later date. For example, if your wallet goes into
              a negative balance and NestPay does not freeze your account or
              chase you for payment immediately, NestPay can still freeze your
              account or require you to top up your wallet at a later date.
            </p>

            <p className="font-medium">
              10.23 What if a court decides that a section of these terms is
              unlawful?
            </p>
            <p>
              If any court or relevant authority decides that any section of
              these terms is unlawful, the remaining sections will remain in
              full force and effect.
            </p>
          </section>

          <section className="space-y-5 mt-8">
            <p className="text-lg font-bold mb-8">11. Fees and interest</p>

            <p className="font-medium">11.1 Does NestPay charge any fees?</p>
            <p>
              NestPay doesn’t charge you any fees directly. NestPay makes money
              when it exchanges money from one currency to another for you
              (please see section 6.11 for more details).
            </p>

            <p className="font-medium">
              11.2 Are there any third-party fees you should be made aware of?{" "}
            </p>
            <p>
              In some circumstances, a number of intermediaries (such as
              correspondent banks) may be involved in an international transfer
              of currency, and such intermediaries may charge fees and expenses.
              The charges will in most cases (but not always) be deducted prior
              to its delivery. These charges are beyond NestPay’s control and
              whilst NestPay will endeavour to minimise these for you wherever
              possible, those charges cannot always be calculated in advance.
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default page;
