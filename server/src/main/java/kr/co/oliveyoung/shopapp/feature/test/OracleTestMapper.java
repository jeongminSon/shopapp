package kr.co.oliveyoung.shopapp.feature.test;

import kr.co.oliveyoung.shopapp.config.mybatis.OracleMapper;

import java.util.List;

@OracleMapper
public interface OracleTestMapper {

    List<OracleTest> selectTest();
}
