import { useEffect, useState, useTransition, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { BenchmarkGroupResult } from "../../data/parseBenchmarkData";
import BenchmarkSummarySection from "./BenchmarkSummarySection";
import DetailedBenchmarkResult from "./DetailedBenchmarkResult";

const BenchmarkResult = ({
  benchmarkResult,
}: {
  benchmarkResult: BenchmarkGroupResult;
}) => {
  const [content, setContent] = useState(<></>);
  const [, startTransition] = useTransition();
  const schemaDisplayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startTransition(() =>
      setContent(
        <>
          <BenchmarkSummarySection benchmarkResults={[benchmarkResult]} />
          <DetailedBenchmarkResult benchmarkGroupResult={benchmarkResult} />
        </>,
      ),
    );
  }, [benchmarkResult]);
  return (
    <Accordion.Item ref={schemaDisplayRef} eventKey={benchmarkResult.name}>
      <Accordion.Header>
        <Container fluid>
          <Row>
            <Col xs={12} className="fw-bold mb-2">{benchmarkResult.name}</Col>
            <Col xs={12}>{benchmarkResult.description}</Col>
          </Row>
        </Container>
      </Accordion.Header>
      <Accordion.Body>{content}</Accordion.Body>
    </Accordion.Item>
  );
};

export default BenchmarkResult;
