import React from "react";
import { render } from "@testing-library/react";
import useStyles from "../../components/DivisionSummary/DivisionSummaryStyles";
import { DivisionSummary } from "../../components";
import { ApolloProvider } from "@apollo/client";

function checkStyles() {
  let values;

  function MockedComponent() {
    values = useStyles();
    return null;
  }
  render(<MockedComponent />);
  return values;
}

/* const client = {};
Object.defineProperty(client, "watchQuery", {
  value: () => ({}),
});
 */
describe("<DivisionSummary/>", () => {
  /* it("renders the <DivisionSummary with populated data", () => {
    const { container, getByText } = render(
      <ApolloProvider client={client}>
        <DivisionSummary />
      </ApolloProvider>
    );

    expect(getByText("Division Summary")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  }); */

  it("validate the return values of useStyles hook", () => {
    const validateStlyes = checkStyles();

    expect(validateStlyes.divisionSummary).toBeTruthy();
  });
});
