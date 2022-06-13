package ru.council.competitions.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.export.ooxml.JRXlsxExporter;
import net.sf.jasperreports.engine.query.JsonQueryExecuterFactory;
import net.sf.jasperreports.export.*;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.council.competitions.repositories.CompetitionEntityRepository;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;

@Slf4j
@RestController
@RequestMapping("/api/documents")
public class DocumentsController {

    private final Exporter<ExporterInput, XlsxReportConfiguration, XlsxExporterConfiguration, OutputStreamExporterOutput> excelExporter = new JRXlsxExporter();
    private final CompetitionEntityRepository competitionEntityRepository;

    public DocumentsController(CompetitionEntityRepository competitionEntityRepository) {
        this.competitionEntityRepository = competitionEntityRepository;
    }

    @GetMapping("/document")
    public ResponseEntity<?> getDocument() throws JRException, JsonProcessingException {
        HashMap<Object, Object> data = new HashMap<>();
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        data.put("weight", 53);
        HashMap<String, Object> parameters = new HashMap<>();
        log.info("{}", Files.exists(Path.of("F:\\competitions\\src\\main\\resources\\templates\\competition4x4.jrxml")));
        parameters.put(JsonQueryExecuterFactory.JSON_INPUT_STREAM, new ByteArrayInputStream(new ObjectMapper().writeValueAsBytes(data)));
        JasperPrint fill = JasperFillManager.getInstance(new SimpleJasperReportsContext()).fill(JasperCompileManager.compileReport("F:\\competitions\\src\\main\\resources\\templates\\competition4x4.jrxml"), parameters);

        ExporterInput in = new SimpleExporterInput(fill);
        OutputStreamExporterOutput out = new SimpleOutputStreamExporterOutput(outputStream);
        excelExporter.setExporterInput(in);
        excelExporter.setExporterOutput(out);
        excelExporter.exportReport();

        return ResponseEntity.ok().contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")).body(outputStream.toByteArray());
    }

}